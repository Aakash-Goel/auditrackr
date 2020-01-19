import { call, put, takeLatest } from 'redux-saga/effects';

import ServiceUtil from '../../../../utils/serviceUtil';
import { requestCreateAudit, getProjDomains } from './queries';
import {
  submitCreateAuditFormSuccess,
  submitCreateAuditFormError,
  getProjectDomainsSuccess,
  getProjectDomainsError,
} from './actions';
import { SUBMIT_CREATE_AUDIT, GET_PROJECT_DOMAINS } from './constants';

/**
 * @method submitCreateAudit [to trigger create audit api]
 *
 * @param {Object} args - The employee who is responsible for the project.
 * @param {string} args.projectAuditNameVal - [audit name field value]
 * @param {string} args.projectNameVal - [project name field value]
 * @param {number} args.projectCodeVal - [project code field value]
 * @param {string} args.projectDomainVal - [project domain drop down value]
 * @param {string[]} args.projectReviewersVal - [project reviewers array value(s)]
 */
export function* submitCreateAudit({ args } = {}) {
  const createAuditQuery = requestCreateAudit(args);

  try {
    const {
      body: { statusText, error, data },
    } = yield call(ServiceUtil.triggerRequest, {
      data: JSON.stringify(createAuditQuery),
    });

    if (statusText === 'OK' && data) {
      return yield put(submitCreateAuditFormSuccess(data));
    }
    return yield put(submitCreateAuditFormError(error));
  } catch (err) {
    return yield put(submitCreateAuditFormError(err.body));
  }
}

export function* getProjDomainList() {
  const getProjDomainQuery = getProjDomains();

  try {
    const {
      body: { statusText, error, data },
    } = yield call(ServiceUtil.triggerRequest, {
      data: JSON.stringify(getProjDomainQuery),
    });

    if (statusText === 'OK' && data) {
      return yield put(getProjectDomainsSuccess(data));
    }
    return yield put(getProjectDomainsError(error));
  } catch (err) {
    return yield put(getProjectDomainsError(err.body));
  }
}

export function* createAuditSaga() {
  yield takeLatest(SUBMIT_CREATE_AUDIT, submitCreateAudit);
}

export function* getProjDomainSaga() {
  yield takeLatest(GET_PROJECT_DOMAINS, getProjDomainList);
}

export default [createAuditSaga, getProjDomainSaga];
