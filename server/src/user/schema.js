/**
 * user/schema.js
 * Copyright (c) 2019-present, Aakash Goel
 * MIT Licensed
 *
 * This is where User graphQL schema is defined
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
  type User {
    _id: ID!
    name: String!
    email: String!
    password: String
    avatar: String
    projects: [Project!]
    role: String!
    createdAt: String!
    agreeTerms: Boolean!
  }

  type AuthData {
    userId: ID!
    token: String!
    tokenExpiration: Int!
  }

  type Success {
    success: Boolean
  }

  input UserInput {
    name: String!
    email: String!
    password: String!
    role: String
    agreeTerms: Boolean
  }

  input UpdateUserInput {
    name: String!
    email: String!
    avatar: String
  }

  extend type Query {
    login(email: String!, password: String!): Success!
    logout: Success!
    getUser(userId: ID!): User
  }

  extend type Mutation {
    createUser(userInput: UserInput): User
    updateUser(updateUserInput: UpdateUserInput): User
  }
`;

/**
 * Export graphQL schema
 * @public
 */
module.exports = schema;
