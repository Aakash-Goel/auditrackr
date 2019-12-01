import React, { PureComponent } from 'react';
import { object } from 'prop-types';
import classnames from 'classnames';
import _groupBy from 'lodash/groupBy';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
// import StepButton from '@material-ui/core/StepButton';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';

import GridContainer from '../../../atoms/Grid/GridContainer';
import GridItem from '../../../atoms/Grid/GridItem';

import projectAuditPageStyles from './ProjectAuditPage.style';

const propTypes = {
  classes: object.isRequired,
  data: object,
};

const defaultProps = {
  data: null,
};

function getSteps(quesGroupBy) {
  const keys = Object.keys(quesGroupBy);
  return keys;
}

function getStepsValues(quesGroupBy) {
  const values = Object.values(quesGroupBy);
  return values;
}

/* eslint-disable react/prefer-stateless-function, react/no-array-index-key */
class ProjectAuditPage extends PureComponent {
  renderStepsValues(stepsValues, index) {
    const stepObj = stepsValues[index];

    const sdf = stepObj.map((obj, ind) => {
      return <p key={ind}>{obj.shortName}</p>;
    });

    return sdf;
  }

  render() {
    const { classes, data } = this.props;
    console.log('1212===>>>data ', data);
    const quesGroupBy = _groupBy(data.questionnaire.questions, 'category');
    console.log('1212===>>>quesGroupBy ', quesGroupBy);
    const steps = getSteps(quesGroupBy);
    const stepsValues = getStepsValues(quesGroupBy);

    return (
      <>
        <GridContainer
          className={classnames(classes.container)}
          alignItems="center"
          justify="center"
          spacing={16}
        >
          <GridItem xs={4}>
            <Paper className={classes.paperRoot} elevation={1}>
              <Stepper nonLinear orientation="vertical" activeStep={1}>
                {steps.map((label, index) => (
                  <Step key={label}>
                    {/* <StepButton onClick={handleStep(index)} completed={completed[index]}>
                      {label}
                    </StepButton> */}
                    <StepLabel>{label}</StepLabel>
                    <StepContent>
                      {this.renderStepsValues(stepsValues, index)}
                    </StepContent>
                  </Step>
                ))}
              </Stepper>
            </Paper>
          </GridItem>
          <GridItem xs={8}>
            <Paper className={classes.paperRoot} elevation={1}>
              right side
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
