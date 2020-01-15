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
    },
    inOut: {
      type: String,
    },
    mandatory: {
      type: Boolean,
      required: true,
    },
    references: [String],
    assessmentType: {
      type: String,
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
    },
    category: {
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
module.exports = mongoose.model('Question', questionSchema);
