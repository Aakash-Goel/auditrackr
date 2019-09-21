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
import isFunction from 'lodash/fp/isFunction';

/**
 * Import all your applications sagas here
 */
import createAuditSagas from '../components/templates/Audit/Create/sagas';
import accountLogInSagas from '../components/templates/Account/Login/sagas';
import labelsSagas from '../lib/labels/sagas';

/**
 * Module variables.
 * @private
 */
const runSagas = sagas => {
  if (Array.isArray(sagas)) {
    return sagas.map(saga => saga());
  }

  if (isFunction(sagas)) {
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
      ...runSagas(createAuditSagas),
      ...runSagas(accountLogInSagas),
      ...runSagas(labelsSagas),
    ];
    yield all(allSagas);
  } catch (err) {
    // yield put(globalDataFailure(err));
  }
}
