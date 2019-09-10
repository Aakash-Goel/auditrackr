import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';

import PrimaryLayout from '../../../../layouts/PrimaryLayout';
import ContentContainer from '../../../organisms/ContentContainer';
import AuthValidator from '../../../organisms/AuthValidator';

/* eslint-disable react/prefer-stateless-function */
class AuditDashboard extends PureComponent {
  render() {
    return (
      <Fragment>
        <AuthValidator>
          <PrimaryLayout
            pageTitle="Dashboard"
            pageDesc="This is AuditTrackR dashboard"
            pageId="audit-dashboard"
          >
            <ContentContainer breadCrumbTitle="Dashboard">
              Dashboard contents goes here
            </ContentContainer>
          </PrimaryLayout>
        </AuthValidator>
      </Fragment>
    );
  }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuditDashboard);
