import { call, put, takeLatest } from 'redux-saga/effects';
// import pathOr from 'lodash/fp/pathOr';

import ServiceUtil from '../../../../utils/serviceUtil';
import { requestSignUpData } from './queries';
import {
  submitAccountSignUpSuccess,
  submitAccountSignUpError,
} from './actions';
import { SUBMIT_ACCOUNT_SIGNUP } from './constants';

function* handleSuccess(data) {
  return yield put(submitAccountSignUpSuccess(data));
}

export function* handleCatchErrors(err) {
  return yield put(submitAccountSignUpError(err.body));
}

/**
 * @method submitAccountSignUp [to trigger account sign in api]
 * @param {string} name [name field value]
 * @param {string} email [email field value]
 * @param {string}  password [password field value]
 * @param {boolean} optForEmails [opted for email or not]
 */
export function* submitAccountSignUp({ args } = {}) {
  const signUpQuery = requestSignUpData(args);

  try {
    const {
      body: { statusText, error, data },
    } = yield call(ServiceUtil.triggerRequest, {
      url: 'http://localhost:4000/graphql',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify(signUpQuery),
    });

    if (statusText === 'OK' && data) {
      yield* handleSuccess(data);
    }
    return yield put(submitAccountSignUpError(error));
  } catch (err) {
    return yield handleCatchErrors(err);
  }
}

export function* accountSignUpSaga() {
  yield takeLatest(SUBMIT_ACCOUNT_SIGNUP, submitAccountSignUp);
}

export default [accountSignUpSaga];
