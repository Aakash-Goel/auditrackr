/**
 * store.js
 *
 * Store configurations.
 *
 * Add/Change store middlewares here
 *
 */

/**
 * Module dependencies.
 */
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import rootReducers from './reducers';
import rootSagas from './sagas';

/**
 * Choose compose method depending upon environment and platform
 * @private
 */
const composeEnhancers =
  process.env.NODE_ENV !== 'production' && typeof window === 'object'
    ? composeWithDevTools
    : compose;

/**
 * @method configureStore
 * @public
 *
 * @returns {Object} store
 */
function configureStore(initialState = {}) {
  /**
   * Recreate the stdChannel (saga middleware) with every context.
   */
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware]; // <<-- add your middleware here.
  const enhancers = [applyMiddleware(...middlewares)];

  /**
   * Since Next.js does server-side rendering, you are REQUIRED to pass
   * `initialState` when creating the store.
   */
  const store = createStore(
    rootReducers(),
    initialState,
    composeEnhancers(...enhancers)
  );

  /**
   * next-redux-saga depends on `sagaTask` being attached to the store.
   * It is used to await the rootSaga task before sending results to the client.
   */
  store.sagaTask = sagaMiddleware.run(rootSagas);

  return store;
}

/**
 * Module exports.
 * @public
 */
export default configureStore;
