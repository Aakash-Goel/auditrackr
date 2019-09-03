/**
 * question/index.js
 * Copyright (c) 2019-present, Aakash Goel
 * MIT Licensed
 *
 * import/export question graphQL schema and resolvers
 *
 */

'use strict';

const questionSchema = require('./schema');
const questionResolvers = require('./resolvers');

module.exports = {
  questionSchema,
  questionResolvers,
};
