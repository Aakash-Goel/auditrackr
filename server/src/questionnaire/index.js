/**
 * questionnaire/index.js
 * Copyright (c) 2019-present, Aakash Goel
 * MIT Licensed
 *
 * import/export questionnaire graphQL schema and resolvers
 *
 */

'use strict';

const questionnaireSchema = require('./schema');
const questionnaireResolvers = require('./resolvers');

module.exports = {
  questionnaireSchema,
  questionnaireResolvers,
};
