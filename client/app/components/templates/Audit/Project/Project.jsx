import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { object } from 'prop-types';
import { createStructuredSelector } from 'reselect';

import withAuth from '../../../../lib/withAuth';
import PrimaryLayout from '../../../../layouts/PrimaryLayout';
import ProjectAuditPage from '../../../organisms/views/ProjectAuditPage';
import { formWrapperSelector } from '../../../organisms/Forms/FormWrapper/selectors';
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
    return (
      <>
        <PrimaryLayout
          pageTitle="Project Audit"
          pageDesc="This is AuditTrackR project audit page"
          pageId="auditProject"
        >
          <ProjectAuditPage {...this.props} />
        </PrimaryLayout>
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
  formWrapperData: formWrapperSelector('qnaForm'),
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withAuth(AuditProject));
