import _merge from 'lodash/merge';
import {
  SUBMIT_ACCOUNT_LOGIN,
  SUBMIT_ACCOUNT_LOGIN_SUCCESS,
  SUBMIT_ACCOUNT_LOGIN_ERROR,
  SUBMIT_ACCOUNT_LOGOUT,
  SUBMIT_ACCOUNT_LOGOUT_SUCCESS,
  SUBMIT_ACCOUNT_LOGOUT_ERROR,
  TOGGLE_USER_AUTHENTICATED,
} from './constants';

const initialState = {
  isAuthenticated: false,
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
        isLoading: false,
        error: null,
      });
    }
    case SUBMIT_ACCOUNT_LOGIN_ERROR: {
      return _merge({}, state, {
        isLoading: false,
        error,
      });
    }
    case SUBMIT_ACCOUNT_LOGOUT: {
      return _merge({}, state, {
        isLoading: true,
        error: null,
      });
    }
    case SUBMIT_ACCOUNT_LOGOUT_SUCCESS: {
      return _merge({}, state, {
        isLoading: false,
        error: null,
      });
    }
    case SUBMIT_ACCOUNT_LOGOUT_ERROR: {
      return _merge({}, state, {
        isLoading: false,
        error,
      });
    }
    case TOGGLE_USER_AUTHENTICATED: {
      return _merge({}, state, {
        isAuthenticated: isAuth,
      });
    }
    default:
      return state;
  }
}

export default accountLogInReducer;
