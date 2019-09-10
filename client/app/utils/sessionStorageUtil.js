import Cookie from 'universal-cookie';

import { isBrowser } from './helpersUtil';

/**
 * Purpose: A Utility class to store Key Pair value in sessionStorage/cookies(fallback)
 * @author
 */
class SessionStorageUtil {
  /** @constructor
   *
   * Purpose: create storage object of type sessionStorage/Cookie(fallback)
   */
  constructor() {
    this.storage = {};
    this.useWindow = isBrowser();
    if (this.useWindow && window.sessionStorage) {
      this.storage = window.sessionStorage;
    } else {
      this.storage = new Cookie();
    }
  }

  /** @function
   * Purpose: get Value from sessionStorage/Cookie(fallback) with Key
   * @param { string } name Key Name
   */
  getItem = name => {
    return this.useWindow && window.sessionStorage
      ? this.storage.getItem(name)
      : this.storage.get(name);
  };

  /** @function
   * Purpose: save Value against key into sessionStorage/Cookie(fallback)
   * @param { string } name Key Name
   * @param { string } value Key Value
   */
  saveItem = (name, value) => {
    return this.useWindow && window.sessionStorage
      ? this.storage.setItem(name, value)
      : this.storage.set(name, value);
  };

  /** @function
   * Purpose: remove Key Pair Value from sessionStorage/Cookie(fallback) against Key
   * @param { string } name Key Name
   */
  removeItem = name => {
    return this.useWindow && window.sessionStorage
      ? this.storage.removeItem(name)
      : this.storage.remove(name);
  };
}

export default SessionStorageUtil;
