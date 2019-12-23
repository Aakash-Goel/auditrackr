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
import { PRIMARY_LAYOUT_STATE_KEY as primaryLayoutStateKey } from '../layouts/PrimaryLayout/constants';
import primaryLayoutReducer from '../layouts/PrimaryLayout/reducer';

import { ACCOUNT_LOGIN_STATE_KEY as accountLogInStateKey } from '../components/templates/Account/Login/constants';
import accountLogInReducer from '../components/templates/Account/Login/reducer';

import { ACCOUNT_SIGNUP_STATE_KEY as accountSignUpStateKey } from '../components/templates/Account/SignUp/constants';
import accountSignUpReducer from '../components/templates/Account/SignUp/reducer';

import { DASHBOARD_AUDIT_STATE_KEY as dashboardAuditStateKey } from '../components/templates/Audit/Dashboard/constants';
import dashboardAuditReducer from '../components/templates/Audit/Dashboard/reducer';

import { CREATE_AUDIT_STATE_KEY as createAuditStateKey } from '../components/templates/Audit/Create/constants';
import createAuditReducer from '../components/templates/Audit/Create/reducer';

import { PROJECT_AUDIT_STATE_KEY as projectAuditStateKey } from '../components/templates/Audit/Project/constants';
import projectAuditReducer from '../components/templates/Audit/Project/reducer';

import { FORM_WRAPPER_STATE_KEY as formWrapperStateKey } from '../components/organisms/Forms/FormWrapper/constants';
import formWrapperReducer from '../components/organisms/Forms/FormWrapper/reducer';

import { LABELS_STATE_KEY as labelsStateKey } from '../lib/labels/constants';
import labelsReducer from '../lib/labels/reducer';

import { ROUTES_STATE_KEY as routesStateKey } from '../lib/routes/constants';
import routesReducer from '../lib/routes/reducer';

/**
 * Module variables.
 * @public
 *
 * @returns {Function} combineReducers
 */
const rootReducer = injectedReducers => {
  return combineReducers({
    [primaryLayoutStateKey]: primaryLayoutReducer,
    [accountLogInStateKey]: accountLogInReducer,
    [accountSignUpStateKey]: accountSignUpReducer,
    [dashboardAuditStateKey]: dashboardAuditReducer,
    [createAuditStateKey]: createAuditReducer,
    [projectAuditStateKey]: projectAuditReducer,
    [formWrapperStateKey]: formWrapperReducer,
    [labelsStateKey]: labelsReducer,
    [routesStateKey]: routesReducer,
    ...injectedReducers,
  });
};

/**
 * Module exports.
 * @public
 */
export default rootReducer;
