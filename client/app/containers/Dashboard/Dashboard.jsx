import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { object } from 'prop-types';

import LayoutMain from '../Layouts/LayoutMain';
import Dashboard from '../../components/templates/Dashboard';

const propTypes = {
  classes: object.isRequired,
};

/* eslint-disable react/prefer-stateless-function */
class DashboardContainer extends PureComponent {
  render() {
    // const { classes } = this.props;

    return (
      <LayoutMain
        pageTitle="Dashboard"
        pageDesc="This is AuditTrackR dashboard"
        pageId="audit-dashboard"
      >
        <Dashboard breadCrumbTitle="Dashboard" />
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
)(DashboardContainer);
