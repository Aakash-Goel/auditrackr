import { createSelector } from 'reselect';
import { ACCOUNT_SIGNUP_STATE_KEY } from './constants';

export const selectAccountSignUp = state => state[ACCOUNT_SIGNUP_STATE_KEY];

export const makeSelectIsLoading = () =>
  createSelector(
    selectAccountSignUp,
    accountSignUpState => accountSignUpState.isLoading
  );

export const makeSelectError = () =>
  createSelector(
    selectAccountSignUp,
    accountSignUpState => accountSignUpState.error
  );

export const makeSelectData = () =>
  createSelector(
    selectAccountSignUp,
    accountSignUpState => accountSignUpState.data
  );
