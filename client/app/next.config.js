/**
 * next.config.js
 *
 * next.js configuration goes here
 *
 */
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const router = require('../routes');

/**
 * Module variables.
 * @public
 */
const nextConfig = {
  distDir: '../build',
  // webpack: (config, { dev, isServer }) => {
  webpack: (config, { dev }) => {
    // const prod = !dev;

    if (dev) {
      config.module.rules.push({
        test: /\.(jsx?|gql|graphql)$/,
        loader: 'eslint-loader',
        exclude: ['/node_modules/', '/app/.next/'],
        enforce: 'pre',
      });
    }

    return config;
  },
};

if (process.env.STATIC_EXPORT) {
  nextConfig.exportPathMap = function exportPathMap() {
    const routes = {};
    routes['/'] = {
      page: '/',
    };
    router.routes.forEach(route => {
      if (!route.pattern.includes(':')) {
        routes[route.pattern] = {
          page: route.page,
        };
      }
    });

    return routes;
  };
}

const plugins = [
  [
    optimizedImages,
    {
      /* config for next-optimized-images */
    },
  ],

  // other plugins here
];

/**
 * Module exports.
 * @public
 */
module.exports = withPlugins(plugins, nextConfig);
