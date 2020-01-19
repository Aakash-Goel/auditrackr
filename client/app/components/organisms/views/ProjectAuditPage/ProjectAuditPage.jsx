import React, { PureComponent } from 'react';
import { object } from 'prop-types';
import classnames from 'classnames';
import _map from 'lodash/map';
import _find from 'lodash/find';

import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import StepContent from '@material-ui/core/StepContent';
import { ListItem } from '@material-ui/core';

import GridContainer from '../../../atoms/Grid/GridContainer';
import GridItem from '../../../atoms/Grid/GridItem';
import Button from '../../../atoms/Button';
import Paper from '../../../molecules/Paper';

import projectAuditPageStyles from './ProjectAuditPage.style';

const propTypes = {
  classes: object.isRequired,
  data: object,
};

const defaultProps = {
  data: null,
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
    this.handleStep = this.handleStep.bind(this);
    this.handleQuestionStep = this.handleQuestionStep.bind(this);
  }

  componentDidMount() {
    const { data } = this.props;
    const { activeCategoryStep } = this.state;
    const currentQuestionnaire = data.projectQuestionnaires[activeCategoryStep];
    this.setState({
      activeQuestionId: currentQuestionnaire.questions[0]._id,
    });
  }

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
              size="sm"
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
    const { data } = this.props;
    let currentQuestionObj;
    const currentQuestionnaire = data.projectQuestionnaires[activeCatStep];
    if (activeQuesId) {
      currentQuestionObj = _find(currentQuestionnaire.questions, {
        _id: activeQuesId,
      });
    } else {
      currentQuestionObj = currentQuestionnaire.questions[0]; // eslint-disable-line prefer-destructuring
    }

    return <div>{currentQuestionObj.question}</div>;
  }

  render() {
    const { classes, data } = this.props;
    const { activeCategoryStep, activeQuestionId } = this.state;

    const steps = getSteps(data.projectQuestionnaires);

    return (
      <>
        <GridContainer className={classnames(classes.container)}>
          <GridItem xs={4}>
            <Paper className={classes.paperRoot} borderColor="error">
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
            </Paper>
          </GridItem>
          <GridItem xs={8}>
            <Paper className={classes.paperRoot} borderColor="success">
              {this.renderQuestion(activeCategoryStep, activeQuestionId)}
            </Paper>
          </GridItem>
        </GridContainer>
      </>
    );
  }
}

ProjectAuditPage.propTypes = propTypes;
ProjectAuditPage.defaultProps = defaultProps;

export default withStyles(projectAuditPageStyles)(ProjectAuditPage);
