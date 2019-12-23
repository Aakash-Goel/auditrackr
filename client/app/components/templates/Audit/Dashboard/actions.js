import {
  FETCH_PROFILE_DATA,
  FETCH_PROFILE_DATA_SUCCESS,
  FETCH_PROFILE_DATA_ERROR,
} from './constants';

export function fetchProfileData(args) {
  return {
    type: FETCH_PROFILE_DATA,
    args,
  };
}

export function fetchProfileDataSuccess(data) {
  return {
    type: FETCH_PROFILE_DATA_SUCCESS,
    data,
  };
}

export function fetchProfileDataError(error) {
  return {
    type: FETCH_PROFILE_DATA_ERROR,
    error,
  };
}
