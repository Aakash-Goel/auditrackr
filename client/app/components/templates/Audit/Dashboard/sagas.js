import { call, put, takeLatest } from 'redux-saga/effects';

import ServiceUtil from '../../../../utils/serviceUtil';
import { isBrowser } from '../../../../utils/helpersUtil';
import getProfile from './queries';
import { fetchProfileDataSuccess, fetchProfileDataError } from './actions';
import { FETCH_PROFILE_DATA } from './constants';

export function* getProfileData({ args } = {}) {
  const getProfileQuery = getProfile(args);
  const axiosOptionsObj = {
    data: JSON.stringify(getProfileQuery),
  };

  if (!isBrowser()) {
    axiosOptionsObj.headers = {
      Cookie: JSON.stringify(args.allCookies), // this is required here, because in SSR axios unable to send the cookies automatically
    };
  }

  try {
    const {
      body: { statusText, error, data },
    } = yield call(ServiceUtil.triggerRequest, axiosOptionsObj);

    if (statusText === 'OK' && data) {
      return yield put(fetchProfileDataSuccess(data));
    }
    return yield put(fetchProfileDataError(error));
  } catch (err) {
    return yield put(fetchProfileDataError(err.body));
  }
}

export function* getProfileDataSaga() {
  yield takeLatest(FETCH_PROFILE_DATA, getProfileData);
}

export default [getProfileDataSaga];
