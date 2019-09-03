/**
 * project/resolvers.js
 * Copyright (c) 2019-present, Aakash Goel
 * MIT Licensed
 *
 * This is where all Project graphQL resolvers are defined
 *
 */

'use strict';

/**
 * Module dependencies.
 */
const Project = require('./model');
const User = require('../user/model');

const authUtils = require('../../utils/authUtils');
const { transformProject } = require('../../utils/mergeUtils');

/**
 * Define graphQL resolvers
 * @public
 */
const resolvers = {
  Query: {
    getProjects: async () => {
      try {
        const projects = await Project.find();
        return projects.map(project => {
          return transformProject(project);
        });
      } catch (err) {
        throw err;
      }
    },
  },
  Mutation: {
    createProject: authUtils.requiresLogin(async (parent, args, context) => {
      try {
        const project = new Project({
          auditName: args.createProjectInput.auditName,
          name: args.createProjectInput.name,
          code: args.createProjectInput.code,
          category: args.createProjectInput.category,
          createdAt: new Date(),
          createdBy: context.user.userId, // @TODO: needs to update this field
          lastUpdatedAt: new Date(),
          lastUpdatedBy: 'xyz', // @TODO: needs to update this field
        });
        const result = await project.save();
        const createdProject = transformProject(result);
        const existingUser = await User.findById(context.user.userId); // @TODO: needs to update this field
        if (!existingUser) {
          throw new Error('User does not exist');
        }
        existingUser.projects.push(project);
        await existingUser.save();

        return createdProject;
      } catch (error) {
        throw error;
      }
    }),
  },
};

/**
 * Export graphQL resolvers
 * @public
 */
module.exports = resolvers;
