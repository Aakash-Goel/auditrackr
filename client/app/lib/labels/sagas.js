import { put, takeLatest } from 'redux-saga/effects';

// import ServiceUtil from '../../utils/serviceUtil';
import { setLabelsSuccess, setLabelsError } from './actions';
import { SET_LABELS /* FETCH_LABELS */ } from './constants';

// async function fetchLabelGlobalData() {
//   const resp = await ServiceUtil.triggerRequest({
//     url: 'http://localhost:1337/globals',
//   });
//   console.log('1212===>>>>fetchLabelGlobalData resp ', resp);
//   return resp;
// }

// export function* fetchLabelData() {
//   let labels = null;
//   try {
//     labels = fetchLabelGlobalData();
//     console.log('1212===>>>>fetchLabelGlobalData labels ', labels);
//     yield put(setLabelsSuccess(labels && labels.body && labels.body[0]));
//   } catch (err) {
//     yield put(setLabelsError(err.body));
//   } finally {
//     labels = null;
//   }
// }

export function* setLabelData({ args }) {
  // TODO: Check if labels exist in state
  if (args.serviceStatus === 'OK') {
    return yield put(setLabelsSuccess(args));
  }
  return setLabelsError(args);
}

export function* setLabelsSaga() {
  yield takeLatest(SET_LABELS, setLabelData);
}
// export function* fetchLabelsSaga() {
//   yield takeLatest(FETCH_LABELS, fetchLabelData);
// }

export default [setLabelsSaga /* fetchLabelsSaga */];
