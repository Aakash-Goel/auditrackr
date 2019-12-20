import _merge from 'lodash/merge';
import { TOGGLE_DRAWER_STATUS } from './constants';

const initialState = {
  isDrawerOpen: true,
};

function primaryLayoutReducer(state = initialState, { type, isDrawerOpen }) {
  switch (type) {
    case TOGGLE_DRAWER_STATUS:
      return _merge({}, state, {
        isDrawerOpen,
      });
    default:
      return state;
  }
}

export default primaryLayoutReducer;
