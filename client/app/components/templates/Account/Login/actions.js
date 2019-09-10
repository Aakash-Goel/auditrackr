import {
  SUBMIT_ACCOUNT_LOGIN,
  SUBMIT_ACCOUNT_LOGIN_SUCCESS,
  SUBMIT_ACCOUNT_LOGIN_ERROR,
  SUBMIT_ACCOUNT_LOGOUT,
  SET_IS_USER_AUTHENTICATED,
} from './constants';

export function submitAccountLogIn(args) {
  return {
    type: SUBMIT_ACCOUNT_LOGIN,
    args,
  };
}

export function submitAccountLogInSuccess() {
  return {
    type: SUBMIT_ACCOUNT_LOGIN_SUCCESS,
  };
}

export function submitAccountLogInError(error) {
  return {
    type: SUBMIT_ACCOUNT_LOGIN_ERROR,
    error,
  };
}

export function submitAccountLogOut(args) {
  return {
    type: SUBMIT_ACCOUNT_LOGOUT,
    args,
  };
}

export function setIsUserAuthenticated(isAuth) {
  return {
    type: SET_IS_USER_AUTHENTICATED,
    isAuth,
  };
}
