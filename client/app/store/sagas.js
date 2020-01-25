/**
 * sagas.js
 *
 * Root saga where all your sagas are imported here and
 * added to the application
 *
 */

/**
 * Module dependencies.
 */
import { all } from 'redux-saga/effects';
import _isFunction from 'lodash/isFunction';

/**
 * Import all your applications sagas here
 */
import accountLogInSagas from '../components/templates/Account/Login/sagas';
import accountSignUpSagas from '../components/templates/Account/SignUp/sagas';
import dashboardAuditSagas from '../components/templates/Audit/Dashboard/sagas';
import createAuditSagas from '../components/templates/Audit/Create/sagas';
import projectAuditSagas from '../components/templates/Audit/Project/sagas';
import labelsSagas from '../lib/labels/sagas';

/**
 * Module variables.
 * @private
 */
const runSagas = sagas => {
  if (Array.isArray(sagas)) {
    return sagas.map(saga => saga());
  }

  if (_isFunction(sagas)) {
    return Array.of(sagas());
  }

  throw new TypeError(`${sagas} should be an Array or Function`);
};

/**
 * Module exports.
 * @public
 */
export default function* rootSaga() {
  try {
    // add your sagas here comma separated inside `runSagas`
    const allSagas = [
      ...runSagas(accountLogInSagas),
      ...runSagas(accountSignUpSagas),
      ...runSagas(dashboardAuditSagas),
      ...runSagas(createAuditSagas),
      ...runSagas(projectAuditSagas),
      ...runSagas(labelsSagas),
    ];
    yield all(allSagas);
  } catch (err) {
    // yield put(globalDataFailure(err));
  }
}
