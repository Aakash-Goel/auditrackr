import _merge from 'lodash/merge';
import {
  ADD_FORM_IDENTIFIER_FIELD,
  UPDATE_FORM_IDENTIFIER_FIELD,
  CLEAR_FORM_IDENTIFIER_FIELD,
} from './constants';

const initialState = {};

// const data = {
//   identifier: 'test',
//   fieldData: {
//     name: 'firstname',
//     rule: '',
//     value: '',
//     required: true,
//   },
// };

function formWrapperReducer(state = initialState, { type, data }) {
  switch (type) {
    case ADD_FORM_IDENTIFIER_FIELD: {
      const previousFieldData = state[data.identifier]
        ? state[data.identifier]
        : null;
      if (previousFieldData) {
        const newData = _merge({}, previousFieldData, {
          [data.fieldData.name]: data.fieldData,
        });

        return _merge({}, state, {
          [data.identifier]: newData,
        });
      }
      //  add new node to the formwrapper object if nothing exists
      // if the object exists but new node is added, create it
      const tempObj = { [data.fieldData.name]: data.fieldData };
      return _merge({}, state, {
        [data.identifier]: tempObj,
      });
    }

    case UPDATE_FORM_IDENTIFIER_FIELD: {
      const newData = _merge({}, data);
      const { identifier } = newData;
      delete newData.identifier;
      const formState = state[identifier];
      const newState = _merge({}, formState, newData);

      return _merge({}, state, {
        [identifier]: newState,
      });
    }

    case CLEAR_FORM_IDENTIFIER_FIELD: {
      return _merge({}, state, {
        [data]: undefined,
      });
    }

    default:
      return state;
  }
}

export default formWrapperReducer;
