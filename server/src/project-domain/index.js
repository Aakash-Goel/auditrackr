/**
 * project-domain/index.js
 * Copyright (c) 2019-present, Aakash Goel
 * MIT Licensed
 *
 * import/export project-domain graphQL schema and resolvers
 *
 */

'use strict';

const projectDomainSchema = require('./schema');
const projectDomainResolvers = require('./resolvers');

module.exports = {
  projectDomainSchema,
  projectDomainResolvers,
};
