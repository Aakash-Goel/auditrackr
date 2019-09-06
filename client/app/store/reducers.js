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
import count from './testReducer'; // >>>Delete this
import { FORM_WRAPPER_STATE_KEY as formWrapperStateKey } from '../components/organisms/Forms/FormWrapper/constants';
import FormWrapperReducer from '../components/organisms/Forms/FormWrapper/reducer';
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
    [formWrapperStateKey]: FormWrapperReducer,
    [labelsStateKey]: labelsReducer,
    count, // add all your applications reducers here with comma seperated
    ...injectedReducers,
  });
};

/**
 * Module exports.
 * @public
 */
export default rootReducer;
