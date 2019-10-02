import { createSelector } from 'reselect';
import { PROJECT_AUDIT_STATE_KEY } from './constants';

export const selectProjectAudit = state => state[PROJECT_AUDIT_STATE_KEY];

export const makeSelectIsFetching = () =>
  createSelector(
    selectProjectAudit,
    projectAuditState => projectAuditState.isFetching
  );

export const makeSelectData = () =>
  createSelector(
    selectProjectAudit,
    projectAuditState => projectAuditState.data
  );

export const makeSelectError = () =>
  createSelector(
    selectProjectAudit,
    projectAuditState => projectAuditState.error
  );
