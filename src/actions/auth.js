import * as authActions from "./authActions";
import axios from "axios";

export const authPending = () => {
  return {
    type: authActions.AUTH_PENDING,
  };
};

export const authSuccess = (authData) => {
  console.log(authData);
  const token = authData.idToken;
  const userId = authData.localId;
  const displayName = authData.displayName;
  return {
    type: authActions.AUTH_SUCCESS,
    token: token,
    userId: userId,
    displayName: displayName
  };
};

export const authError = (error) => {
  return {
    type: authActions.AUTH_ERROR,
    error: error,
  };
};

export const logout = () => {
  return {
    type: authActions.AUTH_LOGOUT,
  }
}

export const checkAuthTimeout = (expTime) => {
  return dispatch => {
    console.log(`checkAuthTimeout  => ${expTime}s`);
    setTimeout(() => {
      dispatch(logout())
    },expTime * 1000)
  };
  
}

export const signUp = (newUser) => {
  return (dispatch) => {
    dispatch(authPending());
    const authData = {
      ...newUser,
      returnSecureToken: true,
    };
    console.log(authData);
    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCIe6F-n4XKDOZOS8Fk_MQwivJgVF4542o",
        authData
      )
      .then((resolve) => {
        console.log(resolve);
        dispatch(authSuccess(resolve.data));
      })
      .catch((error) => {
        console.log(error);
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
    console.log(authData);
    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCIe6F-n4XKDOZOS8Fk_MQwivJgVF4542o",
        authData
      )
      .then((resolve) => {
        console.log(resolve);
        dispatch(authSuccess(resolve.data));
        dispatch(checkAuthTimeout(resolve.data.expiresIn))
        
      })
      .catch((error) => {
        console.log(error);
        dispatch(authError(error));
      });
  };
};
