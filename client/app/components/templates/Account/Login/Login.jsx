import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bool, object } from 'prop-types';
import { createStructuredSelector } from 'reselect';
import pathOr from 'lodash/fp/pathOr';

import LoginPage from '../../../organisms/views/LoginPage';

import { submitAccountLogIn } from './actions';
import {
  makeSelectIsAuthenticated,
  makeSelectIsLoading,
  makeSelectError,
} from './selectors';
import { formWrapperSelector } from '../../../organisms/Forms/FormWrapper/selectors';
import { Router } from '../../../../../routes';

/**
 * Type checking - Define prop types
 * @private
 */
const propTypes = {
  isAuthenticated: bool.isRequired,
  error: object,
};

const defaultProps = {
  error: null,
};

export class AccountLogin extends PureComponent {
  static async getInitialProps({ ctx }) {
    const { store, isServer } = ctx;
    const { account } = store.getState();
    const isUserAuthenticated = pathOr(false, 'isAuthenticated', account);

    /**
     * This happens on server only.
     */
    if (isServer && isUserAuthenticated) {
      ctx.res.writeHead(302, { Location: '/account/audit/dashboard' });
      ctx.res.end();
    }

    /**
     * This happens on client only.
     */
    if (!isServer && isUserAuthenticated) {
      Router.pushRoute('audit-dashboard');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.isAuthenticated !== nextProps.isAuthenticated) {
      if (nextProps.isAuthenticated && !nextProps.error) {
        Router.pushRoute('audit-dashboard');
      }
    }
  }

  render() {
    return (
      <>
        <LoginPage {...this.props} />
      </>
    );
  }
}

export const mapStateToProps = createStructuredSelector({
  isAuthenticated: makeSelectIsAuthenticated(),
  isLoading: makeSelectIsLoading(),
  error: makeSelectError(),
  formWrapperData: formWrapperSelector('loginForm'),
});

export const mapDispatchToProps = dispatch => ({
  onSubmitLoginForm(args) {
    dispatch(submitAccountLogIn(args));
  },
});

AccountLogin.propTypes = propTypes;
AccountLogin.defaultProps = defaultProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountLogin);
