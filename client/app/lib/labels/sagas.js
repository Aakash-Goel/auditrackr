import { put, takeLatest } from 'redux-saga/effects';

import ServiceUtil from '../../utils/serviceUtil';
import { setLabelsSuccess, setLabelsError } from './actions';
import { SET_LABELS, FETCH_LABELS } from './constants';

async function fetchLabelGlobalData() {
  const resp = await ServiceUtil.triggerRequest({
    url: 'http://localhost:1337/globals',
  });

  return resp;
}

export function* fetchLabelData() {
  let labels = null;
  try {
    labels = fetchLabelGlobalData();
    yield put(setLabelsSuccess(labels && labels.body && labels.body[0]));
  } catch (err) {
    yield put(setLabelsError(err.body));
  } finally {
    labels = null;
  }
}

export function* setLabelData({
  args: { serviceStatus, errorMessages, data },
}) {
  // TODO: Check if labels exist in state
  if (serviceStatus === 'SUCCESS') {
    return yield put(setLabelsSuccess(data));
  }
  return setLabelsError(errorMessages.message);
}

export function* setLabelsSaga() {
  yield takeLatest(SET_LABELS, setLabelData);
}
export function* fetchLabelsSaga() {
  yield takeLatest(FETCH_LABELS, fetchLabelData);
}

export default [setLabelsSaga, fetchLabelsSaga];
