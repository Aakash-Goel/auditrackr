/**
 * logger.js
 *
 * Logger middleware, you can customize it to make messages more personal
 *
 */

/* eslint-disable no-console */

/**
 * Module dependencies.
 */
const chalk = require('chalk');
const ip = require('ip');

/**
 * Module variables.
 * @private
 */
const divider = chalk.gray('\n-----------------------------------------------');

/**
 * Module variables.
 * @public
 */
const logger = {
  // Called whenever there's an error on the server we want to print
  error: err => {
    console.error(chalk.red(err));
  },

  success: msz => {
    console.log(chalk.green(msz));
  },

  // Called when express.js app starts on given port w/o errors
  appStarted: (port, host, graphQlPath, tunnelStarted) => {
    console.log(`\n🚀 Server started ! ${chalk.green('✓')}`);

    // If the tunnel started, log that and the URL it's available at
    if (tunnelStarted) {
      console.log(`Tunnel initialised ${chalk.green('✓')}`);
    }

    console.log(`
      ${chalk.bold('Access URLs:')}${divider}
      GraphQL URL: ${chalk.magenta(`http://${host}:${port}${graphQlPath}`)}
        Localhost: ${chalk.magenta(`http://${host}:${port}`)}
              LAN: ${chalk.magenta(`http://${ip.address()}:${port}`) +
                (tunnelStarted
                  ? `\n    Proxy: ${chalk.magenta(tunnelStarted)}`
                  : '')}${divider}
      ${chalk.blue(`Press ${chalk.italic('CTRL-C')} to stop`)}
    `);
  },

  info: msz => {
    console.info(chalk.blue(msz));
  },
};

/**
 * Module exports.
 * @public
 */
module.exports = logger;
