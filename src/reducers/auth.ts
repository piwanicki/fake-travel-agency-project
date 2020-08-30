import {
  AUTH_PENDING,
  AUTH_SUCCESS,
  AUTH_ERROR,
  AUTH_LOGOUT,
  UPD_USERDATA,
  UPD_DB_USERDATA,
} from "../actions/authActions";
import { AuthTypes } from '../types/AuthTypes';
import { AuthActionTypes } from '../actions/authActions';
import { Reducer } from 'redux';

const initialState: AuthTypes = {
  error: '',
  authPending: false,
  userLogged: false,
  token: '',
  userId: '',
  userDisplayName: '',
  userFirstName: '',
  userSurname: '',
  userEmail: '',
  registeredFrom: '',
};

const reducer: Reducer<AuthTypes, AuthActionTypes> = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_PENDING: {
      return {
        ...state,
        authPending: true,
      };
    }

    case AUTH_SUCCESS: {
      const data = action.data;
      return {
        ...state,
        authPending: false,
        token: data.token,
        userId: data.userId,
        userLogged: data.token !== null,
        userDisplayName: data.userDisplayName,
      };
    }

    case AUTH_ERROR: {
      return {
        ...state,
        authPending: false,
        error: action.error
      };
    }

    case AUTH_LOGOUT: {
      return {
        ...state,
        token: '',
        userId: '',
        userLogged: false,
        userDisplayName: "",
      };
    }

    case UPD_USERDATA: {
      const data = action.data;
      return {
        ...state,
        authPending: false,
        userFirstName: data.userFirstName,
        userEmail: data.email,
        userSurname: data.userSurname,
        registeredFrom: data.registeredFrom,
      };
    }

    case UPD_DB_USERDATA: {
      const data = action.data;
      return {
        ...state,
        authPending: false,
        userFirstName: data.userFirstName,
        userDisplayName: data.userDisplayName,
        userSurname: data.userSurname,
      };
    }
    default:
      return state;
  }
};

export default reducer;
