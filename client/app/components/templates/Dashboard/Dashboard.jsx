import React from 'react';
import { object } from 'prop-types';
import classnames from 'classnames';

import { withStyles } from '@material-ui/core/styles';

import dashboardStyles from './Dashboard.style';

const propTypes = {
  classes: object.isRequired,
};

const DashboardComponent = props => {
  const { classes } = props;

  return (
    <div className={classnames(classes.content)}>
      Dashboard contents goes here
    </div>
  );
};

DashboardComponent.propTypes = propTypes;

export default withStyles(dashboardStyles)(DashboardComponent);
