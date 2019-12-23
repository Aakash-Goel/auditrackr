import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import AuthValidator from '../../../organisms/AuthValidator';
import PrimaryLayout from '../../../../layouts/PrimaryLayout';
import ContentContainer from '../../../organisms/ContentContainer';
import DashboardAuditPage from '../../../organisms/views/DashboardAuditPage';

/* eslint-disable react/prefer-stateless-function */
class AuditDashboard extends PureComponent {
  render() {
    return (
      <>
        <AuthValidator>
          <PrimaryLayout
            pageTitle="Dashboard"
            pageDesc="This is AuditTrackR dashboard"
            pageId="auditDashboard"
          >
            <ContentContainer
              breadCrumbTitle="Dashboard"
              shouldRenderInsidePaper={false}
            >
              <DashboardAuditPage {...this.props} />
            </ContentContainer>
          </PrimaryLayout>
        </AuthValidator>
      </>
    );
  }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuditDashboard);
