import React, { Fragment } from 'react';
import { object, string } from 'prop-types';
import classnames from 'classnames';

import { Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import ContentContainer from '../../../organisms/ContentContainer';
import GridContainer from '../../../atoms/Grid/GridContainer';
import GridItem from '../../../atoms/Grid/GridItem';

import questionnairesAuditStyles from './Questionnaires.style';

const propTypes = {
  classes: object.isRequired,
  breadCrumbTitle: string.isRequired,
};

const QuestionnairesAuditComponent = props => {
  const { classes, breadCrumbTitle } = props;

  return (
    <Fragment>
      <ContentContainer
        breadCrumbTitle={breadCrumbTitle}
        shouldRenderInsidePaper={false}
      >
        <GridContainer
          className={classnames(classes.container)}
          alignItems="center"
          justify="center"
          spacing={16}
        >
          <GridItem xs={4}>
            <Paper className={classes.paperRoot} elevation={1}>
              left side
            </Paper>
          </GridItem>
          <GridItem xs={8}>
            <Paper className={classes.paperRoot} elevation={1}>
              right side
            </Paper>
          </GridItem>
        </GridContainer>
      </ContentContainer>
    </Fragment>
  );
};

QuestionnairesAuditComponent.propTypes = propTypes;

export default withStyles(questionnairesAuditStyles)(
  QuestionnairesAuditComponent
);
