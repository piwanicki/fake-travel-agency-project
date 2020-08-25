import * as authActions from "./authActions";
import instance from "../axios-db-instance";
import axios from "axios";

export const authPending = () => {
  return {
    type: authActions.AUTH_PENDING,
  };
};

export const authSuccess = (authData) => {
  const token = authData.idToken;
  const userId = authData.localId;
  const displayName = authData.userDisplayName;
  return {
    type: authActions.AUTH_SUCCESS,
    data: {
      token: token,
      userId: userId,
      userDisplayName: displayName,
    },
  };
};

export const authError = (error) => {
  return {
    type: authActions.AUTH_ERROR,
    error: error,
  };
};

const updateUserData = (userData) => {
  return {
    type: authActions.UPD_USERDATA,
    data: userData,
  };
};

export const updateUserDbData = (userUpdData) => {
  return {
    type: authActions.UPD_DB_USERDATA,
    data: userUpdData,
  };
};

const setLocalStorageUserLogInfo = (resolve) => {
  console.log(resolve);
  const expirationDate = new Date(
    new Date().getTime() + resolve.data.expiresIn * 1000
  );
  localStorage.setItem("token", resolve.data.idToken);
  localStorage.setItem("expirationDate", expirationDate);
  localStorage.setItem("userId", resolve.data.localId);
  localStorage.setItem("userDisplayName", resolve.data.userDisplayName);
};

const setLocalStorageUserAddData = (resolve) => {
  localStorage.setItem("userFirstName", resolve.data.userFirstName);
  localStorage.setItem("userSurname", resolve.data.userSurname);
  localStorage.setItem("userEmail", resolve.data.email);
  localStorage.setItem("registeredFrom", resolve.data.registeredFrom);
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expirationDate");
  localStorage.removeItem("userId");
  localStorage.removeItem("userDisplayName");
  localStorage.removeItem("userFirstName");
  localStorage.removeItem("userSurname");
  localStorage.removeItem("userEmail");
  localStorage.removeItem("registeredFrom");
  return {
    type: authActions.AUTH_LOGOUT,
  };
};

export const updateUserDbInfoHandler = (updUserData) => {
  return (dispatch) => {
    dispatch(authPending());
    instance
      .patch(`/users/${updUserData.userId}.json`, updUserData)
      .then(() => {
        dispatch(updateUserDbData(updUserData));
        localStorage.setItem("userFirstName", updUserData.userFirstName);
        localStorage.setItem("userSurname", updUserData.userSurname);
      })
      .catch((error) => console.log(error));
  };
};

export const checkAuthTimeout = (expTime) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(logout());
    }, expTime * 1000);
  };
};

export const chekAuthState = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    if (!token) {
      dispatch(logout());
    } else {
      const expirationDate = new Date(localStorage.getItem("expirationDate"));
      if (expirationDate < new Date()) {
        dispatch(logout());
      } else {
        const authData = {
          token: token,
          userId: localStorage.getItem("userId"),
          userDisplayName: localStorage.getItem("userDisplayName"),
        };
        const userInfoData = {
          userFirstName: localStorage.getItem("userFirstName"),
          userSurname: localStorage.getItem("userSurname"),
          email: localStorage.getItem("userEmail"),
          registeredFrom: localStorage.getItem("registeredFrom"),
        };
        dispatch(authSuccess(authData));
        dispatch(
          checkAuthTimeout(
            (expirationDate.getTime() - new Date().getTime()) / 1000
          )
        );
        dispatch(updateUserData(userInfoData));
      }
    }
  };
};

export const signUp = (newUser) => {
  return (dispatch) => {
    dispatch(authPending());
    const authData = {
      ...newUser,
      returnSecureToken: true,
    };
    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCIe6F-n4XKDOZOS8Fk_MQwivJgVF4542o",
        authData
      )
      .then((resolve) => {
        var userInfoDb = {...newUser};
        delete userInfoDb.password;
        instance
          .put(`/users/${resolve.data.localId}.json`, userInfoDb)
          .then((resolve) => {
            setLocalStorageUserAddData(resolve);
            setLocalStorageUserLogInfo(resolve);
            dispatch(updateUserData(newUser));
            dispatch(authSuccess(resolve.data));
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        dispatch(authError(error));
      });
  };
};

export const signIn = (email, password) => {
  return (dispatch) => {
    dispatch(authPending());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCIe6F-n4XKDOZOS8Fk_MQwivJgVF4542o",
        authData
      )
      .then((resolve) => {
        setLocalStorageUserLogInfo(resolve);
        instance
          .get(
            `/users/${resolve.data.localId}.json?auth=${resolve.data.idToken}`
          )
          .then((res) => {
            setLocalStorageUserAddData(res);
            dispatch(updateUserData(res.data));
            dispatch(authSuccess(resolve.data));
            dispatch(checkAuthTimeout(resolve.data.expiresIn));
          })

          .catch((err) => console.log(err));
      })
      .catch((error) => {
        dispatch(authError(error));
      });
  };
};
