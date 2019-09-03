/**
 * questionnaire/schema.js
 * Copyright (c) 2019-present, Aakash Goel
 * MIT Licensed
 *
 * This is where Questionnaire graphQL schema is defined
 *
 */

'use strict';

/**
 * Module dependencies.
 */
const { gql } = require('apollo-server-express');

/**
 * Define graphQL schema
 * @public
 */
const schema = gql`
  type Questionnaire {
    _id: ID!
    project: Project!
    user: User!
    category: String!
    questions: [ID]
    createdAt: String!
    updatedAt: String!
  }

  extend type Query {
    getQuestionnaires: [Questionnaire!]!
  }

  extend type Mutation {
    createQuestionnaireSet(projectId: ID!): Questionnaire!
  }
`;

/**
 * Export graphQL schema
 * @public
 */
module.exports = schema;
