/**
 * user-role/index.js
 * Copyright (c) 2019-present, Aakash Goel
 * MIT Licensed
 *
 * import/export user-role graphQL schema and resolvers
 *
 */

'use strict';

const userRoleSchema = require('./schema');
const userRoleResolvers = require('./resolvers');

module.exports = {
  userRoleSchema,
  userRoleResolvers,
};
