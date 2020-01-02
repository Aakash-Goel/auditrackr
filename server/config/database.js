/**
 * config/database.js
 * Copyright (c) 2019-present, Aakash Goel
 * MIT Licensed
 *
 * This is the file where mongoDB connection happens
 *
 */

// @TODO: refactor to read values from the config.

const mongoose = require('mongoose'); // #1 Import mongoose
const logger = require('../logger'); // #2 Import logger library

// #3 Create a query string to connect to MongoDB server
const DB_URI_LOCAL = 'mongodb://localhost:27017/auditrackr';

/* Uncomment below if you have a mongoDB database setup on cloud atlas */
// const DB_URI_CLOUD = `mongodb+srv://${process.env.MONGO_USER}:${
//   process.env.MONGO_PASSWORD
// }@cluster-cxxw1.mongodb.net/${process.env.MONGO_DB}?retryWrites=true`;

// #4 Connect to MongoDB
mongoose.connect(DB_URI_LOCAL, { useNewUrlParser: true });

// #5 Add basic event listeners on the mongoose.connection object
mongoose.connection.once('open', () =>
  logger.success('Connected to a MongoDB instance')
);
mongoose.connection.on('error', error => logger.error(error));

// #6 Export mongoose. You’ll use it in server/server.js file
module.exports = mongoose;
