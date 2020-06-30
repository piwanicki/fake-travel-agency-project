import {
  AUTH_PENDING,
  AUTH_SUCCESS,
  AUTH_ERROR,
  AUTH_LOGOUT,
  UPD_USERDATA
} from "../actions/authActions";

const initialState = {
  error: null,
  authPending: false,
  userLogged: false,
  token: null,
  userId: null,
  authData: null,
  userDisplayName: "",
  userFirstName: "",
  userLastName: "",
  registeredFrom: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_PENDING: {
      console.log(`Auth Pending`);
      return {
        ...state,
        authPending: true,
      };
    }

    case AUTH_SUCCESS: {
      console.log(`Auth success`);
      return {
        ...state,
        authPending: false,
        token: action.token,
        userId: action.userId,
        userLogged: action.token !== null,
        userDisplayName: action.displayName,
      };
    }

    case AUTH_ERROR: {
      console.log(`Auth error`);
      return {
        ...state,
        authPending: false,
      };
    }

    case AUTH_LOGOUT: {
      console.log(`Auth logout`);
      return {
        ...state,
        token: null,
        userId: null,
        userLogged: false,
        userDisplayName: "",
      };
    }

    case UPD_USERDATA: {
      console.log(`update user data with :`);
      console.log(action.userData);
      return {
        userFirstName: action.userData.firstName,
        userLastName: action.userData.lastName,
        registeredFrom: action.userData.regFrom
      }

    }
    default:
      return state;
  }
};

export default reducer;
