import Cookies from 'universal-cookie';
import nextCookie from 'next-cookies';

const universalCookie = new Cookies();

/**
 * Set cookie from client side only
 *
 * @param k : Cookie Key to Set
 * @param v : Cookie Value to Set
 * @param o : Cookie Options to Set
 * @returns {*}
 */
export const setCookie = (k, v, o = {}) => universalCookie.set(k, v, o);

/**
 * Get cookie from client and server side without ctx object
 *
 * @param key : Cookie key to get
 * @returns {*}
 */
export const getCookie = key => {
  const cookieValue = universalCookie.get(key);
  return cookieValue === 'undefined' ? null : cookieValue;
};

/**
 * Get cookie from server and client side
 *
 * @param ctx : The ctx object is passed to getInitialProps function by next.js
 * @param key : Cookie key to get
 * @returns {*}
 */
export const getNextCookie = (ctx, key) => {
  const cookie = nextCookie(ctx)[key];
  return cookie === 'undefined' ? null : cookie;
};
