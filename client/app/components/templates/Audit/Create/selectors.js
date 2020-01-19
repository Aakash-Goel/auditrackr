import { createSelector } from 'reselect';
import { CREATE_AUDIT_STATE_KEY } from './constants';

export const selectCreateAudit = state => state[CREATE_AUDIT_STATE_KEY];

export const makeSelectIsLoading = () =>
  createSelector(
    selectCreateAudit,
    createAuditState => createAuditState.isFetching
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

export const makeSelectIsProjDomainFetching = () =>
  createSelector(
    selectCreateAudit,
    createAuditState => createAuditState.isProjDomainFetching
  );

export const makeSelectProjDomainList = () =>
  createSelector(
    selectCreateAudit,
    createAuditState => createAuditState.projDomainList
  );

export const makeSelectErrorProjDomain = () =>
  createSelector(
    selectCreateAudit,
    createAuditState => createAuditState.errorProjDomain
  );
