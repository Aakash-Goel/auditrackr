import _merge from 'lodash/merge';
import {
  SUBMIT_ACCOUNT_LOGIN,
  SUBMIT_ACCOUNT_LOGIN_SUCCESS,
  SUBMIT_ACCOUNT_LOGIN_ERROR,
  SUBMIT_ACCOUNT_LOGOUT,
  SET_IS_USER_AUTHENTICATED,
} from './constants';

const initialState = {
  isAuthenticated: false,
  profile: null,
  isLoading: false,
  error: null,
};

/* eslint-disable complexity */
function accountLogInReducer(state = initialState, { type, error, isAuth }) {
  switch (type) {
    case SUBMIT_ACCOUNT_LOGIN:
      return _merge({}, state, {
        isLoading: true,
        error: null,
      });
    case SUBMIT_ACCOUNT_LOGIN_SUCCESS: {
      return _merge({}, state, {
        isAuthenticated: true, // @TODO: check for token in local-storage
        isLoading: false,
        error: null,
      });
    }
    case SUBMIT_ACCOUNT_LOGIN_ERROR:
      return _merge({}, state, {
        isLoading: false,
        error,
      });
    case SUBMIT_ACCOUNT_LOGOUT: {
      return _merge({}, state, {
        isAuthenticated: false,
        profile: null,
        error: null,
      });
    }
    case SET_IS_USER_AUTHENTICATED: {
      return _merge({}, state, {
        isAuthenticated: true || isAuth, // @TODO: check for token in local-storage
      });
    }
    default:
      return state;
  }
}

export default accountLogInReducer;
