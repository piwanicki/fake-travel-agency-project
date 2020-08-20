import {
  AUTH_PENDING,
  AUTH_SUCCESS,
  AUTH_ERROR,
  AUTH_LOGOUT,
  UPD_USERDATA,
  UPD_DB_USERDATA,
} from "../actions/authActions";

const initialState = {
  error: null,
  authPending: false,
  userLogged: false,
  token: null,
  userId: null,
  userDisplayName: "",
  userFirstName: "",
  userSurname: "",
  userEmail: "",
  registeredFrom: "",
};

const reducer = (state = initialState, action: any) => {
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
        authPending: false,
        userFirstName: action.userData.firstName,
        userEmail: action.userData.email,
        userSurname: action.userData.surname,
        registeredFrom: action.userData.regFrom,
      };
    }

    case UPD_DB_USERDATA: {
      return {
        ...state,
        authPending: false,
        userFirstName: action.userUpdData.firstName,
        userDisplayName: action.userUpdData.displayName,
        userSurname: action.userUpdData.surname,
      };
    }
    default:
      return state;
  }
};

export default reducer;
