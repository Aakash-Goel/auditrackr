/**
 * question/schema.js
 * Copyright (c) 2019-present, Aakash Goel
 * MIT Licensed
 *
 * This is where Question graphQL schema is defined
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
  type Question {
    _id: ID!
    question: String!
    questionName: String!
    answer: String
    definition: String!
    recommendation: String
    inOut: String
    mandatory: Boolean!
    references: [String]
    assessmentType: String
    assessmentResult: String
    priority: String!
    comments: String
    points: Int
    status: String
    category: String!
    createdAt: String
    updatedAt: String
  }

  input questionInput {
    question: String!
    questionName: String!
    definition: String!
    recommendation: String
    inOut: String
    mandatory: Boolean!
    references: [String]
    assessmentType: String
    assessmentResult: String
    priority: String!
    comments: String
    points: Int
    category: String!
  }

  type QuestionDeleted {
    isSuccess: Boolean
  }

  extend type Query {
    getQuestions: [Question!]!
  }

  extend type Mutation {
    createQuestion(questionInput: questionInput): Question
    deleteQuestion(questionId: ID!): QuestionDeleted!
  }
`;

/**
 * Export graphQL schema
 * @public
 */
module.exports = schema;
