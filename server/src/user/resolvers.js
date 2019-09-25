/**
 * user/resolvers.js
 * Copyright (c) 2019-present, Aakash Goel
 * MIT Licensed
 *
 * This is where all User graphQL resolvers are defined
 *
 */

'use strict';

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

/**
 * Module dependencies.
 */
const User = require('./model');
const authUtils = require('../../utils/authUtils');

const BCRYPT_SALT_ROUNDS = 12; // @TODO: it should come from the config

/**
 * Define graphQL resolvers
 * @public
 */
const resolvers = {
  Query: {
    login: async (parent, args) => {
      try {
        const { email, password } = args;
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
          throw new Error('User does not exist!');
        }
        const isPasswordEqual = await bcrypt.compare(
          password,
          existingUser.password
        );
        if (!isPasswordEqual) {
          throw new Error('Password is incorrect!');
        }
        const token = jwt.sign(
          {
            userId: existingUser.id,
            userEmail: existingUser.email,
            userName: existingUser.name,
            userRole: existingUser.role,
          },
          'somesecretkey',
          {
            expiresIn: '7d',
          }
        );
        return {
          userId: existingUser.id,
          token,
          tokenExpiration: 1,
        };
      } catch (err) {
        throw err;
      }
    },
    getUser: async (parent, args, context) => {
      try {
        const { userId } = args;
        if (context.user.userId === userId) {
          const existingUser = await User.findById(userId);
          if (!existingUser) {
            throw new Error('User does not exist');
          }
          return { ...existingUser._doc, password: null, _id: existingUser.id }; // eslint-disable-line no-underscore-dangle
        }

        throw new Error('Only logged-in user can execute this query');
      } catch (error) {
        throw error;
      }
    },
  },
  Mutation: {
    createUser: async (parent, args) => {
      try {
        const existingUser = await User.findOne({
          email: args.userInput.email,
        });
        if (existingUser) {
          throw new Error('User exists already');
        }

        const hashedPassword = await bcrypt.hash(
          args.userInput.password,
          BCRYPT_SALT_ROUNDS
        );
        const newUser = new User({
          name: args.userInput.name,
          email: args.userInput.email,
          password: hashedPassword,
          role: args.userInput.role || authUtils.typesOfRole.member,
          createdAt: new Date(),
          agreeTerms: args.userInput.agreeTerms || true,
        });
        const result = await newUser.save();
        return { ...result._doc, password: null, _id: result.id }; // eslint-disable-line no-underscore-dangle
      } catch (error) {
        throw error;
      }
    },
    updateUser: async (parent, args) => {
      try {
        const existingUser = await User.findOne({
          email: args.updateUserInput.email,
        });
        if (!existingUser) {
          throw new Error('User does not exist');
        }
        existingUser.name = args.updateUserInput.name;
        const updatedUser = await existingUser.save();

        return { ...updatedUser._doc, password: null, _id: updatedUser.id }; // eslint-disable-line no-underscore-dangle
      } catch (error) {
        throw error;
      }
    },
  },
};

/**
 * Export graphQL resolvers
 * @public
 */
module.exports = resolvers;
