/**
 * project/schema.js
 * Copyright (c) 2019-present, Aakash Goel
 * MIT Licensed
 *
 * This is where Project graphQL schema is defined
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
  type Project {
    _id: ID!
    projectAuditName: String!
    projectName: String!
    projectCode: Int!
    projectCategory: String!
    projectStatus: String!
    projectAdmins: [String]
    projectAuditors: [String]
    projectReviewers: [String]
    projectQuestionSet: Questionnaire
    createdBy: User!
    updatedBy: String!
    createdAt: String!
    updatedAt: String!
  }

  input createProjectInput {
    projectAuditName: String!
    projectName: String!
    projectCode: Int!
    projectCategory: String!
    projectReviewers: [String!]!
  }

  extend type Query {
    getProjects: [Project!]!
    getProjectById(projectId: ID!): Project!
  }

  extend type Mutation {
    createProject(createProjectInput: createProjectInput): Project
  }
`;

/**
 * Export graphQL schema
 * @public
 */
module.exports = schema;
