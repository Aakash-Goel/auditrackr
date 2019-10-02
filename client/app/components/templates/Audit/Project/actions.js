import {
  GET_PROJECT,
  GET_PROJECT_SUCCESS,
  GET_PROJECT_ERROR,
} from './constants';

export function getProject(projectId) {
  return {
    type: GET_PROJECT,
    projectId,
  };
}

export function getProjectSuccess(data) {
  return {
    type: GET_PROJECT_SUCCESS,
    data,
  };
}

export function getProjectError(error) {
  return {
    type: GET_PROJECT_ERROR,
    error,
  };
}
