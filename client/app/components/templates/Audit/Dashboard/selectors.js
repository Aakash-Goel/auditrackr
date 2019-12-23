import { createSelector } from 'reselect';
import { DASHBOARD_AUDIT_STATE_KEY } from './constants';

export const selectDashboardAudit = state => state[DASHBOARD_AUDIT_STATE_KEY];

export const makeSelectIsFetching = () =>
  createSelector(
    selectDashboardAudit,
    dashboardAuditState => dashboardAuditState.isFetching
  );

export const makeSelectData = () =>
  createSelector(
    selectDashboardAudit,
    dashboardAuditState => dashboardAuditState.data
  );

export const makeSelectError = () =>
  createSelector(
    selectDashboardAudit,
    dashboardAuditState => dashboardAuditState.error
  );
