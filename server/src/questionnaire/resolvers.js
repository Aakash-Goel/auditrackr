/**
 * questionnaire/resolvers.js
 * Copyright (c) 2019-present, Aakash Goel
 * MIT Licensed
 *
 * This is where all Questionnaire graphQL resolvers are defined
 *
 */

'use strict';

/**
 * Module dependencies.
 */
const Questionnaire = require('./model');
const Project = require('../project/model');
const Question = require('../question/model');

// const authUtils = require('../../utils/authUtils');
const { transformQuestionnaire } = require('../../utils/mergeUtils');

/* eslint-disable no-use-before-define */

/**
 * Define graphQL resolvers
 * @public
 */
const resolvers = {
  Query: {
    getQuestionnaires: async () => {
      try {
        const questionnairesSet = await Questionnaire.find();
        return questionnairesSet.map(data => {
          return transformQuestionnaire(data);
        });
      } catch (err) {
        throw err;
      }
    },
  },
  Mutation: {
    createQuestionnaireSet: async (parent, args, context) => {
      try {
        const existingProject = await Project.findOne({
          _id: args.projectId,
        });
        if (!existingProject) {
          throw new Error('Project does not exist');
        }

        // check if Questionnaire for this specific project id is already created.
        const existingQuestionnaire = await Questionnaire.findOne({
          project: {
            _id: args.projectId,
          },
        });
        if (existingQuestionnaire) {
          throw new Error(
            'Questionnaire list for this project is already exist'
          );
        }

        // get all questions from database
        const questionList = await Question.find({});

        const questionnaireSet = new Questionnaire({
          project: existingProject,
          user: context.session.userId,
          questions: questionList,
        });
        const result = await questionnaireSet.save();
        return transformQuestionnaire(result);
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
