import _merge from 'lodash/merge';
import {
  SUBMIT_ACCOUNT_SIGNUP,
  SUBMIT_ACCOUNT_SIGNUP_SUCCESS,
  SUBMIT_ACCOUNT_SIGNUP_ERROR,
} from './constants';

const initialState = {
  data: null,
  isLoading: false,
  error: null,
};

function accountSignUpReducer(state = initialState, { type, error, data }) {
  switch (type) {
    case SUBMIT_ACCOUNT_SIGNUP:
      return _merge({}, state, {
        isLoading: true,
        error: null,
      });
    case SUBMIT_ACCOUNT_SIGNUP_SUCCESS: {
      return _merge({}, state, {
        data,
        isLoading: false,
        error: null,
      });
    }
    case SUBMIT_ACCOUNT_SIGNUP_ERROR:
      return _merge({}, state, {
        isLoading: false,
        error,
      });
    default:
      return state;
  }
}

export default accountSignUpReducer;
