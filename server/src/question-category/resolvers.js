/**
 * question-category/resolvers.js
 * Copyright (c) 2019-present, Aakash Goel
 * MIT Licensed
 *
 * This is where all QuestionCategory graphQL resolvers are defined
 *
 */

'use strict';

/**
 * Module dependencies.
 */
const QuestionCategory = require('./model');

// const authUtils = require('../../utils/authUtils');
const { transformQuestionCategory } = require('../../utils/mergeUtils');

/**
 * Define graphQL resolvers
 * @public
 */
const resolvers = {
  Query: {
    getQuestionCategories: async () => {
      try {
        const questionCategories = await QuestionCategory.find();
        return questionCategories.map(questionCat => {
          return transformQuestionCategory(questionCat);
        });
      } catch (err) {
        throw err;
      }
    },
  },
  Mutation: {
    createQuestionCategory: async (parent, args, context) => {
      try {
        const { categoryName } = args;
        const existingQuestionCategory = await QuestionCategory.findOne({
          name: categoryName,
        });
        if (existingQuestionCategory) {
          throw new Error('Question Category already exist with this name');
        }

        const questionCat = new QuestionCategory({
          name: categoryName,
          createdAt: new Date(),
          createdBy: context.session.userId, // @TODO: needs to update this field
        });
        const result = await questionCat.save();
        const createdQuestion = transformQuestionCategory(result);
        return createdQuestion;
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
