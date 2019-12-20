import { TOGGLE_DRAWER_STATUS } from './constants';

/* eslint-disable import/prefer-default-export */
export function toggleDrawerStatus(isDrawerOpen) {
  return {
    type: TOGGLE_DRAWER_STATUS,
    isDrawerOpen,
  };
}
