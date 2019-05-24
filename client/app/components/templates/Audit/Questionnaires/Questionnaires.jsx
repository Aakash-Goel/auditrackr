import React, { Fragment } from 'react';
import { object, string } from 'prop-types';
import classnames from 'classnames';

import { withStyles } from '@material-ui/core/styles';

import { ContentContainer, GridContainer, GridItem } from 'app-components';

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
          <GridItem xs={4}>left side</GridItem>
          <GridItem xs={8}>right side</GridItem>
        </GridContainer>
      </ContentContainer>
    </Fragment>
  );
};

QuestionnairesAuditComponent.propTypes = propTypes;

export default withStyles(questionnairesAuditStyles)(
  QuestionnairesAuditComponent
);
