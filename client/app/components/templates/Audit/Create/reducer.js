import _merge from 'lodash/merge';
import {
  SUBMIT_CREATE_AUDIT,
  SUBMIT_CREATE_AUDIT_SUCCESS,
  SUBMIT_CREATE_AUDIT_ERROR,
  CLEAR_CREATE_AUDIT_DATA,
  CREATE_QUESTIONNAIRE_SET,
  CREATE_QUESTIONNAIRE_SET_SUCCESS,
  CREATE_QUESTIONNAIRE_SET_ERROR,
} from './constants';

const initialState = {
  isFetching: false,
  data: null,
  error: null,
  isQSCreating: false,
  isQSCreated: false,
  errorQS: null,
};

function createAuditReducer(state = initialState, { type, error, data }) {
  switch (type) {
    case SUBMIT_CREATE_AUDIT:
      return _merge({}, state, {
        isFetching: true,
        data: null,
        error: null,
      });
    case SUBMIT_CREATE_AUDIT_SUCCESS: {
      return _merge({}, state, {
        isFetching: false,
        data: data.createProject,
        error: null,
      });
    }
    case SUBMIT_CREATE_AUDIT_ERROR:
      return _merge({}, state, {
        isFetching: false,
        data: null,
        error,
      });
    case CLEAR_CREATE_AUDIT_DATA:
      return _merge({}, state, {
        isFetching: false,
        data: null,
        error: null,
      });
    case CREATE_QUESTIONNAIRE_SET:
      return _merge({}, state, {
        isQSCreating: true,
        isQSCreated: false,
      });
    case CREATE_QUESTIONNAIRE_SET_SUCCESS:
      return _merge({}, state, {
        isQSCreating: false,
        isQSCreated: true,
      });
    case CREATE_QUESTIONNAIRE_SET_ERROR:
      return _merge({}, state, {
        isQSCreating: false,
        isQSCreated: false,
        errorQS: error,
      });
    default:
      return state;
  }
}

export default createAuditReducer;
