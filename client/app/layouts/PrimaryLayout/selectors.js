import { createSelector } from 'reselect';
import { PRIMARY_LAYOUT_STATE_KEY } from './constants';

export const selectPrimaryLayout = state => state[PRIMARY_LAYOUT_STATE_KEY];

export const makeSelectDrawer = () =>
  createSelector(
    selectPrimaryLayout,
    primaryLayoutState => primaryLayoutState.isDrawerOpen
  );
