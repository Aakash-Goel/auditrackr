/**
 * project-category/schema.js
 * Copyright (c) 2019-present, Aakash Goel
 * MIT Licensed
 *
 * This is where ProjectCategory graphQL schema is defined
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
  type ProjectCategory {
    _id: ID!
    name: String!
    createdAt: String!
    createdBy: User!
  }

  extend type Query {
    getCategories: [ProjectCategory!]!
  }

  extend type Mutation {
    createCategory(categoryName: String!): ProjectCategory
  }
`;

/**
 * Export graphQL schema
 * @public
 */
module.exports = schema;
