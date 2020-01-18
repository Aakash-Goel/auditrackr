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
    category: String!
    questions: [Question]
    status: String!
    createdAt: String!
    updatedAt: String!
  }

  input QuestionnaireInput {
    category: String
    questions: [QuestionInput]
    status: String
  }

  extend type Query {
    getQuestionnaires: [Questionnaire!]!
  }

  extend type Mutation {
    createQuestionnaire(
      categoryName: String!
      questionsList: [QuestionInput!]!
    ): Questionnaire!
    deleteQuestionnaire(questionnaireId: ID!): Questionnaire!
    updateQuestionnaire(
      questionnaireId: ID!
      questionnaireData: QuestionnaireInput!
    ): Questionnaire!
    addQuestion(questionnaireId: ID!, question: QuestionInput!): Questionnaire!
    deleteQuestion(questionnaireId: ID!, questionId: ID!): Questionnaire!
  }
`;

/**
 * Export graphQL schema
 * @public
 */
module.exports = schema;
