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
    picture: String
    projects: [Project!]
    role: String!
    createdAt: String!
    lastLoginAt: String
    agreeTerms: Boolean!
  }

  type AuthData {
    userId: ID!
    token: String!
    tokenExpiration: Int!
  }

  input userInput {
    name: String!
    email: String!
    password: String!
    agreeTerms: Boolean
  }

  input updateUserInput {
    name: String!
    email: String!
  }

  extend type Query {
    login(email: String!, password: String!): AuthData!
    getUser(userId: ID!): User
  }

  extend type Mutation {
    createUser(userInput: userInput): User
    updateUser(updateUserInput: updateUserInput): User
  }
`;

/**
 * Export graphQL schema
 * @public
 */
module.exports = schema;
