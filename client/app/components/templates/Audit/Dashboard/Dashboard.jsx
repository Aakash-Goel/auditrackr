import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';

import PrimaryLayout from '../../../../layouts/PrimaryLayout';
import ContentContainer from '../../../organisms/ContentContainer';

/* eslint-disable react/prefer-stateless-function */
class Dashboard extends PureComponent {
  render() {
    return (
      <Fragment>
        <PrimaryLayout
          pageTitle="Dashboard"
          pageDesc="This is AuditTrackR dashboard"
          pageId="audit-dashboard"
        >
          <ContentContainer breadCrumbTitle="Dashboard">
            Dashboard contents goes here
          </ContentContainer>
        </PrimaryLayout>
      </Fragment>
    );
  }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
