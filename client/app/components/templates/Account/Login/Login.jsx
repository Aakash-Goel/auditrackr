import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bool, object } from 'prop-types';
import { createStructuredSelector } from 'reselect';

import LoginPage from '../../../organisms/views/LoginPage';

import { submitAccountLogIn } from './actions';
import {
  makeSelectIsAuthenticated,
  makeSelectIsLoading,
  makeSelectError,
} from './selectors';
import { formWrapperSelector } from '../../../organisms/Forms/FormWrapper/selectors';
import { Router } from '../../../../../routes';
import { isBrowser } from '../../../../utils/helpersUtil';

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
  componentWillMount() {
    // @TODO: move below logic to one singleton file
    if (isBrowser() && this.props.isAuthenticated) {
      Router.pushRoute('audit-dashboard');
    }
  }

  componentWillReceiveProps(nextProps) {
    // @TODO: move below logic to one singleton file
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
