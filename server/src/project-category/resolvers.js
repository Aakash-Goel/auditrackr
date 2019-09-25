/**
 * project-category/resolvers.js
 * Copyright (c) 2019-present, Aakash Goel
 * MIT Licensed
 *
 * This is where all ProjectCategory graphQL resolvers are defined
 *
 */

'use strict';

/**
 * Module dependencies.
 */
const ProjectCategory = require('./model');

// const authUtils = require('../../utils/authUtils');
const { transformProjectCategory } = require('../../utils/mergeUtils');

/**
 * Define graphQL resolvers
 * @public
 */
const resolvers = {
  Query: {
    getProjectCategories: async () => {
      try {
        const projectCategories = await ProjectCategory.find();
        return projectCategories.map(projectCat => {
          return transformProjectCategory(projectCat);
        });
      } catch (err) {
        throw err;
      }
    },
  },
  Mutation: {
    createProjectCategory: async (parent, args, context) => {
      try {
        const projectCat = new ProjectCategory({
          name: args.categoryName,
          createdAt: new Date(),
          createdBy: context.user.userId, // @TODO: needs to update this field
        });
        const result = await projectCat.save();
        const createdProject = transformProjectCategory(result);
        return createdProject;
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
