import React, { Fragment } from 'react';
import { object } from 'prop-types';
// import classnames from 'classnames';

import { withStyles } from '@material-ui/core/styles';
// import { Paper } from '@material-ui/core';

import { Breadcrumbs, ContentContainer } from 'app-components';

import dashboardStyles from './Dashboard.style';

const propTypes = {
  classes: object.isRequired,
};

const DashboardComponent = () => {
  // const { classes } = props;

  return (
    <Fragment>
      <Breadcrumbs titleBreadcrumb="Dashboard" />
      <ContentContainer>Dashboard contents goes here</ContentContainer>
    </Fragment>
  );
};

DashboardComponent.propTypes = propTypes;

export default withStyles(dashboardStyles)(DashboardComponent);
