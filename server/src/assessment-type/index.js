/**
 * assessment-type/index.js
 * Copyright (c) 2019-present, Aakash Goel
 * MIT Licensed
 *
 * import/export assessment-type graphQL schema and resolvers
 *
 */

'use strict';

const assessmentTypeSchema = require('./schema');
const assessmentTypeResolvers = require('./resolvers');

module.exports = {
  assessmentTypeSchema,
  assessmentTypeResolvers,
};
