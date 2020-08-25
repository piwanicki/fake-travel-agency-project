export const AUTH_PENDING = "AUTH_PENDING";
export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const AUTH_ERROR = "AUTH_ERROR";
export const AUTH_LOGOUT = "AUTH_LOGOUT";
export const UPD_USERDATA = "UPD_USERDATA";
export const UPD_DB_USERDATA = "UPD_DB_USERDATA";

interface AuthPending {
  type: typeof AUTH_PENDING
}

interface AuthSuccess {
  type: typeof AUTH_SUCCESS
  data: {
    authPending: boolean,
    token: string,
    userId: string,
    userLogged: boolean,
    userDisplayName: string,
  }
}

interface AuthError {
  type: typeof AUTH_ERROR
  error: string
}

interface AuthLogout {
  type: typeof AUTH_LOGOUT
}

interface UpdUserData {
  type: typeof UPD_USERDATA
  data: {
    userFirstName: string,
    email: string,
    userSurname: string,
    registeredFrom: string,
  }
}

interface UpdUserDbData {
  type: typeof UPD_DB_USERDATA
  data: {
    userFirstName: string,
    userDisplayName: string,
    userSurname: string,
  }
}


export type AuthActionTypes = AuthPending | AuthSuccess | AuthError | AuthLogout | UpdUserData | UpdUserDbData;