import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { object } from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import LayoutMain from 'app-containers/Layouts/LayoutMain';
import { Dashboard } from 'app-components';

import dashboardStyles from './Dashboard.style';

const propTypes = {
  classes: object.isRequired,
};

/* eslint-disable react/prefer-stateless-function */
class DashboardContainer extends PureComponent {
  render() {
    const { classes } = this.props;

    return (
      <LayoutMain
        pageTitle="Dashboard"
        pageDesc="This is AuditTrackR dashboard"
        pageId="audit-dashboard"
      >
        <div className={classes.contentWrapperBefore} />
        <div className={classes.contentWrapper}>
          <Dashboard />
        </div>
      </LayoutMain>
    );
  }
}

DashboardContainer.propTypes = propTypes;

const mapStateToProps = () => ({});
const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(dashboardStyles)(DashboardContainer));
