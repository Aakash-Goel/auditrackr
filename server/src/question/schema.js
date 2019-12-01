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
    shortName: String!
    answer: String
    definition: String!
    recommendation: String
    inOut: String
    mandatory: Boolean!
    references: [String]
    assessmentType: String
    assessmentResult: String
    priority: String!
    notes: String
    points: Int
    status: String
    lastUpdatedAt: String!
    lastUpdatedBy: String!
    category: String!
  }

  input questionInput {
    question: String!
    shortName: String!
    definition: String!
    recommendation: String
    inOut: String
    mandatory: Boolean!
    references: [String]
    assessmentType: String
    assessmentResult: String
    priority: String!
    notes: String
    points: Int
    category: String!
  }

  extend type Query {
    getQuestions: [Question!]!
  }

  extend type Mutation {
    createQuestion(questionInput: questionInput): Question
  }
`;

/**
 * Export graphQL schema
 * @public
 */
module.exports = schema;
