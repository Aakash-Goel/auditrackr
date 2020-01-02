/**
 * utils/mergeUtils.js
 * Copyright (c) 2019-present, Aakash Goel
 * MIT Licensed
 *
 * This is the file where data transformation of related models occurs
 *
 */

/* eslint-disable no-use-before-define */

const Project = require('../src/project/model');
const User = require('../src/user/model');
const Question = require('../src/question/model');
const Questionnaire = require('../src/questionnaire/model');

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

const getAllQuestions = async () => {
  try {
    const questionList = await Question.find({});
    return questionList;
  } catch (error) {
    throw error;
  }
};

const getQuestionnaireByProjectId = async projectId => {
  try {
    const existingQuestionnaire = await Questionnaire.findOne({
      project: {
        _id: projectId,
      },
    });
    return {
      ...existingQuestionnaire._doc, // eslint-disable-line no-underscore-dangle
      _id: existingQuestionnaire.id,
      questions: getAllQuestions.bind(this),
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
    questions: getAllQuestions.bind(this),
    createdAt: questionnaireData.createdAt,
    updatedAt: questionnaireData.updatedAt,
  };
};

const transformProject = project => {
  return {
    ...project._doc, // eslint-disable-line no-underscore-dangle
    _id: project.id,
    createdBy: getUserById.bind(this, project.createdBy),
    questionnaire: getQuestionnaireByProjectId.bind(this, project.id),
  };
};

const transformProjectCategory = projectCategory => {
  return {
    ...projectCategory._doc, // eslint-disable-line no-underscore-dangle
    _id: projectCategory.id,
    createdBy: getUserById.bind(this, projectCategory.createdBy),
  };
};

const transformUserRole = userRole => {
  return {
    ...userRole._doc, // eslint-disable-line no-underscore-dangle
    _id: userRole.id,
    createdBy: getUserById.bind(this, userRole.createdBy),
  };
};

const transformQuestionCategory = questionCategory => {
  return {
    ...questionCategory._doc, // eslint-disable-line no-underscore-dangle
    _id: questionCategory.id,
    createdBy: getUserById.bind(this, questionCategory.createdBy),
  };
};

const transformAssessmentType = assessmentType => {
  return {
    ...assessmentType._doc, // eslint-disable-line no-underscore-dangle
    _id: assessmentType.id,
    createdBy: getUserById.bind(this, assessmentType.createdBy),
  };
};

exports.transformQuestionnaire = transformQuestionnaire;
exports.transformQuestionCategory = transformQuestionCategory;
exports.transformProject = transformProject;
exports.transformProjectCategory = transformProjectCategory;
exports.transformUserRole = transformUserRole;
exports.transformAssessmentType = transformAssessmentType;
