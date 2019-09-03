import warning from 'warning';
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';

export function titleize(string) {
  warning(
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

  const name = page.pathname.replace(/.*\//, '');

  if (page.pathname.indexOf('/api') === 0) {
    return upperFirst(camelCase(name));
  }

  return titleize(name);
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
