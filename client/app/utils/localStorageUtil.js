import Cookie from 'universal-cookie';

import {
  isBrowser,
  isStorageUsable,
  getCookieExpirationDate,
} from './helpersUtil';

/**
 * Purpose: A Utility class to store Key Pair value in localStorage/cookies(fallback)
 * @author
 */
class LocalStorageUtil {
  /** @constructor
   *
   * Purpose: create storage object of type localStorage/Cookie(fallback)
   */
  constructor() {
    this.storage = {};
    this.useWindow = isBrowser();
    if (this.useWindow && isStorageUsable()) {
      this.storage = window.localStorage;
    } else {
      this.storage = new Cookie();
    }
  }

  /** @function
   * Purpose: get Value from localStorage/Cookie(fallback) with Key
   * @param { string } name Key Name
   */
  getItem = name => {
    return this.useWindow &&
      isStorageUsable() &&
      typeof this.storage !== 'undefined'
      ? this.storage.getItem(name)
      : this.storage.get(name, { expires: getCookieExpirationDate() });
  };

  /** @function
   * Purpose: save Value against key into localStorage/Cookie(fallback)
   * @param { string } name Key Name
   * @param { string } value Key Value
   */
  saveItem = (name, localStoragevalue, cookieValue) => {
    return this.useWindow && isStorageUsable()
      ? this.storage.setItem(name, localStoragevalue)
      : this.storage.set(name, cookieValue);
  };

  /** @function
   * Purpose: remove Key Pair Value from localStorage/Cookie(fallback) against Key
   * @param { string } name Key Name
   */
  removeItem = name => {
    return this.useWindow && isStorageUsable()
      ? this.storage.removeItem(name)
      : this.storage.remove(name);
  };
}

export default LocalStorageUtil;
