import {AUTH_PENDING, AUTH_SUCCESS, AUTH_ERROR} from "../actions/authActions";

const initialState = {
  error: null,
  authPending: false,
  userLogged: false,
  token: null,
  userId: null,
  authData: null,
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
        authData: action.authData,
      };
    }

    case AUTH_ERROR: {
      console.log(`Auth error`);
      return {
        ...state,
        authPending: false,
      };
    }
    default:
      return state;
  }
};

export default reducer;
