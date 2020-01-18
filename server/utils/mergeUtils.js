/**
 * utils/mergeUtils.js
 * Copyright (c) 2019-present, Aakash Goel
 * MIT Licensed
 *
 * This is the file where data transformation of related models occurs
 *
 */

/* eslint-disable no-use-before-define, no-underscore-dangle */

const Project = require('../src/project/model');
const User = require('../src/user/model');

const getProjectsByIds = async projectIds => {
  try {
    const projects = await Project.find({ _id: { $in: projectIds } });
    return projects.map(project => {
      return transformProject(project);
    });
  } catch (error) {
    throw error;
  }
};

const getUserById = async userId => {
  try {
    const user = await User.findById(userId);
    return transformUser(user);
  } catch (error) {
    throw error;
  }
};

const transformUser = user => {
  return {
    ...user._doc,
    _id: user.id,
    password: null,
    projects: getProjectsByIds.bind(this, user._doc.projects),
  };
};

const transformProject = project => {
  return {
    ...project._doc,
    _id: project.id,
    createdBy: getUserById.bind(this, project.createdBy),
  };
};

const transformProjectDomain = projectDomain => {
  return {
    ...projectDomain._doc,
    _id: projectDomain.id,
    createdBy: getUserById.bind(this, projectDomain.createdBy),
  };
};

const transformUserRole = userRole => {
  return {
    ...userRole._doc,
    _id: userRole.id,
    createdBy: getUserById.bind(this, userRole.createdBy),
  };
};

const transformAssessmentType = assessmentType => {
  return {
    ...assessmentType._doc,
    _id: assessmentType.id,
    createdBy: getUserById.bind(this, assessmentType.createdBy),
  };
};

exports.transformUser = transformUser;
exports.transformProject = transformProject;
exports.transformProjectDomain = transformProjectDomain;
exports.transformUserRole = transformUserRole;
exports.transformAssessmentType = transformAssessmentType;
