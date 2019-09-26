import {
  SUBMIT_CREATE_AUDIT,
  SUBMIT_CREATE_AUDIT_SUCCESS,
  SUBMIT_CREATE_AUDIT_ERROR,
  CLEAR_CREATE_AUDIT_DATA,
  CREATE_QUESTIONNAIRE_SET,
  CREATE_QUESTIONNAIRE_SET_SUCCESS,
  CREATE_QUESTIONNAIRE_SET_ERROR,
  GET_PROJECT_CATEGORIES,
  GET_PROJECT_CATEGORIES_SUCCESS,
  GET_PROJECT_CATEGORIES_ERROR,
} from './constants';

export function submitCreateAuditForm(args) {
  return {
    type: SUBMIT_CREATE_AUDIT,
    args,
  };
}

export function submitCreateAuditFormSuccess(data) {
  return {
    type: SUBMIT_CREATE_AUDIT_SUCCESS,
    data,
  };
}

export function submitCreateAuditFormError(error) {
  return {
    type: SUBMIT_CREATE_AUDIT_ERROR,
    error,
  };
}

export function clearCreateAuditData() {
  return {
    type: CLEAR_CREATE_AUDIT_DATA,
  };
}

export function createQuestionnaireSet(args) {
  return {
    type: CREATE_QUESTIONNAIRE_SET,
    args,
  };
}

export function createQuestionnaireSetSuccess() {
  return {
    type: CREATE_QUESTIONNAIRE_SET_SUCCESS,
  };
}

export function createQuestionnaireSetError(error) {
  return {
    type: CREATE_QUESTIONNAIRE_SET_ERROR,
    error,
  };
}

export function getProjectCategories() {
  return {
    type: GET_PROJECT_CATEGORIES,
  };
}

export function getProjectCategoriesSuccess(data) {
  return {
    type: GET_PROJECT_CATEGORIES_SUCCESS,
    data,
  };
}

export function getProjectCategoriesError(error) {
  return {
    type: GET_PROJECT_CATEGORIES_ERROR,
    error,
  };
}
