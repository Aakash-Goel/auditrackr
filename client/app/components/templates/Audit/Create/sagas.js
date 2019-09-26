import { call, put, takeLatest } from 'redux-saga/effects';

import ServiceUtil from '../../../../utils/serviceUtil';
import {
  requestCreateAudit,
  requestCreateQuestionnaireSet,
  getProjCategories,
} from './queries';
import {
  submitCreateAuditFormSuccess,
  submitCreateAuditFormError,
  createQuestionnaireSet,
  createQuestionnaireSetSuccess,
  createQuestionnaireSetError,
  getProjectCategoriesSuccess,
  getProjectCategoriesError,
} from './actions';
import {
  SUBMIT_CREATE_AUDIT,
  CREATE_QUESTIONNAIRE_SET,
  GET_PROJECT_CATEGORIES,
} from './constants';

function* handleApiSuccess(data) {
  yield put(
    createQuestionnaireSet({
      projectId: data.createProject._id, // eslint-disable-line no-underscore-dangle
    })
  );
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

export function* createQS({ args } = {}) {
  const createQSQuery = requestCreateQuestionnaireSet(args);

  try {
    const {
      body: { statusText, error, data },
    } = yield call(ServiceUtil.triggerRequest, {
      url: 'http://localhost:4000/graphql',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify(createQSQuery),
    });

    if (statusText === 'OK') {
      return yield put(createQuestionnaireSetSuccess(data));
    }
    return yield put(createQuestionnaireSetError(error));
  } catch (err) {
    return yield put(createQuestionnaireSetError(err.body));
  }
}

export function* getProjCategoryList() {
  const getProjCatQuery = getProjCategories();

  try {
    const {
      body: { statusText, error, data },
    } = yield call(ServiceUtil.triggerRequest, {
      url: 'http://localhost:4000/graphql',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify(getProjCatQuery),
    });

    if (statusText === 'OK') {
      return yield put(getProjectCategoriesSuccess(data));
    }
    return yield put(getProjectCategoriesError(error));
  } catch (err) {
    return yield put(getProjectCategoriesError(err.body));
  }
}

export function* createAuditSaga() {
  yield takeLatest(SUBMIT_CREATE_AUDIT, submitCreateAudit);
}

export function* createQSSaga() {
  yield takeLatest(CREATE_QUESTIONNAIRE_SET, createQS);
}

export function* getProjCatSaga() {
  yield takeLatest(GET_PROJECT_CATEGORIES, getProjCategoryList);
}

export default [createAuditSaga, createQSSaga, getProjCatSaga];
