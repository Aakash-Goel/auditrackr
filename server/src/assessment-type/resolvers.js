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

// const authUtils = require('../../utils/authUtils');
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
        const assessmentTypeModel = new AssessmentType({
          name: args.type,
          createdAt: new Date(),
          createdBy: context.user.userId, // @TODO: needs to update this field
        });
        const result = await assessmentTypeModel.save();
        const createdAssessmentType = transformAssessmentType(result);
        return createdAssessmentType;
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