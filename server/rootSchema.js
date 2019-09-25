/**
 * rootSchema.js
 * Copyright (c) 2019-present, Aakash Goel
 * MIT Licensed
 *
 * This is the main file where all the schemas will be imported and combined into one schema i.e. rootSchema which will then export
 *
 * Create new schema inside 'src' folder, import it here and add it to the rootSchema object.
 *
 * For ex:
 *  1. create new folder inside 'src' i.e. 'featureXyz'
 *  2. create new file i.e. 'schema.js' inside 'src > featureXyz'. Create schemas related to this feature only and export it.
 *  3. create new file i.e. 'index.js' inside 'src > featureXyz'. Import and Export `featureXyzSchema` in this index file.
 *  4. Import here in 'rootSchema.js' i.e. const { featureXyzSchema } = require('./src/featureXyz')
 *  5. Add it to the `rootSchema` i.e. const rootSchema = [<otherSchema>, featureXyzSchema]
 *
 */

'use strict';

const { gql } = require('apollo-server-express');

/**
 * Module schemas.
 */
const { messageSchema } = require('./src/message');
const { userSchema } = require('./src/user');
const { projectSchema } = require('./src/project');
const { questionSchema } = require('./src/question');
const { questionnaireSchema } = require('./src/questionnaire');
const { projectCategorySchema } = require('./src/project-category');
const { userRoleSchema } = require('./src/user-role');

/**
 * Add type which is needed to be extend on other schema
 * more info here https://www.apollographql.com/docs/graphql-tools/generate-schema.html#extend-types
 */
const linkSchema = gql`
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
`;

/**
 * Add or Remove schemas.
 * @public
 */
const rootSchema = [
  linkSchema, // do not remove this schema
  messageSchema,
  userSchema,
  projectSchema,
  questionSchema,
  questionnaireSchema,
  projectCategorySchema,
  userRoleSchema,
];
// console.log('>>>rootSchema ', rootSchema);

/**
 * Module exports.
 * @public
 */
module.exports = rootSchema;
