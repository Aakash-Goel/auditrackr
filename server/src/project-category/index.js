/**
 * project-category/index.js
 * Copyright (c) 2019-present, Aakash Goel
 * MIT Licensed
 *
 * import/export project-category graphQL schema and resolvers
 *
 */

'use strict';

const projectCategorySchema = require('./schema');
const projectCategoryResolvers = require('./resolvers');

module.exports = {
  projectCategorySchema,
  projectCategoryResolvers,
};
