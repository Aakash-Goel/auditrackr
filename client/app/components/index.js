const req = require.context('./', true, /index\.js$/);

req.keys().forEach(key => {
  /* If its the current file ignore it */
  if (key === './index.js') return;

  const componentName = key.replace(/^.+\/([^/]+)\/index\.js/, '$1');
  module.exports[componentName] = req(key).default;
});
