import { createSelector } from 'reselect';
import { ROUTES_STATE_KEY } from './constants';

export const selectRoutes = state => state[ROUTES_STATE_KEY];

export const makeSelectRoute = () =>
  createSelector(
    selectRoutes,
    routeState => routeState.data
  );
