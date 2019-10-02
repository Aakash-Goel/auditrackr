import { call, put, takeLatest } from 'redux-saga/effects';

import ServiceUtil from '../../../../utils/serviceUtil';
import { requestProjectDetailsById } from './queries';
import { getProjectSuccess, getProjectError } from './actions';
import { GET_PROJECT } from './constants';

/**
 * @method getProjectAudit [to trigger get project api]
 *
 * @param {number} projectId [project id]
 */
export function* getProjectAudit(args) {
  const getProjByIdQuery = requestProjectDetailsById(args);

  try {
    const {
      body: { statusText, error, data },
    } = yield call(ServiceUtil.triggerRequest, {
      url: 'http://localhost:4000/graphql',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify(getProjByIdQuery),
    });

    if (statusText === 'OK' && data) {
      return yield put(getProjectSuccess(data));
    }
    return yield put(getProjectError(error));
  } catch (err) {
    return yield put(getProjectError(err.body));
  }
}

export function* projectAuditSaga() {
  yield takeLatest(GET_PROJECT, getProjectAudit);
}

export default [projectAuditSaga];
