/**
 * utils/authUtils.js
 * Copyright (c) 2019-present, Aakash Goel
 * MIT Licensed
 *
 * This is the file where authentication related utilities are define
 *
 */

const { isFunction, isObject, mapValues } = require('lodash');
const pathOr = require('lodash/fp/pathOr');

const { isUserExist } = require('../utils/dbUtils');

const TYPES_OF_ROLES = {
  admin: 'ADMIN',
  member: 'MEMBER',
};

const requiresRole = role => resolver => {
  if (isFunction(resolver)) {
    return (parent, args, context, info) => {
      if (!isUserExist(pathOr(null, 'session.userId', context))) {
        throw new Error('User does not exist');
      }
      if (context.session && (!role || context.session.userRole === role)) {
        return resolver(parent, args, context, info);
      }
      throw new Error('Unauthorized');
    };
  }
  if (isObject(resolver)) {
    return mapValues(resolver, requiresRole(role));
  }
  throw new Error('Resolver has to be Object or Function');
};

module.exports = {
  membersOnly: requiresRole(TYPES_OF_ROLES.member),
  adminsOnly: requiresRole(TYPES_OF_ROLES.admin),
  requiresLogin: requiresRole(null),
  typesOfRole: TYPES_OF_ROLES,
};

exports.requiresLogin = requiresRole(null);
