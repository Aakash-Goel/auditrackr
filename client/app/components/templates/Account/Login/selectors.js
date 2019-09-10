import { createSelector } from 'reselect';
import { ACCOUNT_PROFILE_STATE_KEY } from './constants';

export const selectAccountLogIn = state => state[ACCOUNT_PROFILE_STATE_KEY];

export const makeSelectIsLoading = () =>
  createSelector(
    selectAccountLogIn,
    accountLogInState => accountLogInState.isLoading
  );

export const makeSelectError = () =>
  createSelector(
    selectAccountLogIn,
    accountLogInState => accountLogInState.error
  );

export const makeSelectIsAuthenticated = () =>
  createSelector(
    selectAccountLogIn,
    accountLogInState => accountLogInState.isAuthenticated
  );

export const makeSelectProfile = () =>
  createSelector(
    selectAccountLogIn,
    accountLogInState => accountLogInState.profile
  );
