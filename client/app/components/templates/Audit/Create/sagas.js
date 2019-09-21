import { call, put, takeLatest } from 'redux-saga/effects';

import ServiceUtil from '../../../../utils/serviceUtil';
import { requestCreateAudit } from './queries';
import {
  submitCreateAuditFormSuccess,
  submitCreateAuditFormError,
} from './actions';
import { SUBMIT_CREATE_AUDIT } from './constants';

function* handleApiSuccess(data) {
  return yield put(submitCreateAuditFormSuccess(data));
}

export function* handleCatchErrors(err) {
  return yield put(submitCreateAuditFormError(err.body));
}

/**
 * @method submitCreateAudit [to trigger create audit api]
 *
 * @param {string} auditName [audit name field value]
 * @param {string}  projectName [project name field value]
 * @param {number} projectCode [project id field value]
 * @param {string} category [project category drop down value]
 */
export function* submitCreateAudit({ args } = {}) {
  const createAuditQuery = requestCreateAudit(args);

  try {
    const {
      body: { statusText, error, data },
    } = yield call(ServiceUtil.triggerRequest, {
      url: 'http://localhost:4000/graphql',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify(createAuditQuery),
    });

    if (statusText === 'OK') {
      return yield* handleApiSuccess(data);
    }
    return yield put(submitCreateAuditFormError(error));
  } catch (err) {
    return yield handleCatchErrors(err);
  }
}

export function* createAuditSaga() {
  yield takeLatest(SUBMIT_CREATE_AUDIT, submitCreateAudit);
}

export default createAuditSaga;
