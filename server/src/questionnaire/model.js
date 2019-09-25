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

/**
 * Define mongoDB schema
 * @private
 */
const { Schema } = mongoose;

/**
 * Generate new message Schema
 */
const questionnaireSchema = new Schema(
  {
    project: {
      type: Schema.Types.ObjectId,
      ref: 'Project',
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    questions: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Question',
      },
    ],
  },
  { timestamps: true } // this extra parameter in the schema, will help mongoose to automatically create 2fields "createdAt" and "updatedAt"
);

/**
 * Export mongoDB model
 * @public
 */
module.exports = mongoose.model('Questionnaire', questionnaireSchema);
