/**
 * project/index.js
 * Copyright (c) 2019-present, Aakash Goel
 * MIT Licensed
 *
 * import/export project graphQL schema and resolvers
 *
 */

'use strict';

const projectSchema = require('./schema');
const projectResolvers = require('./resolvers');

module.exports = {
  projectSchema,
  projectResolvers,
};
