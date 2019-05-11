const routes = require('next-routes')();

routes.add({
  name: 'create-audit',
  pattern: '/account/audit/create',
  page: 'audit/create-new',
});

module.exports = routes;
