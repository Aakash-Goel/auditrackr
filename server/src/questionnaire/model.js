/**
 * questionnaire/model.js
 * Copyright (c) 2019-present, Aakash Goel
 * MIT Licensed
 *
 * This is where mongoDB Questionnaire model is defined
 *
 */

'use strict';

/**
 * Module dependencies.
 */
const mongoose = require('mongoose');

const Question = require('../question/model');

/**
 * Define mongoDB schema
 * @private
 */
const { Schema } = mongoose;

/**
 * Generate new questionnaire Schema
 */
const questionnaireSchema = new Schema(
  {
    category: {
      type: String,
      required: true,
    },
    questions: [Question.schema],
    status: {
      type: String,
      required: true,
      default: 'InProgress',
    },
  },
  { timestamps: true } // this extra parameter in the schema, will help mongoose to automatically create 2fields "createdAt" and "updatedAt"
);

/**
 * Export mongoDB model
 * @public
 */
module.exports = mongoose.model('Questionnaire', questionnaireSchema);
