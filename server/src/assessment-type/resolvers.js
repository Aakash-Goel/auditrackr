/**
 * assessment-type/resolvers.js
 * Copyright (c) 2019-present, Aakash Goel
 * MIT Licensed
 *
 * This is where all AssessmentType graphQL resolvers are defined
 *
 */

'use strict';

/**
 * Module dependencies.
 */
const AssessmentType = require('./model');

const { transformAssessmentType } = require('../../utils/mergeUtils');

/**
 * Define graphQL resolvers
 * @public
 */
const resolvers = {
  Query: {
    getAssessmentTypes: async () => {
      try {
        const assessmentTypes = await AssessmentType.find();
        return assessmentTypes.map(assessmentType => {
          return transformAssessmentType(assessmentType);
        });
      } catch (err) {
        throw err;
      }
    },
  },
  Mutation: {
    createAssessmentType: async (parent, args, context) => {
      try {
        const { name, value } = args;
        const existingType = await AssessmentType.findOne({ name });
        if (existingType) {
          throw new Error('Assessment Type already exist with this name');
        }

        const assessmentTypeModel = new AssessmentType({
          name,
          value,
          createdBy: context.session.userId,
        });
        const result = await assessmentTypeModel.save();
        const createdAssessmentType = transformAssessmentType(result);
        return createdAssessmentType;
      } catch (error) {
        throw error;
      }
    },
    deleteAssessmentType: async (parent, args) => {
      try {
        const { id } = args;

        const removedAssessmentType = await AssessmentType.findByIdAndRemove(
          id
        );
        if (!removedAssessmentType) {
          throw new Error('Assessment Type with this id does not exist');
        }

        return removedAssessmentType;
      } catch (error) {
        throw error;
      }
    },
    updateAssessmentType: async (parent, args) => {
      try {
        const { id, ...restData } = args;

        const updatedAssessmentType = await AssessmentType.findOneAndUpdate(
          { _id: id },
          {
            $set: {
              ...restData,
            },
          },
          { new: true }
        );

        if (!updatedAssessmentType) {
          throw new Error('Project with this id does not exist');
        }

        return updatedAssessmentType;
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
