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
        return questionnairesSet;
      } catch (error) {
        throw error;
      }
    },
  },
  Mutation: {
    createQuestionnaire: async (parent, args) => {
      try {
        const { categoryName, questionsList } = args;

        const existingQuestionnaireSet = await Questionnaire.findOne({
          category: categoryName,
        });
        if (existingQuestionnaireSet) {
          throw new Error('Questionnaire with this Category is already exist');
        }

        const questionnaireSet = new Questionnaire({
          category: categoryName,
          questions: questionsList,
        });
        const result = await questionnaireSet.save();
        return result;
      } catch (error) {
        throw error;
      }
    },
    deleteQuestionnaire: async (parent, args) => {
      try {
        const { questionnaireId } = args;

        const newQuestionnaireSet = await Questionnaire.findByIdAndRemove(
          questionnaireId
        );
        if (!newQuestionnaireSet) {
          throw new Error('Questionnaire with this id does not exist');
        }

        return newQuestionnaireSet;
      } catch (error) {
        throw error;
      }
    },
    updateQuestionnaire: async (parent, args) => {
      try {
        const { questionnaireId, questionnaireData } = args;

        const updatedQuestionnaireSet = await Questionnaire.findOneAndUpdate(
          { _id: questionnaireId },
          {
            $set: {
              ...questionnaireData,
            },
          },
          { new: true }
        );

        if (!updatedQuestionnaireSet) {
          throw new Error('Questionnaire Set with this id does not exist');
        }

        return updatedQuestionnaireSet;
      } catch (error) {
        throw error;
      }
    },
    addQuestion: async (parent, args) => {
      try {
        const { questionnaireId, question } = args;

        const questionnaireSet = await Questionnaire.findById(questionnaireId);

        questionnaireSet.questions.push(question);
        const result = await questionnaireSet.save();
        return result;
      } catch (error) {
        throw error;
      }
    },
    deleteQuestion: async (parent, args) => {
      try {
        const { questionnaireId, questionId } = args;

        const questionnaireSet = await Questionnaire.findById(questionnaireId);
        if (!questionnaireSet) {
          throw new Error('Questionnaire with this id does not exist');
        }
        const question = questionnaireSet.questions.id(questionId);
        question.remove();
        const result = await questionnaireSet.save();
        return result;
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
