import {
  SUBMIT_CREATE_AUDIT,
  SUBMIT_CREATE_AUDIT_SUCCESS,
  SUBMIT_CREATE_AUDIT_ERROR,
  CLEAR_CREATE_AUDIT_DATA,
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
