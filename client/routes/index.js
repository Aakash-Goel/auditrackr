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
  name: 'audit-create',
  pattern: '/account/audit/create',
  page: 'audit/create',
});
routes.add({
  name: 'audit-questionnaires',
  pattern: '/account/audit/questionnaires',
  page: 'audit/questionnaires',
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
