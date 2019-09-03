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
 * Generate new message Schema
 */
const questionSchema = new Schema({
  question: {
    type: String,
    required: true,
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
  notes: {
    type: String,
  },
  points: {
    type: Number,
  },
  lastUpdatedAt: {
    type: Date,
    required: true,
  },
  lastUpdatedBy: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

/**
 * Export mongoDB model
 * @public
 */
module.exports = mongoose.model('Question', questionSchema);
