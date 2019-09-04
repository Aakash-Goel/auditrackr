import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { object } from 'prop-types';

import PrimaryLayout from '../../layouts/PrimaryLayout';
import Create from '../../components/templates/Audit/Create';

const propTypes = {
  classes: object.isRequired,
};

/* eslint-disable react/prefer-stateless-function */
class AuditCreateContainer extends PureComponent {
  render() {
    // const { classes } = this.props;

    return (
      <PrimaryLayout
        pageTitle="Create Audit"
        pageDesc="This is AuditTrackR audit create page"
        pageId="audit-create"
      >
        <Create breadCrumbTitle="Start New Audit" />
      </PrimaryLayout>
    );
  }
}

AuditCreateContainer.propTypes = propTypes;

const mapStateToProps = () => ({});
const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuditCreateContainer);
