import _merge from 'lodash/merge';
import {
  SUBMIT_CREATE_AUDIT,
  SUBMIT_CREATE_AUDIT_SUCCESS,
  SUBMIT_CREATE_AUDIT_ERROR,
  CLEAR_CREATE_AUDIT_DATA,
  GET_PROJECT_DOMAINS,
  GET_PROJECT_DOMAINS_SUCCESS,
  GET_PROJECT_DOMAINS_ERROR,
} from './constants';

const initialState = {
  isFetching: false,
  data: null,
  error: null,
  isProjDomainFetching: false,
  projDomainList: null,
  errorProjDomain: null,
};

/* eslint-disable complexity */
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
    case GET_PROJECT_DOMAINS:
      return _merge({}, state, {
        isProjDomainFetching: true,
      });
    case GET_PROJECT_DOMAINS_SUCCESS:
      return _merge({}, state, {
        isProjDomainFetching: false,
        projDomainList: data.getProjectDomains,
      });
    case GET_PROJECT_DOMAINS_ERROR:
      return _merge({}, state, {
        isProjDomainFetching: false,
        errorProjDomain: error,
      });
    default:
      return state;
  }
}

export default createAuditReducer;
