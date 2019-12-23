/**
 * server.js
 * Copyright (c) 2019-present, Aakash Goel
 * MIT Licensed
 *
 * This is the main file where server starts up
 *
 */

'use strict';

/**
 * Module dependencies.
 */
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { ApolloServer } = require('apollo-server-express');

const sessionMiddleware = require('./middleware/session');
const logger = require('./logger');
const rootSchema = require('./rootSchema');
const rootResolver = require('./rootResolver');
const mongoose = require('./config/database'); // eslint-disable-line no-unused-vars

/**
 * Module variables.
 * @private
 */
const app = express();
const graphQlPath = '/graphql';
const customHost = process.env.HOST;
const host = customHost || null;
const prettyHost = customHost || 'localhost';
const port = parseInt(process.env.PORT, 10) || 4000;
// const corsWhitelistUrls = ['http://localhost:3000', 'http://localhost:4000'];
const corsOptions = {
  // origin: (origin, callback) => {
  //   if (corsWhitelistUrls.indexOf(origin) !== -1) {
  //     callback(null, true);
  //   } else {
  //     callback(new Error('Not allowed by CORS'));
  //   }
  // },
  origin: 'http://localhost:3000',
  credentials: true,
};

/**
 * Added middleware
 */
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(sessionMiddleware);

/**
 * Create new ApolloServer instance
 */
const server = new ApolloServer({
  typeDefs: rootSchema,
  resolvers: rootResolver,
  context: ({ req, res }) => {
    return {
      res,
      session: req.session,
    };
  },
  playground: {
    settings: {
      // include cookies in the requests from the GraphQL playground
      'request.credentials': 'include',
    },
  },
});

server.applyMiddleware({
  app,
  path: `${graphQlPath}`,
  cors: false, // disables the apollo-server-express cors to allow the cors middleware use
});

/**
 * Start up the server and listening to port
 */
app.listen(port, host, err => {
  if (err) {
    return logger.error(err.message);
  }

  return logger.appStarted(port, prettyHost, graphQlPath);
});
