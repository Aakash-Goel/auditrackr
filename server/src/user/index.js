/**
 * index.js
 * Copyright (c) 2019-present, Aakash Goel
 * MIT Licensed
 *
 * Import/Export User graphQL schema and resolvers
 *
 */

'use strict';

const userSchema = require('./schema');
const userResolvers = require('./resolvers');

module.exports = {
  userSchema,
  userResolvers,
};
