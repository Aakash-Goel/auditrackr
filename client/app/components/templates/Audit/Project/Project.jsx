import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { object } from 'prop-types';
import classnames from 'classnames';

import { Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import PrimaryLayout from '../../../../layouts/PrimaryLayout';
import ContentContainer from '../../../organisms/ContentContainer';
import GridContainer from '../../../atoms/Grid/GridContainer';
import GridItem from '../../../atoms/Grid/GridItem';

import auditProjectStyles from './Project.style';

const propTypes = {
  classes: object.isRequired,
};

/* eslint-disable react/prefer-stateless-function */
class AuditProject extends PureComponent {
  render() {
    const { classes } = this.props;

    return (
      <>
        <PrimaryLayout
          pageTitle="Audit Project"
          pageDesc="This is AuditTrackR audit project page"
          pageId="audit-project"
        >
          <ContentContainer
            breadCrumbTitle="Project"
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
      </>
    );
  }
}

AuditProject.propTypes = propTypes;

const mapStateToProps = () => ({});
const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(auditProjectStyles)(AuditProject));
