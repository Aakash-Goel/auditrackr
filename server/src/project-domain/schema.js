/**
 * project-domain/schema.js
 * Copyright (c) 2019-present, Aakash Goel
 * MIT Licensed
 *
 * This is where ProjectDomain graphQL schema is defined
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
  type ProjectDomain {
    _id: ID!
    name: String!
    value: String!
    createdAt: String!
    createdBy: User!
  }

  extend type Query {
    getProjectDomains: [ProjectDomain!]!
  }

  extend type Mutation {
    createProjectDomain(name: String!, value: String!): ProjectDomain!
    deleteProjectDomain(id: ID!): ProjectDomain!
    updateProjectDomain(id: ID!, name: String!, value: String!): ProjectDomain!
  }
`;

/**
 * Export graphQL schema
 * @public
 */
module.exports = schema;
