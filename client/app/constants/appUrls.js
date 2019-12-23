const APP_URLS = {
  login: {
    name: 'account-login',
    url: '/account/login',
    pagePath: 'account/login',
  },
  signUp: {
    name: 'account-signup',
    url: '/account/signup',
    pagePath: 'account/signup',
  },
  auditDashboard: {
    name: 'audit-dashboard',
    url: '/account/audit/dashboard',
    pagePath: 'audit/dashboard',
  },
  auditCreate: {
    name: 'audit-create',
    url: '/account/audit/create',
    pagePath: 'audit/create',
  },
  auditProject: {
    name: 'audit-project',
    url: '/account/audit/project/:projectId',
    pagePath: 'audit/project',
  },
};

module.exports = APP_URLS;
