/**
 * utils/globalUtils.js
 * Copyright (c) 2019-present, Aakash Goel
 * MIT Licensed
 *
 * This is the file where all the global utilities are define
 *
 */

exports.dateToString = date => {
  const newDateISOString = new Date(date).toISOString;
  return newDateISOString;
};
