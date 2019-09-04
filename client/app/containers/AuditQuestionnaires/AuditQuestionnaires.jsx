import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { object } from 'prop-types';

import PrimaryLayout from '../../layouts/PrimaryLayout';
import Questionnaires from '../../components/templates/Audit/Questionnaires';

const propTypes = {
  classes: object.isRequired,
};

/* eslint-disable react/prefer-stateless-function */
class AuditCreateContainer extends PureComponent {
  render() {
    // const { classes } = this.props;

    return (
      <PrimaryLayout
        pageTitle="Audit Questionnaires"
        pageDesc="This is AuditTrackR audit questionnaires page"
        pageId="audit-questionnaires"
      >
        <Questionnaires breadCrumbTitle="Questionnaires" />
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
