import {
  SUBMIT_ACCOUNT_LOGIN,
  SUBMIT_ACCOUNT_LOGIN_SUCCESS,
  SUBMIT_ACCOUNT_LOGIN_ERROR,
  SUBMIT_ACCOUNT_LOGOUT,
  SUBMIT_ACCOUNT_LOGOUT_SUCCESS,
  SUBMIT_ACCOUNT_LOGOUT_ERROR,
  TOGGLE_USER_AUTHENTICATED,
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

export function submitAccountLogOut() {
  return {
    type: SUBMIT_ACCOUNT_LOGOUT,
  };
}

export function submitAccountLogOutSuccess() {
  return {
    type: SUBMIT_ACCOUNT_LOGOUT_SUCCESS,
  };
}

export function submitAccountLogOutError(error) {
  return {
    type: SUBMIT_ACCOUNT_LOGOUT_ERROR,
    error,
  };
}

export function toggleUserAuthenticated(isAuth) {
  return {
    type: TOGGLE_USER_AUTHENTICATED,
    isAuth,
  };
}
