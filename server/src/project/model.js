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

/**
 * Define mongoDB schema
 * @private
 */
const { Schema } = mongoose;

/**
 * Generate new message Schema
 */
const projectSchema = new Schema({
  auditName: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  code: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  lastUpdatedAt: {
    type: Date,
    required: true,
  },
  lastUpdatedBy: {
    type: String,
    required: true,
  },
  auditors: [String],
  collaborators: [String],
  questionnaire: {
    type: Schema.Types.ObjectId,
    ref: 'Questionnaire',
  },
});

/**
 * Export mongoDB model
 * @public
 */
module.exports = mongoose.model('Project', projectSchema);
