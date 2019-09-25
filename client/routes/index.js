const routes = require('next-routes')();

//
// Because of awesome Next.js, You don't need to add routes for all pages.
// Every file on Pages folder basically has route as they named.
// (index.js => /, about.js => /about, ...etc.)
//
// If you want to change url (for SEO or put different path), please add your route below.
//
// Please add your route between of comments
//
// ------------ ROUTES ---------------
// @StartRoutes
routes.add({
  name: 'account-login',
  pattern: '/account/login',
  page: 'account/login',
});
routes.add({
  name: 'account-signup',
  pattern: '/account/signup',
  page: 'account/signup',
});
routes.add({
  name: 'audit-create',
  pattern: '/account/audit/create',
  page: 'audit/create',
});
routes.add({
  name: 'audit-project',
  pattern: '/account/audit/project/:projectId',
  page: 'audit/project',
});
routes.add({
  name: 'audit-dashboard',
  pattern: '/account/audit/dashboard',
  page: 'audit/dashboard',
});
// @EndRoutes
// ------------ ROUTES ---------------
//
//

/**
 * Module exports.
 * @public
 */
module.exports = routes;
