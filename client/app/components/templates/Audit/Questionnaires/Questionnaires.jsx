import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import { object } from 'prop-types';
import classnames from 'classnames';

import { Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import PrimaryLayout from '../../../../layouts/PrimaryLayout';
import ContentContainer from '../../../organisms/ContentContainer';
import GridContainer from '../../../atoms/Grid/GridContainer';
import GridItem from '../../../atoms/Grid/GridItem';

import auditQuestionnairesStyles from './Questionnaires.style';

const propTypes = {
  classes: object.isRequired,
};

/* eslint-disable react/prefer-stateless-function */
class AuditQuestionnaires extends PureComponent {
  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <PrimaryLayout
          pageTitle="Audit Questionnaires"
          pageDesc="This is AuditTrackR audit questionnaires page"
          pageId="audit-questionnaires"
        >
          <ContentContainer
            breadCrumbTitle="Questionnaires"
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
        </PrimaryLayout>
      </Fragment>
    );
  }
}

AuditQuestionnaires.propTypes = propTypes;

const mapStateToProps = () => ({});
const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(auditQuestionnairesStyles)(AuditQuestionnaires));
