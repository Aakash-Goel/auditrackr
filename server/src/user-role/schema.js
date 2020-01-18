/**
 * user-role/schema.js
 * Copyright (c) 2019-present, Aakash Goel
 * MIT Licensed
 *
 * This is where UserRole graphQL schema is defined
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
  type UserRole {
    _id: ID!
    name: String!
    value: String!
    createdAt: String!
    createdBy: User!
  }

  extend type Query {
    getUserRoles: [UserRole!]!
  }

  extend type Mutation {
    createUserRole(name: String!, value: String!): UserRole!
    deleteUserRole(id: ID!): UserRole!
    updateUserRole(id: ID!, name: String!, value: String!): UserRole!
  }
`;

/**
 * Export graphQL schema
 * @public
 */
module.exports = schema;
