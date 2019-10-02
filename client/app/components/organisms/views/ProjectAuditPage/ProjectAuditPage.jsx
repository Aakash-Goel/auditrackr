import React, { PureComponent } from 'react';
import { object } from 'prop-types';
import classnames from 'classnames';

import { withStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

import GridContainer from '../../../atoms/Grid/GridContainer';
import GridItem from '../../../atoms/Grid/GridItem';

import projectAuditPageStyles from './ProjectAuditPage.style';

const propTypes = {
  classes: object.isRequired,
};

// const defaultProps = {
//   data: null,
// };

/* eslint-disable react/prefer-stateless-function */
class ProjectAuditPage extends PureComponent {
  render() {
    const { classes } = this.props;

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
              left side
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
// ProjectAuditPage.defaultProps = defaultProps;

export default withStyles(projectAuditPageStyles)(ProjectAuditPage);
