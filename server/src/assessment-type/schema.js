/**
 * assessment-type/schema.js
 * Copyright (c) 2019-present, Aakash Goel
 * MIT Licensed
 *
 * This is where AssessmentType graphQL schema is defined
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
  type AssessmentType {
    _id: ID!
    name: String!
    value: String!
    createdAt: String!
    createdBy: User!
  }

  extend type Query {
    getAssessmentTypes: [AssessmentType!]!
  }

  extend type Mutation {
    createAssessmentType(name: String!, value: String!): AssessmentType!
    deleteAssessmentType(id: ID!): AssessmentType!
    updateAssessmentType(
      id: ID!
      name: String!
      value: String!
    ): AssessmentType!
  }
`;

/**
 * Export graphQL schema
 * @public
 */
module.exports = schema;
