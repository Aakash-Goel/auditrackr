/**
 * question/model.js
 * Copyright (c) 2019-present, Aakash Goel
 * MIT Licensed
 *
 * This is where mongoDB Question model is defined
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
 * Generate new question Schema
 */
const questionSchema = new Schema(
  {
    question: {
      type: String,
      required: true,
    },
    questionName: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
    },
    definition: {
      type: String,
      required: true,
    },
    recommendation: {
      type: String,
      default: 'NA',
    },
    inOut: {
      type: String,
      default: '',
    },
    mandatory: {
      type: Boolean,
      required: true,
    },
    references: [String],
    assessmentType: {
      type: String,
      required: true,
      default: 'Self',
    },
    assessmentResult: {
      type: String,
    },
    priority: {
      type: String,
      required: true,
    },
    comments: {
      type: String,
    },
    points: {
      type: Number,
    },
    status: {
      type: String,
      default: 'InProgress',
    },
  },
  { timestamps: true } // this extra parameter in the model, will help mongoose to automatically create 2fields "createdAt" and "updatedAt"
);

/**
 * Export mongoDB model
 * @public
 */
module.exports = mongoose.model('Question', questionSchema);
