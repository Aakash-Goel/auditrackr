import { UPDATE_ROUTES } from './constants';

/* eslint-disable import/prefer-default-export */
export function updateRoutes(args) {
  return {
    type: UPDATE_ROUTES,
    args,
  };
}
