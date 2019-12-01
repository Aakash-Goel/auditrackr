/**
 * question/resolvers.js
 * Copyright (c) 2019-present, Aakash Goel
 * MIT Licensed
 *
 * This is where all Question graphQL resolvers are defined
 *
 */

'use strict';

/**
 * Module dependencies.
 */
const Question = require('./model');

/**
 * Define graphQL resolvers
 * @public
 */
const resolvers = {
  Query: {
    getQuestions: async () => {
      try {
        const questions = await Question.find();
        return questions.map(question => {
          return { ...question._doc }; // eslint-disable-line no-underscore-dangle
        });
      } catch (err) {
        throw err;
      }
    },
  },
  Mutation: {
    /* eslint-disable complexity */ // @TODO: needs to remove later
    createQuestion: async (parent, args) => {
      try {
        const question = new Question({
          question: args.questionInput.question,
          shortName: args.questionInput.shortName,
          definition: args.questionInput.definition,
          recommendation: args.questionInput.recommendation || '',
          inOut: args.questionInput.inOut || '',
          mandatory: args.questionInput.mandatory,
          references: args.questionInput.references || [], // @TODO: needs to update this field
          assessmentType: args.questionInput.assessmentType || '',
          assessmentResult: args.questionInput.assessmentResult || '',
          priority: args.questionInput.priority, // @TODO: needs to update this field
          notes: args.questionInput.notes || '',
          points: args.questionInput.points || 1,
          status: 'Incomplete',
          lastUpdatedAt: new Date(),
          lastUpdatedBy: 'xyz', // @TODO: needs to update this field
          category: args.questionInput.category, // @TODO: needs to update this field
        });
        const result = await question.save();
        return { ...result._doc }; // eslint-disable-line no-underscore-dangle
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
