/**
 * user-role/resolvers.js
 * Copyright (c) 2019-present, Aakash Goel
 * MIT Licensed
 *
 * This is where all UserRole graphQL resolvers are defined
 *
 */

'use strict';

/**
 * Module dependencies.
 */
const UserRole = require('./model');

// const authUtils = require('../../utils/authUtils');
const { transformUserRole } = require('../../utils/mergeUtils');

/**
 * Define graphQL resolvers
 * @public
 */
const resolvers = {
  Query: {
    getUserRoles: async () => {
      try {
        const userRoles = await UserRole.find();
        return userRoles.map(userRole => {
          return transformUserRole(userRole);
        });
      } catch (err) {
        throw err;
      }
    },
  },
  Mutation: {
    createUserRole: async (parent, args, context) => {
      try {
        const userRoleModel = new UserRole({
          name: args.roleType,
          createdAt: new Date(),
          createdBy: context.user.userId, // @TODO: needs to update this field
        });
        const result = await userRoleModel.save();
        const createdRole = transformUserRole(result);
        return createdRole;
      } catch (error) {
        throw error;
      }
    },
  },
};

/**
 * Export graphQL resolvers
 * @public
 */
module.exports = resolvers;
