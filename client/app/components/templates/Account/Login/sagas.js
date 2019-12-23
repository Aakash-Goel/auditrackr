import { call, put, takeLatest } from 'redux-saga/effects';

import ServiceUtil from '../../../../utils/serviceUtil';
// import { getEncodedValue } from '../../../../utils/helpersUtil';
import { requestLoginData, requestLogOutData } from './queries';
import {
  submitAccountLogInSuccess,
  submitAccountLogInError,
  toggleUserAuthenticated,
  submitAccountLogOutError,
  submitAccountLogOutSuccess,
} from './actions';
import { SUBMIT_ACCOUNT_LOGIN, SUBMIT_ACCOUNT_LOGOUT } from './constants';

function* handleSuccessLogin() {
  yield put(toggleUserAuthenticated(true));
  return yield put(submitAccountLogInSuccess());
}

export function* handleCatchErrors(err) {
  return yield put(submitAccountLogInError(err.body));
}

/**
 * @method submitAccountLogIn [to trigger account sign in api]
 * @param {string} email [email field value]
 * @param {string}  password [password field value]
 * @param {boolean} optForEmails [opted for email or not]
 * @param {string} triggerFromExtendedAccount [identifer to determine where it is invoked from]
 */
export function* submitAccountLogIn({ args } = {}) {
  const { email, password } = args;

  const logInQuery = requestLoginData(email, password);

  try {
    const {
      body: { statusText, error, data },
    } = yield call(ServiceUtil.triggerRequest, {
      url: 'http://localhost:4000/graphql',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify(logInQuery),
    });

    if (statusText === 'OK' && data) {
      yield* handleSuccessLogin(data, email);
    }
    return yield put(submitAccountLogInError(error));
  } catch (err) {
    return yield handleCatchErrors(err);
  }
}

export function* submitAccountLogOut() {
  const logOutQuery = requestLogOutData();

  try {
    const {
      body: { statusText, error, data },
    } = yield call(ServiceUtil.triggerRequest, {
      url: 'http://localhost:4000/graphql',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify(logOutQuery),
    });

    if (statusText === 'OK' && data) {
      yield put(toggleUserAuthenticated(false));
      return yield put(submitAccountLogOutSuccess());
    }
    return yield put(submitAccountLogOutError(error));
  } catch (err) {
    return yield put(submitAccountLogOutError(err.body));
  }
}

export function* accountLogInSaga() {
  yield takeLatest(SUBMIT_ACCOUNT_LOGIN, submitAccountLogIn);
}

export function* accountLogOutSaga() {
  yield takeLatest(SUBMIT_ACCOUNT_LOGOUT, submitAccountLogOut);
}

export default [accountLogInSaga, accountLogOutSaga];
