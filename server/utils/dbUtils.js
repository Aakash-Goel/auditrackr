/**
 * utils/dbUtils.js
 * Copyright (c) 2019-present, Aakash Goel
 * MIT Licensed
 *
 * This is the file where all the database related utilities are define
 *
 */

const User = require('../src/user/model');

exports.isUserExist = async userId => {
  const existingUser = await User.findById(userId);
  if (existingUser) {
    return true;
  }
  return false;
};
