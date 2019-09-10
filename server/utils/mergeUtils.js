const Project = require('../src/project/model');
const User = require('../src/user/model');

/* eslint-disable no-use-before-define */

const getProjectsByIds = async projectIds => {
  try {
    const projects = await Project.find({ _id: { $in: projectIds } });
    return projects.map(project => {
      return {
        ...project._doc, // eslint-disable-line no-underscore-dangle
        _id: project.id,
        createdBy: getUserById.bind(this, project.createdBy),
      };
    });
  } catch (error) {
    throw error;
  }
};

const getProjectById = async projectId => {
  try {
    const project = await Project.findById(projectId);
    return {
      ...project._doc, // eslint-disable-line no-underscore-dangle
      _id: project.id,
      createdBy: getUserById.bind(this, project.createdBy),
    };
  } catch (error) {
    throw error;
  }
};

const getUserById = async userId => {
  try {
    const user = await User.findById(userId);
    return {
      ...user._doc, // eslint-disable-line no-underscore-dangle
      _id: user.id,
      projects: getProjectsByIds.bind(this, user._doc.projects), // eslint-disable-line no-underscore-dangle
    };
  } catch (error) {
    throw error;
  }
};

const transformQuestionnaire = questionnaireData => {
  return {
    ...questionnaireData._doc, // eslint-disable-line no-underscore-dangle
    _id: questionnaireData.id,
    user: getUserById.bind(this, questionnaireData._doc.user), // eslint-disable-line no-underscore-dangle
    project: getProjectById.bind(
      this,
      questionnaireData._doc.project // eslint-disable-line no-underscore-dangle
    ),
    createdAt: questionnaireData.createdAt,
    updatedAt: questionnaireData.updatedAt,
  };
};

const transformProject = project => {
  return {
    ...project._doc, // eslint-disable-line no-underscore-dangle
    _id: project.id,
    createdBy: getUserById.bind(this, project.createdBy),
  };
};

const transformProjectCategory = projectCategory => {
  return {
    ...projectCategory._doc, // eslint-disable-line no-underscore-dangle
    _id: projectCategory.id,
    createdBy: getUserById.bind(this, projectCategory.createdBy),
  };
};

// exports.getUserById = getUserById;
// exports.getProjectById = getProjectById;
// exports.getProjectsByIds = getProjectsByIds;

exports.transformQuestionnaire = transformQuestionnaire;
exports.transformProject = transformProject;
exports.transformProjectCategory = transformProjectCategory;
