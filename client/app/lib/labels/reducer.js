import _merge from 'lodash/merge';

import { SET_LABELS_SUCCESS } from './constants';

const initialState = {
  labels: null,
};

function labelsReducer(state = initialState, { type, args }) {
  if (args && type === SET_LABELS_SUCCESS) {
    const updatedState = _merge({}, state, {
      labels: { ...args },
    });
    return updatedState;
  }

  return state;
}

export default labelsReducer;
