import reducer from "./auth";
import * as actionTypes from "../actions/authActions";

describe("auth reducer test", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
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
    });
  });

  it("should store the token upon login", () => {
    expect(
      reducer(
        {
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
        },
        {
          type: actionTypes.AUTH_SUCCESS,
          authPending: false,
          token: "action.token",
          userId: "action.userId",
          userLogged: true,
          userDisplayName: "action.displayName",
        }
      )
    ).toEqual({
      error: null,
      authPending: false,
      userLogged: true,
      token: "action.token",
      userId: "action.userId",
      userDisplayName: "action.displayName",
      userFirstName: "",
      userSurname: "",
      userEmail: "",
      registeredFrom: "",
    });
  });
});
