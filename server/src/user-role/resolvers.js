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
        const { name, value } = args;
        const existingUserRole = await UserRole.findOne({ name });
        if (existingUserRole) {
          throw new Error('User role already exist with this name');
        }

        const userRoleModel = new UserRole({
          name,
          value,
          createdBy: context.session.userId,
        });
        const result = await userRoleModel.save();
        const createdRole = transformUserRole(result);
        return createdRole;
      } catch (error) {
        throw error;
      }
    },
    deleteUserRole: async (parent, args) => {
      try {
        const { id } = args;

        const removedUserRole = await UserRole.findByIdAndRemove(id);
        if (!removedUserRole) {
          throw new Error('User Role with this id does not exist');
        }

        return removedUserRole;
      } catch (error) {
        throw error;
      }
    },
    updateUserRole: async (parent, args) => {
      try {
        const { id, ...restData } = args;

        const updatedUserRole = await UserRole.findOneAndUpdate(
          { _id: id },
          {
            $set: {
              ...restData,
            },
          },
          { new: true }
        );

        if (!updatedUserRole) {
          throw new Error('User Role with this id does not exist');
        }

        return updatedUserRole;
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
