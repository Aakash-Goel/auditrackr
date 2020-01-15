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
    createdBy: User!
    createdAt: String!
  }

  type QuestionCategoryDeleted {
    isSuccess: Boolean
  }

  extend type Query {
    getQuestionCategories: [QuestionCategory!]!
  }

  extend type Mutation {
    createQuestionCategory(categoryName: String!): QuestionCategory
    deleteQuestionCategory(categoryName: String!): QuestionCategoryDeleted!
  }
`;

/**
 * Export graphQL schema
 * @public
 */
module.exports = schema;
