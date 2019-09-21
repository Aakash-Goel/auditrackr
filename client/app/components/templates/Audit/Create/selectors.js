import { createSelector } from 'reselect';
import { CREATE_AUDIT_STATE_KEY } from './constants';

export const selectCreateAudit = state => state[CREATE_AUDIT_STATE_KEY];

export const makeSelectIsLoading = () =>
  createSelector(
    selectCreateAudit,
    createAuditState => createAuditState.isLoading
  );

export const makeSelectData = () =>
  createSelector(
    selectCreateAudit,
    createAuditState => createAuditState.data
  );

export const makeSelectError = () =>
  createSelector(
    selectCreateAudit,
    createAuditState => createAuditState.error
  );
