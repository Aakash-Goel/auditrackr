/**
 * @Description:
 *  This HOC helps to re-route users to page which they requested for before login attempt,
 *  Example: If user is not in logged-in state and requested for authenticated page, he/she will be redirected to Login page.
 *  After successful login user will be redirected to the page for which he/she requested for.
 *
 *  @param {Function} React Stateless or Class Component.
 *  @param {Object} React Component Props.
 *  @returns {undefined} Redirects users to another route.
 *  @example
 *
 *  return <AuthValidator location={location} route={route} {...rest} />;
 *
 */

import React, { PureComponent } from 'react';
import { node, bool } from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Router } from '../../../../routes';
import { isBrowser } from '../../../utils/helpersUtil';
import { makeSelectIsAuthenticated } from '../../templates/Account/Login/selectors';

const propTypes = {
  isAuthenticated: bool.isRequired,
  children: node,
};

const defaultProps = {
  children: null,
};

class AuthValidator extends PureComponent {
  componentWillMount() {
    // @TODO: move below logic to one singleton file
    if (isBrowser() && !this.props.isAuthenticated) {
      Router.pushRoute('account-login');
    }
  }

  componentWillUpdate(nextProps) {
    // @TODO: move below logic to one singleton file
    if (!nextProps.isAuthenticated) {
      Router.pushRoute('account-login');
    }
  }

  render() {
    return <>{this.props.children}</>;
  }
}

AuthValidator.propTypes = propTypes;
AuthValidator.defaultProps = defaultProps;

export const mapStateToProps = createStructuredSelector({
  isAuthenticated: makeSelectIsAuthenticated(),
});

export default connect(mapStateToProps)(AuthValidator);
