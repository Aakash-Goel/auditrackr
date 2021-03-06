/**
 * project/model.js
 * Copyright (c) 2019-present, Aakash Goel
 * MIT Licensed
 *
 * This is where mongoDB Project model is defined
 *
 */

'use strict';

/**
 * Module dependencies.
 */
const mongoose = require('mongoose');

const Questionnaire = require('../questionnaire/model');

/**
 * Define mongoDB schema
 * @private
 */
const { Schema } = mongoose;

/**
 * Generate new project Schema
 */
const projectSchema = new Schema(
  {
    projectAuditName: {
      type: String,
      required: true,
    },
    projectName: {
      type: String,
      required: true,
    },
    projectCode: {
      type: Number,
      required: true,
    },
    projectDomain: {
      type: String,
      required: true,
    },
    projectStatus: {
      type: String,
      required: true,
      default: 'InProgress',
    },
    projectAdmins: {
      type: [String],
    },
    projectAuditors: [String],
    projectReviewers: [String],
    projectQuestionnaires: [Questionnaire.schema],
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    updatedBy: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } // this extra parameter in the model, will help mongoose to automatically create 2 fields "createdAt" and "updatedAt"
);

/**
 * Export mongoDB model
 * @public
 */
module.exports = mongoose.model('Project', projectSchema);
