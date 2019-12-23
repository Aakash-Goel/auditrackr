import _merge from 'lodash/merge';
import {
  FETCH_PROFILE_DATA,
  FETCH_PROFILE_DATA_SUCCESS,
  FETCH_PROFILE_DATA_ERROR,
} from './constants';

const initialState = {
  isFetching: false,
  data: null,
  error: null,
};

function dashboardAuditReducer(state = initialState, { type, error, data }) {
  switch (type) {
    case FETCH_PROFILE_DATA:
      return _merge({}, state, {
        isFetching: true,
      });
    case FETCH_PROFILE_DATA_SUCCESS:
      return _merge({}, state, {
        isFetching: false,
        data: data.getUser,
      });
    case FETCH_PROFILE_DATA_ERROR:
      return _merge({}, state, {
        isFetching: false,
        error,
      });
    default:
      return state;
  }
}

export default dashboardAuditReducer;
