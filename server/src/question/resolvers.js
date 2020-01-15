/**
 * question/resolvers.js
 * Copyright (c) 2019-present, Aakash Goel
 * MIT Licensed
 *
 * This is where all Question graphQL resolvers are defined
 *
 */

/* eslint-disable no-underscore-dangle */

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
          return { ...question._doc };
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
          questionName: args.questionInput.questionName,
          definition: args.questionInput.definition,
          recommendation: args.questionInput.recommendation || '',
          inOut: args.questionInput.inOut || '',
          mandatory: args.questionInput.mandatory,
          references: args.questionInput.references || [], // @TODO: needs to update this field
          assessmentType: args.questionInput.assessmentType || '',
          assessmentResult: args.questionInput.assessmentResult || '',
          priority: args.questionInput.priority, // @TODO: needs to update this field
          comments: args.questionInput.comments || '',
          points: args.questionInput.points || 1,
          status: 'Incomplete',
          category: args.questionInput.category, // @TODO: needs to update this field
        });
        const result = await question.save();
        return { ...result._doc };
      } catch (error) {
        throw error;
      }
    },
    deleteQuestion: async (parent, args) => {
      try {
        const { questionId } = args;
        const existingQuestion = await Question.findById(questionId);
        if (!existingQuestion) {
          throw new Error('Question does not exist');
        }
        await Question.deleteOne({
          _id: questionId,
        });
        return {
          isSuccess: true,
        };
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
