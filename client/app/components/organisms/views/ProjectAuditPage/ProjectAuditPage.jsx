import React, { PureComponent } from 'react';
import { object } from 'prop-types';
import classnames from 'classnames';
import _map from 'lodash/map';
import _find from 'lodash/find';
import _isEmpty from 'lodash/isEmpty';

import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import StepContent from '@material-ui/core/StepContent';
import { ListItem } from '@material-ui/core';
import Box from '@material-ui/core/Box';

import GridContainer from '../../../atoms/Grid/GridContainer';
import GridItem from '../../../atoms/Grid/GridItem';
import Title from '../../../atoms/Title';
import Paragraph from '../../../atoms/Paragraph';
import Button from '../../../atoms/Button';
import Icon from '../../../atoms/Icon';
import Chip from '../../../atoms/Chip';
import Paper from '../../../molecules/Paper';
import FormInput from '../../Forms/FormInput';
import FormWrapper from '../../Forms/FormWrapper';
import ContentContainer from '../../ContentContainer';

import {
  checkIsError,
  validationObject,
} from '../../../../utils/formInputUtil';

import projectAuditPageStyles from './ProjectAuditPage.style';

import addIcon from '../../../../static/icons/add-plus-button.svg?sprite'; // eslint-disable-line import/no-unresolved

const propTypes = {
  classes: object.isRequired,
  formWrapperData: object,
  data: object,
};

const defaultProps = {
  data: null,
  formWrapperData: {},
};

function getSteps(dataObj) {
  const keys = _map(dataObj, 'category');
  return keys;
}

