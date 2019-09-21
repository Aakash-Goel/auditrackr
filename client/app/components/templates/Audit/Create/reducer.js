import _merge from 'lodash/merge';
import {
  SUBMIT_CREATE_AUDIT,
  SUBMIT_CREATE_AUDIT_SUCCESS,
  SUBMIT_CREATE_AUDIT_ERROR,
  CLEAR_CREATE_AUDIT_DATA,
} from './constants';

const initialState = {
  isLoading: false,
  data: null,
  error: null,
};

function createAuditReducer(state = initialState, { type, error, data }) {
  switch (type) {
    case SUBMIT_CREATE_AUDIT:
      return _merge({}, state, {
        isLoading: true,
        data: null,
        error: null,
      });
    case SUBMIT_CREATE_AUDIT_SUCCESS: {
      return _merge({}, state, {
        isLoading: false,
        data: data.createProject,
        error: null,
      });
    }
    case SUBMIT_CREATE_AUDIT_ERROR:
      return _merge({}, state, {
        isLoading: false,
        data: null,
        error,
      });
    case CLEAR_CREATE_AUDIT_DATA:
      return _merge({}, state, {
        isLoading: false,
        data: null,
        error: null,
      });
    default:
      return state;
  }
}

export default createAuditReducer;
