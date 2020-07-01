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
  userDisplayName: "",
  userFirstName: "",
  userLastName: "",
  userEmail: "",
  registeredFrom: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_PENDING: {
      return {
        ...state,
        authPending: true,
      };
    }

    case AUTH_SUCCESS: {
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
      return {
        ...state,
        authPending: false,
      };
    }

    case AUTH_LOGOUT: {
      return {
        ...state,
        token: null,
        userId: null,
        userLogged: false,
        userDisplayName: "",
      };
    }

    case UPD_USERDATA: {
      return {
        ...state,
        userFirstName: action.userData.firstName,
        userEmail: action.userData.email,
        userLastName: action.userData.lastName,
        registeredFrom: action.userData.regFrom
      }

    }
    default:
      return state;
  }
};

export default reducer;
