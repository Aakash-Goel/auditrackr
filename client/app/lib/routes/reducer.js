import _merge from 'lodash/merge';
import { UPDATE_ROUTES } from './constants';

const initialState = {
  data: null,
};

function routesReducer(state = initialState, { type, args }) {
  switch (type) {
    case UPDATE_ROUTES:
      return _merge({}, state, {
        data: args,
      });
    default:
      return state;
  }
}

export default routesReducer;
