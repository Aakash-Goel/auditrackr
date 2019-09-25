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
    auditName: String!
    name: String!
    code: Int!
    category: String!
    createdAt: String!
    createdBy: User!
    lastUpdatedAt: String!
    lastUpdatedBy: String!
    auditors: [String]
    collaborators: [String]
    questionnaire: Questionnaire
  }

  input createProjectInput {
    auditName: String!
    name: String!
    code: Int!
    category: String!
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
