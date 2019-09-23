import {
  SUBMIT_ACCOUNT_SIGNUP,
  SUBMIT_ACCOUNT_SIGNUP_SUCCESS,
  SUBMIT_ACCOUNT_SIGNUP_ERROR,
} from './constants';

export function submitAccountSignUp(args) {
  return {
    type: SUBMIT_ACCOUNT_SIGNUP,
    args,
  };
}

export function submitAccountSignUpSuccess(data) {
  return {
    type: SUBMIT_ACCOUNT_SIGNUP_SUCCESS,
    data,
  };
}

export function submitAccountSignUpError(error) {
  return {
    type: SUBMIT_ACCOUNT_SIGNUP_ERROR,
    error,
  };
}
