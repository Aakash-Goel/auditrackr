import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
// import { object } from 'prop-types';
import { createStructuredSelector } from 'reselect';

import withAuth from '../../../../lib/withAuth';
import PrimaryLayout from '../../../../layouts/PrimaryLayout';
import ContentContainer from '../../../organisms/ContentContainer';
import CreateAuditPage from '../../../organisms/views/CreateAuditPage';
import { formWrapperSelector } from '../../../organisms/Forms/FormWrapper/selectors';
import {
  makeSelectIsLoading,
  makeSelectData,
  makeSelectError,
  makeSelectIsProjDomainFetching,
  makeSelectProjDomainList,
  makeSelectErrorProjDomain,
} from './selectors';
import {
  submitCreateAuditForm,
  clearCreateAuditData,
  getProjectDomains,
} from './actions';

// const propTypes = {
//   classes: object.isRequired,
// };

/* eslint-disable react/prefer-stateless-function */
class AuditCreate extends PureComponent {
  static async getInitialProps({ ctx }) {
    const { store } = ctx;

    store.dispatch(getProjectDomains());

    // Wait for your dependencies to be resolved.
    await new Promise(resolve => {
      const unsubscribe = store.subscribe(() => {
        const state = store.getState();
        if (!state.isProjDomainFetching) {
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
          pageTitle="Create Audit"
          pageDesc="This is AuditTrackR audit create page"
          pageId="auditCreate"
        >
          <ContentContainer breadCrumbTitle="Start New Audit">
            <CreateAuditPage {...this.props} />
          </ContentContainer>
        </PrimaryLayout>
      </>
    );
  }
}

// AuditCreate.propTypes = propTypes;

export const mapStateToProps = createStructuredSelector({
  isLoading: makeSelectIsLoading(),
  data: makeSelectData(),
  error: makeSelectError(),
  isProjDomainFetching: makeSelectIsProjDomainFetching(),
  projDomainList: makeSelectProjDomainList(),
  errorProjDomain: makeSelectErrorProjDomain(),
  formWrapperData: formWrapperSelector('createAuditForm'),
});

export const mapDispatchToProps = dispatch => ({
  onSubmitCreateAuditForm(args) {
    dispatch(submitCreateAuditForm(args));
  },
  clearCreateAuditData() {
    dispatch(clearCreateAuditData());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withAuth(AuditCreate));
