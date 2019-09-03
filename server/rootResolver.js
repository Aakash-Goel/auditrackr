/**
 * rootResolver.js
 * Copyright (c) 2019-present, Aakash Goel
 * MIT Licensed
 *
 * This is the main file where all the resolvers will be imported and combined into one resolver i.e. rootResolver which will then export
 *
 * Create new resolver inside 'src' folder, import it here and add it to the rootResolver object.
 *
 * For ex:
 *  1. create new folder inside 'src' i.e. 'featureXyz'
 *  2. create new file i.e. 'resolvers.js' inside 'src > featureXyz'. Create resolvers related to this feature only and export it.
 *  3. create new file i.e. 'index.js' inside 'src > featureXyz'. Import and Export `featureXyzResolvers` in this index file.
 *  4. Import here in 'rootResolver.js' i.e. const { featureXyzResolvers } = require('./src/featureXyz')
 *  5. Add it to the `rootResolver` i.e. const rootResolver = [<otherResolvers>, featureXyzResolvers]
 *
 */

'use strict';

/**
 * Module resolvers.
 */
const { messageResolvers } = require('./src/message');
const { userResolvers } = require('./src/user');
const { projectResolvers } = require('./src/project');
const { questionResolvers } = require('./src/question');
const { questionnaireResolvers } = require('./src/questionnaire');

// *** this is a test resolver. Do not create any resolver here. Delete below resolver
const r1 = {
  Query: {
    field1: () => {},
  },
};

// *** this is a test resolver. Do not create any resolver here. Delete below resolver
const r2 = {
  Query: {
    field2: () => {},
  },
};

/**
 * Add or Remove resolvers.
 * @public
 */
const rootResolver = [
  messageResolvers,
  userResolvers,
  projectResolvers,
  questionResolvers,
  questionnaireResolvers,
  r1, // *** test resolver delete this
  r2, // *** test resolver delete this
];
// console.log('>>>rootResolver ', rootResolver);

/**
 * Module exports.
 * @public
 */
module.exports = rootResolver;
