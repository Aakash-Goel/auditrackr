/**
 * question-category/model.js
 * Copyright (c) 2019-present, Aakash Goel
 * MIT Licensed
 *
 * This is where mongoDB QuestionCategory model is defined
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
 * Generate new question-category Schema
 */
const questionCategorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true } // this extra parameter in the model, will help mongoose to automatically create 2 fields "createdAt" and "updatedAt"
);

/**
 * Export mongoDB model
 * @public
 */
module.exports = mongoose.model('QuestionCategory', questionCategorySchema);
