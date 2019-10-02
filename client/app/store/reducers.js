/**
 * reducers.js
 *
 * Root reducer where all your reducers are imported here and
 * added to the application
 *
 */

/**
 * Module dependencies.
 */
import { combineReducers } from 'redux';

/**
 * Import all your applications reducers here
 */
import { CREATE_AUDIT_STATE_KEY as createAuditStateKey } from '../components/templates/Audit/Create/constants';
import createAuditReducer from '../components/templates/Audit/Create/reducer';

import { PROJECT_AUDIT_STATE_KEY as projectAuditStateKey } from '../components/templates/Audit/Project/constants';
import projectAuditReducer from '../components/templates/Audit/Project/reducer';

import { ACCOUNT_PROFILE_STATE_KEY as accountProfileStateKey } from '../components/templates/Account/Login/constants';
import accountLogInReducer from '../components/templates/Account/Login/reducer';

import { ACCOUNT_SIGNUP_STATE_KEY as accountSignUpStateKey } from '../components/templates/Account/SignUp/constants';
import accountSignUpReducer from '../components/templates/Account/SignUp/reducer';

import { FORM_WRAPPER_STATE_KEY as formWrapperStateKey } from '../components/organisms/Forms/FormWrapper/constants';
import formWrapperReducer from '../components/organisms/Forms/FormWrapper/reducer';

import { LABELS_STATE_KEY as labelsStateKey } from '../lib/labels/constants';
import labelsReducer from '../lib/labels/reducer';

/**
 * Module variables.
 * @public
 *
 * @returns {Function} combineReducers
 */
const rootReducer = injectedReducers => {
  return combineReducers({
    [createAuditStateKey]: createAuditReducer,
    [projectAuditStateKey]: projectAuditReducer,
    [accountProfileStateKey]: accountLogInReducer,
    [accountSignUpStateKey]: accountSignUpReducer,
    [formWrapperStateKey]: formWrapperReducer,
    [labelsStateKey]: labelsReducer,
    ...injectedReducers,
  });
};

/**
 * Module exports.
 * @public
 */
export default rootReducer;
