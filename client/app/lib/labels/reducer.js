import _merge from 'lodash/merge';

import { SET_LABELS_SUCCESS } from './constants';

const initialState = {};

// const args = {
//   identifier: 'globals',
//   serviceStatus: 'OK',
//   errorMessages: {
//     message: 'some error message',
//     code: 'some error code',
//   },
//   data: {
//     name: 'firstname',
//     rule: '',
//     value: '',
//     required: true,
//   },
// };

function labelsReducer(state = initialState, { type, args }) {
  if (args && type === SET_LABELS_SUCCESS) {
    const updatedState = _merge({}, state, {
      [args.identifier]: args.data,
    });

    return updatedState;
  }

  return state;
}

export default labelsReducer;
