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
const { userRoleResolvers } = require('./src/user-role');
const { projectResolvers } = require('./src/project');
const { projectCategoryResolvers } = require('./src/project-category');
const { questionResolvers } = require('./src/question');
const { questionCategoryResolvers } = require('./src/question-category');
const { questionnaireResolvers } = require('./src/questionnaire');
const { assessmentTypeResolvers } = require('./src/assessment-type');

/**
 * Add or Remove resolvers.
 * @public
 */
const rootResolver = [
  messageResolvers,
  userResolvers,
  userRoleResolvers,
  projectResolvers,
  projectCategoryResolvers,
  questionResolvers,
  questionCategoryResolvers,
  questionnaireResolvers,
  assessmentTypeResolvers,
];

/**
 * Module exports.
 * @public
 */
module.exports = rootResolver;
