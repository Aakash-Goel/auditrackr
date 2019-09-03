import {
  ADD_FORM_IDENTIFIER_FIELD,
  UPDATE_FORM_IDENTIFIER_FIELD,
  CLEAR_FORM_IDENTIFIER_FIELD,
} from './constants';

export function addFormIdentifierData(data) {
  return {
    type: ADD_FORM_IDENTIFIER_FIELD,
    data,
  };
}

export function updateFormIdentifierData(data) {
  return {
    type: UPDATE_FORM_IDENTIFIER_FIELD,
    data,
  };
}

export function clearFormIdentifierData(data) {
  return {
    type: CLEAR_FORM_IDENTIFIER_FIELD,
    data,
  };
}
