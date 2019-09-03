import { createSelector } from 'reselect';

import { FORM_WRAPPER_STATE_KEY } from './constants';

export const formWrapperState = state => state[FORM_WRAPPER_STATE_KEY];

export const formWrapperSelector = formIdentifier =>
  createSelector(
    formWrapperState,
    formWrapperData => formWrapperData[formIdentifier]
  );
