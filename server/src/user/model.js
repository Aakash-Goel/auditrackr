/**
 * user/model.js
 * Copyright (c) 2019-present, Aakash Goel
 * MIT Licensed
 *
 * This is where mongoDB User model is defined
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
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
  },
  projects: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Project',
    },
  ],
  role: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
  lastLoginAt: {
    type: Date,
  },
  agreeTerms: {
    type: Boolean,
    required: true,
  },
});

/**
 * Export mongoDB model
 * @public
 */
module.exports = mongoose.model('User', userSchema);
