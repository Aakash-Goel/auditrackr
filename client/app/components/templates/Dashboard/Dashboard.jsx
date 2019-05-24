import React, { Fragment } from 'react';
import { object, string } from 'prop-types';
// import classnames from 'classnames';

import { withStyles } from '@material-ui/core/styles';

import { ContentContainer } from 'app-components';

import dashboardStyles from './Dashboard.style';

const propTypes = {
  classes: object.isRequired,
  breadCrumbTitle: string.isRequired,
};

const DashboardComponent = props => {
  const { breadCrumbTitle } = props;

  return (
    <Fragment>
      <ContentContainer breadCrumbTitle={breadCrumbTitle}>
        Dashboard contents goes here
      </ContentContainer>
    </Fragment>
  );
};

DashboardComponent.propTypes = propTypes;

export default withStyles(dashboardStyles)(DashboardComponent);
