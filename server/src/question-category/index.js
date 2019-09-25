/**
 * question-category/index.js
 * Copyright (c) 2019-present, Aakash Goel
 * MIT Licensed
 *
 * import/export question-category graphQL schema and resolvers
 *
 */

'use strict';

const questionCategorySchema = require('./schema');
const questionCategoryResolvers = require('./resolvers');

module.exports = {
  questionCategorySchema,
  questionCategoryResolvers,
};
