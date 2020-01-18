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
    projectDomain: String!
    projectStatus: String!
    projectAdmins: [String]
    projectAuditors: [String]
    projectReviewers: [String]
    projectQuestionnaires: [Questionnaire]
    createdBy: User!
    updatedBy: String!
    createdAt: String!
    updatedAt: String!
  }

  input CreateProjectInput {
    projectAuditName: String!
    projectName: String!
    projectCode: Int!
    projectDomain: String!
    projectReviewers: [String!]!
  }

  input UpdateProjectInput {
    projectAuditName: String
    projectName: String
    projectCode: Int
    projectDomain: String
    projectStatus: String
    projectAdmins: [String]
    projectAuditors: [String]
    projectReviewers: [String]
  }

  extend type Query {
    getProjects: [Project!]!
    getProjectById(projectId: ID!): Project!
  }

  extend type Mutation {
    createProject(projectData: CreateProjectInput!): Project!
    deleteProject(projectId: ID!): Project!
    updateProject(projectId: ID!, projectData: UpdateProjectInput!): Project!
  }
`;

/**
 * Export graphQL schema
 * @public
 */
module.exports = schema;