/* eslint-disable react/no-array-index-key, no-underscore-dangle */
class ProjectAuditPage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCategoryStep: 0,
      activeQuestionId: null,
    };
    this.validationObject = {};
    this.handleStep = this.handleStep.bind(this);
    this.handleQuestionStep = this.handleQuestionStep.bind(this);
    this.submitQnAFormHandler = this.submitQnAFormHandler.bind(this);
  }

  componentDidMount() {
    const { data } = this.props;
    const { activeCategoryStep } = this.state;
    const currentQuestionnaire = data.projectQuestionnaires[activeCategoryStep];
    this.setState({
      activeQuestionId: currentQuestionnaire.questions[0]._id,
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.formWrapperData) {
      this.validationObject = validationObject(nextProps.formWrapperData);
    }
  }

  submitQnAFormHandler = errorObj => {
    // check if there is no error
    if (_isEmpty(errorObj)) {
      // const { formWrapperData } = this.props;
      // make an api call here
    }
  };

  handleStep(stepIndex) {
    const { data } = this.props;
    const currentCategoryObj = data.projectQuestionnaires[stepIndex];
    const firstQuestionId = currentCategoryObj.questions[0]._id; // eslint-disable-line prefer-destructuring, no-underscore-dangle
    this.setState({
      activeCategoryStep: stepIndex,
      activeQuestionId: firstQuestionId,
    });
  }

  handleQuestionStep(questionId) {
    this.setState({
      activeQuestionId: questionId,
    });
  }

  renderStepsValues(questionnaireList, index) {
    const { classes } = this.props;
    const { activeQuestionId } = this.state;
    const questionnaireObj = questionnaireList[index];

    const item = questionnaireObj.questions.map((obj, i) => {
      return (
        <div key={i}>
          <ListItem
            classes={{
              selected: classes.selectedContentItem,
            }}
            selected={obj._id === activeQuestionId}
            className={classes.stepsContentItem}
            disableGutters
          >
            <Button
              simple
              // fullWidth
              size="md"
              color="transparent"
              textTransform="cap"
              weight="medium"
              disableRipple
              onClick={() => this.handleQuestionStep(obj._id)} // eslint-disable-line no-underscore-dangle
              className={classnames(classes.stepsContentButton)}
            >
              {obj.questionName}
            </Button>
          </ListItem>
        </div>
      );
    });

    return item;
  }

  renderQuestion(activeCatStep, activeQuesId) {
    const { classes, data } = this.props;
    let currentQuestionObj;
    const currentQuestionnaire = data.projectQuestionnaires[activeCatStep];
    if (activeQuesId) {
      currentQuestionObj = _find(currentQuestionnaire.questions, {
        _id: activeQuesId,
      });
    } else {
      currentQuestionObj = currentQuestionnaire.questions[0]; // eslint-disable-line prefer-destructuring
    }

    return (
      <>
        <GridContainer>
          <GridItem className={classnames(classes.categoryWrapper)}>
            <Title level={3} variant="h4" textTransform="upc">
              {currentQuestionnaire.category}
            </Title>
          </GridItem>
          <GridItem xs={8} className={classnames(classes.qnaWrapper)}>
            <Paragraph>{currentQuestionObj.question}</Paragraph>
            <Paragraph color="grey">{currentQuestionObj.definition}</Paragraph>
            <Box mb={4}>
              <FormWrapper
                id="qnaForm"
                identifier="qnaForm"
                onSubmit={this.submitQnAFormHandler}
                formWrapperData={this.props.formWrapperData}
                className={classnames(classes.formWrapper)}
                noValidate
                autoComplete="off"
              >
                <FormInput
                  validationRule="required"
                  identifier="qnaForm"
                  labelText="Enter your answer"
                  formControlProps={{
                    required: true,
                    fullWidth: true,
                    className: classnames(classes.formInputWrapper),
                  }}
                  inputProps={{
                    id: 'answer',
                    name: 'answer',
                    'aria-label': 'Enter your answer',
                    multiline: true,
                  }}
                  {...{
                    answerError: this.validationObject.answerError,
                  }}
                  error={checkIsError(this.props.formWrapperData, 'answer')}
                />
                <br />
                <div className={classnames(classes.qnaSaveButtonWrapper)}>
                  <Button type="submit" size="md">
                    Save answer
                  </Button>
                </div>
              </FormWrapper>
            </Box>
            <div>
              <Paragraph>References:</Paragraph>
              <Paragraph color="grey">
                Ahh! It seems the question doesn&#39;t have any reference
                attached. Do you want to attach one or some?
              </Paragraph>
              <Button
                simple
                size="sm"
                startIcon={<Icon type={addIcon} />}
                className={classnames(classes.btnAddReference)}
              >
                Add Reference
              </Button>
            </div>
          </GridItem>
          <GridItem xs={4} className={classnames(classes.qnaOptionWrapper)}>
            <div className={classnames(classes.optionWrapper)}>
              <Title level={4} variant="h5" textTransform="upc">
                Recommendation
              </Title>
              <Paragraph color="grey">
                {currentQuestionObj.recommendation}
              </Paragraph>
            </div>
            <div className={classnames(classes.optionWrapper)}>
              <Title level={4} variant="h5" textTransform="upc">
                Mandatory
              </Title>
              <Paragraph color="grey">
                {currentQuestionObj.mandatory ? 'Yes' : 'No'}
              </Paragraph>
            </div>
            <div className={classnames(classes.optionWrapper)}>
              <Title level={4} variant="h5" textTransform="upc">
                Assessment Type
              </Title>
              <Paragraph color="grey">
                {currentQuestionObj.assessmentType}
              </Paragraph>
            </div>
            <div className={classnames(classes.optionWrapper)}>
              <Title level={4} variant="h5" textTransform="upc">
                Priority
              </Title>
              <Paragraph color="grey">{currentQuestionObj.priority}</Paragraph>
            </div>
          </GridItem>
        </GridContainer>
      </>
    );
  }

  render() {
    const { classes, data } = this.props;
    const { activeCategoryStep, activeQuestionId } = this.state;
    const hasAuditors = data.projectAuditors.length === 0;
    const hasReviewers = data.projectReviewers.length === 0;

    const steps = getSteps(data.projectQuestionnaires);

    return (
      <ContentContainer
        shouldRenderBreadcrumb={false}
        shouldRenderInsidePaper={false}
        containerClass={classnames(classes.templateWrapper)}
      >
        <GridContainer spacing={3}>
          <GridItem>
            <Box display="flex">
              <Box display="flex" flexGrow={1} alignItems="baseline">
                <Title level={1} variant="h2" textTransform="upc">
                  {data && data.projectAuditName}
                </Title>
                <Box ml={2} alignSelf="center">
                  <Chip label={data && data.projectStatus} />
                </Box>
              </Box>
              <Box>
                <Button
                  outlined
                  size="sm"
                  className={classnames(classes.btnAdd)}
                >
                  Add Admins
                </Button>
                <Button
                  outlined
                  size="sm"
                  className={classnames(classes.btnAdd)}
                >
                  Add Auditors
                </Button>
                <Button
                  outlined
                  size="sm"
                  className={classnames(classes.btnAdd)}
                >
                  Add Reviewers
                </Button>
              </Box>
            </Box>
            <Paragraph>
              <Box component="span" color="grey.500">
                auditor(s):{' '}
              </Box>
              <span>{hasAuditors ? 'none' : data.projectAuditors}</span>
            </Paragraph>
            <Paragraph>
              <Box component="span" color="grey.500">
                reviewer(s):{' '}
              </Box>
              <span>
                {hasReviewers ? 'None' : data.projectReviewers.join(', ')}
              </span>
            </Paragraph>
          </GridItem>
        </GridContainer>
        <GridContainer className={classnames(classes.container)} spacing={3}>
          <GridItem xs={4}>
            <Paper className={classes.paperRoot} borderColor="error">
              <div className={classnames(classes.stepsWrapper)}>
                <Stepper
                  nonLinear
                  orientation="vertical"
                  activeStep={activeCategoryStep}
                  classes={{
                    root: `${classes.stepperRoot}`,
                  }}
                >
                  {steps.map((label, index) => (
                    <Step key={label}>
                      <StepButton
                        onClick={() => this.handleStep(index)}
                        classes={{
                          root: `${classes.stepButtonRoot}`,
                        }}
                      >
                        {label}
                      </StepButton>
                      <StepContent>
                        {this.renderStepsValues(
                          data.projectQuestionnaires,
                          index
                        )}
                      </StepContent>
                    </Step>
                  ))}
                </Stepper>
              </div>
            </Paper>
          </GridItem>
          <GridItem xs={8}>
            <Paper className={classes.paperRoot} borderColor="success">
              {this.renderQuestion(activeCategoryStep, activeQuestionId)}
            </Paper>
          </GridItem>
        </GridContainer>
      </ContentContainer>
    );
  }
}

ProjectAuditPage.propTypes = propTypes;
ProjectAuditPage.defaultProps = defaultProps;

export default withStyles(projectAuditPageStyles)(ProjectAuditPage);
