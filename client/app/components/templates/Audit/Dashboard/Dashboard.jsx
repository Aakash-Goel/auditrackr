import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import withAuth from '../../../../lib/withAuth';
import PrimaryLayout from '../../../../layouts/PrimaryLayout';
import ContentContainer from '../../../organisms/ContentContainer';
import DashboardAuditPage from '../../../organisms/views/DashboardAuditPage';

import { allNextCookies } from '../../../../utils/cookieUtil';
import { fetchProfileData } from './actions';
import {
  makeSelectIsFetching,
  makeSelectData,
  makeSelectError,
} from './selectors';

class AuditDashboard extends PureComponent {
  static async getInitialProps({ ctx }) {
    const allCookies = allNextCookies(ctx);
    const { store } = ctx;

    store.dispatch(fetchProfileData({ userId: allCookies.c_user, allCookies }));

    // Wait for your dependencies to be resolved.
    await new Promise(resolve => {
      const unsubscribe = store.subscribe(() => {
        const state = store.getState();
        if (!state.isFetching) {
          unsubscribe();
          resolve();
        }
      });
    });
  }

  render() {
    return (
      <>
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
      </>
    );
  }
}

export const mapStateToProps = createStructuredSelector({
  isFetching: makeSelectIsFetching(),
  data: makeSelectData(),
  error: makeSelectError(),
});
const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withAuth(AuditDashboard));
