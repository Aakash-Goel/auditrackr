import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { object } from 'prop-types';

import LayoutMain from '../Layouts/LayoutMain';
import Questionnaires from '../../components/templates/Audit/Questionnaires';

const propTypes = {
  classes: object.isRequired,
};

/* eslint-disable react/prefer-stateless-function */
class AuditCreateContainer extends PureComponent {
  render() {
    // const { classes } = this.props;

    return (
      <LayoutMain
        pageTitle="Audit Questionnaires"
        pageDesc="This is AuditTrackR audit questionnaires page"
        pageId="audit-questionnaires"
      >
        <Questionnaires breadCrumbTitle="Questionnaires" />
      </LayoutMain>
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
