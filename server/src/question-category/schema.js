/**
 * question-category/schema.js
 * Copyright (c) 2019-present, Aakash Goel
 * MIT Licensed
 *
 * This is where QuestionCategory graphQL schema is defined
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
  type QuestionCategory {
    _id: ID!
    name: String!
    createdAt: String!
    createdBy: User!
  }

  extend type Query {
    getQuestionCategories: [QuestionCategory!]!
  }

  extend type Mutation {
    createQuestionCategory(categoryName: String!): QuestionCategory
  }
`;

/**
 * Export graphQL schema
 * @public
 */
module.exports = schema;
