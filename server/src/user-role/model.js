/**
 * user-role/model.js
 * Copyright (c) 2019-present, Aakash Goel
 * MIT Licensed
 *
 * This is where mongoDB UserRole model is defined
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
 * Generate new user-role Schema
 */
const userRoleSchema = new Schema({
  name: {
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
});

/**
 * Export mongoDB model
 * @public
 */
module.exports = mongoose.model('UserRole', userRoleSchema);
