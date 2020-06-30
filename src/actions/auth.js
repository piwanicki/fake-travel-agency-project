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
  const displayName = authData.displayName;
  return {
    type: authActions.AUTH_SUCCESS,
    token: token,
    userId: userId,
    displayName: displayName,
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
    userData: userData,
  };
};

const fetchUserData = (userId, token) => {
  instance
    .get(`/users/${userId}.json?auth=${token}`)
    .then((res) => {
      console.log(res.data);
      updateUserData(res.data);
    })
    .catch((err) => console.log(err));
};

const setLocalStorage = (resolve) => {
  const expirationDate = new Date(
    new Date().getTime() + resolve.data.expiresIn * 1000
  );
  localStorage.setItem("token", resolve.data.idToken);
  localStorage.setItem("expirationDate", expirationDate);
  localStorage.setItem("userId", resolve.data.localId);
  localStorage.setItem("userDisplayName", resolve.data.displayName);
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expirationDate");
  localStorage.removeItem("userId");
  localStorage.removeItem("userDisplayName");
  return {
    type: authActions.AUTH_LOGOUT,
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
          idToken: token,
          localId: localStorage.getItem("userId"),
          displayName: localStorage.getItem("userDisplayName"),
        };
        dispatch(authSuccess(authData));
        dispatch(
          checkAuthTimeout(
            (expirationDate.getTime() - new Date().getTime()) / 1000
          )
        );
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
        setLocalStorage(resolve);
        dispatch(authSuccess(resolve.data));

        var userInfoDb = {...newUser};
        delete userInfoDb.password;

        instance
          .put(`/users/${resolve.data.localId}.json`, userInfoDb)
          .then((resolve) => {
            console.log(resolve);
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
        setLocalStorage(resolve);
        dispatch(fetchUserData(resolve.data.localId, resolve.data.idToken));
        dispatch(authSuccess(resolve.data));
        dispatch(checkAuthTimeout(resolve.data.expiresIn));
      })
      .catch((error) => {
        dispatch(authError(error));
      });
  };
};
