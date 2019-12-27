import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';
import pathOr from 'lodash/fp/pathOr';

let storeRef = null;

/**
 * @param {value} prop
 * sets storeRef value
 */
export const setStoreRef = value => {
  storeRef = value;
};

/*
 * resets storeRef to default value
 */
export const resetStoreRef = () => {
  storeRef = null;
};

/** To get store ref to dispatch action from external js
 * @return {storeRef}
 * it returns storeRef value
 */
export const getStoreRef = () => {
  return storeRef || {};
};

export function titleize(string) {
  /* eslint-disable-next-line no-console */
  console.warn(
    typeof string === 'string' && string.length > 0,
    'AuditTrackR: titleize(string) expects a non empty string argument.'
  );

  return string
    .split('-')
    .map(word => word.split(''))
    .map(letters => {
      const first = letters.shift();
      return [first.toUpperCase(), ...letters].join('');
    })
    .join(' ');
}

export function pageToTitle(page) {
  if (page.title) {
    return page.title;
  }

  if (page.pathUrl) {
    const name = page.pathUrl.replace(/.*\//, '');

    if (page.pathUrl.indexOf('/api') === 0) {
      return upperFirst(camelCase(name));
    }

    return titleize(name);
  }

  return '';
}

/**
 * @constructor
 * @param [form name] for which we have to set error.
 * It takes the form for which we have to set focus-on after submit.
 * It finds all the input fields that have errors and sets the focus on the first one.
 */
export function setFocus(formRef, className) {
  const firstError = formRef ? formRef.getElementsByClassName(className) : [];
  if (firstError[0]) {
    firstError[0].focus();
  }
}

export const isMobileDevice = {
  Android: () => new RegExp(/Android/i).test(navigator.userAgent),
  BlackBerry: () => new RegExp(/BlackBerry/i).test(navigator.userAgent),
  iOS: () => new RegExp(/iPhone|iPad|iPod/i).test(navigator.userAgent),
  iPad: () => new RegExp(/iPad/i).test(navigator.userAgent),
  Opera: () => new RegExp(/Opera Mini/i).test(navigator.userAgent),
  Windows: () => {
    return (
      new RegExp(/IEMobile/i).test(navigator.userAgent) ||
      new RegExp(/WPDesktop/i).test(navigator.userAgent)
    );
  },
  any: () => {
    const popular = isMobileDevice.Android() || isMobileDevice.iOS();
    const unpopular =
      isMobileDevice.BlackBerry() ||
      isMobileDevice.Opera() ||
      isMobileDevice.Windows();
    return popular || unpopular;
  },
};

export const calculateOffset = element => {
  let el = element;
  let top = 0;
  let left = 0;

  while (el) {
    top += el.offsetTop || 0;
    left += el.offsetLeft || 0;
    el = el.offsetParent || el.parentElement;
  }
  return {
    top,
    left,
  };
};

/** @function
 * Purpose: to check if localStroage available or not
 */
export const isStorageUsable = () => {
  if (typeof window === 'undefined') {
    return false;
  }
  const storage = window.localStorage;

  try {
    storage.setItem('testkey', 'test');
    storage.removeItem('testkey');
  } catch (e) {
    if (e.code === DOMException.QUOTA_EXCEEDED_ERR && storage.length === 0) {
      return false;
    }
  }
  return true;
};

/** @function
 * Purpose: to get cookie expiration date
 *
 */
export const getCookieExpirationDate = () => {
  const date = new Date();
  const nextDay = date.getTime() + 24 * 60 * 60 * 1000;
  return new Date(nextDay).toUTCString();
};

/**
 * @function isBrowser
 * Determines whether or not the document, body, & window are available
 *
 * @returns {boolean}
 */
export const isBrowser = () => {
  return (
    typeof document !== 'undefined' &&
    document.body &&
    typeof window !== 'undefined'
  );
};

/**
 * Function to encode the params before sending to API
 * @param {*} str
 * @return {strng}
 */
export const getEncodedValue = data => {
  if (isBrowser()) {
    return encodeURIComponent(data);
  }
  return data;
};

/**
 * @description This function is used to check if the user is in logged-in state
 */
export const isUserAuthenticated = () => {
  /* istanbul ignore if */
  if (isBrowser()) {
    const store = getStoreRef();
    const state = store.getState();
    const isAuthenticated = pathOr(false, 'account.isAuthenticated', state);
    if (isAuthenticated) {
      return true;
    }
  }
  return false;
};
