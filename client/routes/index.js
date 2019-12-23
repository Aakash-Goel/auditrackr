const routes = require('next-routes')();

const APP_URLS = require('../app/constants/appUrls');

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
  name: APP_URLS.login.name,
  pattern: APP_URLS.login.url,
  page: APP_URLS.login.pagePath,
});
routes.add({
  name: APP_URLS.signUp.name,
  pattern: APP_URLS.signUp.url,
  page: APP_URLS.signUp.pagePath,
});
routes.add({
  name: APP_URLS.auditDashboard.name,
  pattern: APP_URLS.auditDashboard.url,
  page: APP_URLS.auditDashboard.pagePath,
});
routes.add({
  name: APP_URLS.auditCreate.name,
  pattern: APP_URLS.auditCreate.url,
  page: APP_URLS.auditCreate.pagePath,
});
routes.add({
  name: APP_URLS.auditProject.name,
  pattern: APP_URLS.auditProject.url,
  page: APP_URLS.auditProject.pagePath,
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
