import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { object } from 'prop-types';

import PrimaryLayout from '../../layouts/PrimaryLayout';
import Dashboard from '../../components/templates/Dashboard';

const propTypes = {
  classes: object.isRequired,
};

/* eslint-disable react/prefer-stateless-function */
class DashboardContainer extends PureComponent {
  render() {
    // const { classes } = this.props;

    return (
      <PrimaryLayout
        pageTitle="Dashboard"
        pageDesc="This is AuditTrackR dashboard"
        pageId="audit-dashboard"
      >
        <Dashboard breadCrumbTitle="Dashboard" />
      </PrimaryLayout>
    );
  }
}

DashboardContainer.propTypes = propTypes;

const mapStateToProps = () => ({});
const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardContainer);
