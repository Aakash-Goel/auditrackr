/**
 * project-domain/resolvers.js
 * Copyright (c) 2019-present, Aakash Goel
 * MIT Licensed
 *
 * This is where all ProjectDomain graphQL resolvers are defined
 *
 */

'use strict';

/**
 * Module dependencies.
 */
const ProjectDomain = require('./model');

const { transformProjectDomain } = require('../../utils/mergeUtils');

/**
 * Define graphQL resolvers
 * @public
 */
const resolvers = {
  Query: {
    getProjectDomains: async () => {
      try {
        const projectCategories = await ProjectDomain.find();
        return projectCategories.map(projectCat => {
          return transformProjectDomain(projectCat);
        });
      } catch (err) {
        throw err;
      }
    },
  },
  Mutation: {
    createProjectDomain: async (parent, args, context) => {
      try {
        const { name, value } = args;
        const existingProjectCategory = await ProjectDomain.findOne({
          name,
        });
        if (existingProjectCategory) {
          throw new Error('Project Category already exist with this name');
        }

        const projectCat = new ProjectDomain({
          name,
          value,
          createdBy: context.session.userId,
        });
        const result = await projectCat.save();
        const createdProject = transformProjectDomain(result);
        return createdProject;
      } catch (error) {
        throw error;
      }
    },
    deleteProjectDomain: async (parent, args) => {
      try {
        const { id } = args;

        const removedProjectCat = await ProjectDomain.findByIdAndRemove(id);
        if (!removedProjectCat) {
          throw new Error('Project Category with this id does not exist');
        }

        return removedProjectCat;
      } catch (error) {
        throw error;
      }
    },
    updateProjectDomain: async (parent, args) => {
      try {
        const { id, ...restData } = args;

        const updatedProjectCat = await ProjectDomain.findOneAndUpdate(
          { _id: id },
          {
            $set: {
              ...restData,
            },
          },
          { new: true }
        );

        if (!updatedProjectCat) {
          throw new Error('Project with this id does not exist');
        }

        return updatedProjectCat;
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
