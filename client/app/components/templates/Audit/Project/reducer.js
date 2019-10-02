import _merge from 'lodash/merge';
import {
  GET_PROJECT,
  GET_PROJECT_SUCCESS,
  GET_PROJECT_ERROR,
} from './constants';

const initialState = {
  isFetching: false,
  data: null,
  error: null,
};

function projectAuditReducer(state = initialState, { type, error, data }) {
  switch (type) {
    case GET_PROJECT:
      return _merge({}, state, {
        isFetching: true,
      });
    case GET_PROJECT_SUCCESS:
      return _merge({}, state, {
        isFetching: false,
        data: data.getProjectById,
      });
    case GET_PROJECT_ERROR:
      return _merge({}, state, {
        isFetching: false,
        error,
      });
    default:
      return state;
  }
}

export default projectAuditReducer;
