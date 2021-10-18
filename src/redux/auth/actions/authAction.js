import { FETCH_LOGIN_ERROR, FETCH_LOGIN_REQUEST, FETCH_LOGIN_SUCCESS } from "./actionType";

  
  export function fetchLoginRequest() {
    return {
      type: FETCH_LOGIN_REQUEST,
    };
  }
  
  export function fetchLoginSuccess(auth) {
    return {
      type: FETCH_LOGIN_SUCCESS,
      payload: auth,
    };
  }
  export function fetchLoginError(error) {
    return {
      type: FETCH_LOGIN_ERROR,
      payload: error,
    };
  }