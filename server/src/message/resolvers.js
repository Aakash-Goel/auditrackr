/**
 * resolvers.js
 * Copyright (c) 2019-present, Aakash Goel
 * MIT Licensed
 *
 * This is where all Message graphQL resolvers are defined
 *
 */

'use strict';

/**
 * Module dependencies.
 */
const Message = require('./model');
const authUtils = require('../../utils/authUtils');

/**
 * Define graphQL resolvers
 * @public
 */
const resolvers = authUtils.requiresLogin({
  Query: {
    messages: async (parent, args, context) => {
      try {
        if (!context.isAuth) {
          throw new Error('User is not authorized');
        }
        const mszs = await Message.find();
        return mszs.map(msz => {
          return { ...msz._doc }; // eslint-disable-line no-underscore-dangle
        });
      } catch (err) {
        throw err;
      }
    },
  },
  Mutation: {
    createMessage: async (parent, args) => {
      try {
        const msz = new Message({
          title: args.messageInput.title,
        });
        const result = await msz.save();
        return { ...result._doc }; // eslint-disable-line no-underscore-dangle
      } catch (error) {
        throw error;
      }
    },
  },
});

/**
 * Export graphQL resolvers
 * @public
 */
module.exports = resolvers;
