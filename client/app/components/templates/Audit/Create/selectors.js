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

export const makeSelectIsQSCreating = () =>
  createSelector(
    selectCreateAudit,
    createAuditState => createAuditState.isQSCreating
  );

export const makeSelectIsQSCreated = () =>
  createSelector(
    selectCreateAudit,
    createAuditState => createAuditState.isQSCreated
  );

export const makeSelectErrorQS = () =>
  createSelector(
    selectCreateAudit,
    createAuditState => createAuditState.errorQS
  );

export const makeSelectIsProjCatFetching = () =>
  createSelector(
    selectCreateAudit,
    createAuditState => createAuditState.isProjCatFetching
  );

export const makeSelectProjCatList = () =>
  createSelector(
    selectCreateAudit,
    createAuditState => createAuditState.projCatList
  );

export const makeSelectErrorProjCat = () =>
  createSelector(
    selectCreateAudit,
    createAuditState => createAuditState.errorProjCat
  );
