import {AUTH_PENDING, AUTH_SUCCESS, AUTH_ERROR, AUTH_LOGOUT} from "../actions/authActions";

const initialState = {
  error: null,
  authPending: false,
  userLogged: true,
  token: null,
  userId: null,
  authData: null,
  userDisplayName: 'Test'
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
        userId : action.userId,
        userLogged: action.token !== null,
        userDisplayName: action.displayName
      };
    }

    case AUTH_ERROR: {
      console.log(`Auth error`);
      return {
        ...state,
        authPending: false,
      };
    }

    case AUTH_LOGOUT :  {
      console.log(`Auth logout`)
      return {
        ...state,
        token: null,
        userId: null,
        userLogged: false
      }
    }
    default:
      return state;
  }
};

export default reducer;
