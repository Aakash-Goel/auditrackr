import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import AuthValidator from '../../../organisms/AuthValidator';
import PrimaryLayout from '../../../../layouts/PrimaryLayout';
import ContentContainer from '../../../organisms/ContentContainer';
import ProjectAuditPage from '../../../organisms/views/ProjectAuditPage';
import {
  makeSelectIsFetching,
  makeSelectData,
  makeSelectError,
} from './selectors';
import { getProject } from './actions';

class AuditProject extends PureComponent {
  static async getInitialProps({ ctx }) {
    const { store, query } = ctx;

    store.dispatch(getProject(query.projectId));

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
        <AuthValidator>
          <PrimaryLayout
            pageTitle="Project Audit"
            pageDesc="This is AuditTrackR project audit page"
            pageId="audit-project"
          >
            <ContentContainer
              breadCrumbTitle="Project"
              shouldRenderInsidePaper={false}
            >
              <ProjectAuditPage {...this.props} />
            </ContentContainer>
          </PrimaryLayout>
        </AuthValidator>
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
)(AuditProject);
