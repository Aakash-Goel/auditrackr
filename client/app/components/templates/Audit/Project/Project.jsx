import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { object } from 'prop-types';
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

const propTypes = {
  data: object,
};

const defaultProps = {
  data: null,
};

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
    const { data } = this.props;
    return (
      <>
        <AuthValidator>
          <PrimaryLayout
            pageTitle="Project Audit"
            pageDesc="This is AuditTrackR project audit page"
            pageId="auditProject"
          >
            <ContentContainer
              breadCrumbTitle={data && data.auditName}
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

AuditProject.propTypes = propTypes;
AuditProject.defaultProps = defaultProps;

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
