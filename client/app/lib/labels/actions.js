import {
  SET_LABELS,
  SET_LABELS_SUCCESS,
  SET_LABELS_ERROR,
  FETCH_LABELS,
} from './constants';

export function setLabels(args) {
  return {
    type: SET_LABELS,
    args,
  };
}

export function fetchLabels() {
  return {
    type: FETCH_LABELS,
  };
}

export function setLabelsSuccess(args) {
  return {
    type: SET_LABELS_SUCCESS,
    args,
  };
}

export function setLabelsError(args) {
  return {
    type: SET_LABELS_ERROR,
    args,
  };
}
