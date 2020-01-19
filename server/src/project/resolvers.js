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
const Questionnaire = require('../questionnaire/model');

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
    getProjectById: async (parent, args) => {
      try {
        const existingProject = await Project.findOne({
          _id: args.projectId,
        });
        if (!existingProject) {
          throw new Error('Project does not exist');
        }
        return transformProject(existingProject);
      } catch (error) {
        throw error;
      }
    },
  },
  Mutation: {
    createProject: async (parent, args, context) => {
      try {
        // get all questionnaire sets from database
        const questionList = await Questionnaire.find({});

        const {
          projectAuditName,
          projectName,
          projectCode,
          projectDomain,
          projectReviewers,
        } = args.projectData;

        const project = new Project({
          projectAuditName,
          projectName,
          projectCode,
          projectDomain,
          projectReviewers,
          projectQuestionnaires: questionList,
          createdBy: context.session.userId,
          updatedBy: 'xyz', // @TODO: needs to update this field
        });
        const result = await project.save();
        const createdProject = transformProject(result);

        // find current user and add project into database
        const existingUser = await User.findById(context.session.userId);
        if (!existingUser) {
          throw new Error('User does not exist');
        }
        existingUser.projects.push(project);
        await existingUser.save();

        return createdProject;
      } catch (error) {
        throw error;
      }
    },
    deleteProject: async (parent, args, context) => {
      try {
        const { projectId } = args;

        // 1. check the project and find the user who created it
        const currentProject = await Project.findById(projectId);
        if (!currentProject) {
          throw new Error('Project does not exist');
        }

        if (currentProject && !currentProject.createdBy) {
          throw new Error('User does not exist');
        }

        // 2. validate if current user (context.session.userId) is equal to the user who created the project
        if (currentProject.createdBy.toString() !== context.session.userId) {
          throw new Error('You are not authorized to perform this action');
        }

        // 3. if above success, then remove the project from that User database
        await User.updateOne(
          { _id: context.session.userId },
          { $pull: { projects: { $in: projectId } } }
        );

        // 4. Finally, find the project and remove it from Project database
        const removedProject = await Project.findByIdAndRemove(projectId);

        // 5. return the result
        return removedProject;
      } catch (error) {
        throw error;
      }
    },
    updateProject: async (parent, args) => {
      try {
        const { projectId, projectData } = args;

        const updatedProject = await Project.findOneAndUpdate(
          { _id: projectId },
          {
            $set: {
              ...projectData,
            },
          },
          { new: true }
        );

        if (!updatedProject) {
          throw new Error('Project with this id does not exist');
        }

        return updatedProject;
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
