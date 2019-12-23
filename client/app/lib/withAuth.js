import React, { PureComponent } from 'react';
import { bool } from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import pathOr from 'lodash/fp/pathOr';

import { Router } from '../../routes';
import APP_URLS from '../constants/appUrls';
import { getNextCookie } from '../utils/cookieUtil';
import { makeSelectIsAuthenticated } from '../components/templates/Account/Login/selectors';
import { toggleUserAuthenticated } from '../components/templates/Account/Login/actions';

const propTypes = {
  isAuthenticated: bool.isRequired,
};
const defaultProps = {};

const auth = ctx => {
  const cUser = getNextCookie(ctx, 'c_user'); // accessible during SSR and CSR, because it is not httpOnly
  const { store, isServer } = ctx;
  const { account } = store.getState();
  const isUserAuthenticated = pathOr(false, 'isAuthenticated', account);

  /**
   * This happens on server only.
   * If we are on server and isUserAuthenticated is false,
   * means user is not logged in.
   *
   * `isUserAuthenticated` set to true, if "token" is present during SSR.
   * @see _app.js
   *
   * `isUserAuthenticated` set to false, by default
   */
  if (isServer && !isUserAuthenticated) {
    ctx.res.writeHead(302, { Location: APP_URLS.login.url });
    ctx.res.end();
    return;
  }

  /**
   * This happens on client only.
   * if isUserAuthenticated is false or user cookie is not present,
   * means user is not logged in.
   *
   * During CSR, we can't check if 'token' is present or not, since it is
   * httpOnly cookie
   */
  if (!isServer && (!isUserAuthenticated || !cUser)) {
    store.dispatch(toggleUserAuthenticated(false));
    Router.pushRoute(APP_URLS.login.name);
  }

  // @TODO: One case is left, i.e. if "token" is deleted and do the client-side
  // rendering, user will still be able to see the Auth pages, because "token"
  // cookie can't be read from the client js because it is httpOnly.
  // To handle this, we need to check the token inside server/index.js(express),
  // request and redirect to the login page if token is not present.
};

const withAuth = WrappedComponent => {
  class AuthComponent extends PureComponent {
    static async getInitialProps({ ctx }) {
      auth(ctx);

      const componentProps =
        WrappedComponent.getInitialProps &&
        (await WrappedComponent.getInitialProps({ ctx }));

      return { ...componentProps };
    }

    constructor(props) {
      super(props);

      this.syncLogout = this.syncLogout.bind(this);
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.isAuthenticated) {
        Router.pushRoute(APP_URLS.login.name);
      }
    }

    // Add event listener when a restricted Page Component mounts
    // componentDidMount() {
    //   window.addEventListener('storage', this.syncLogout);
    // }

    // Remove event listener when the Component unmount and
    // delete all data
    // componentWillUnmount() {
    //   window.removeEventListener('storage', this.syncLogout);
    //   window.localStorage.removeItem('logout');
    // }

    // Method to redirect the user when the event is called
    syncLogout(event) {
      if (event.key === 'logout') {
        console.log('logged out from storage!'); // eslint-disable-line
        // Router.push('/login');
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  AuthComponent.propTypes = propTypes;
  AuthComponent.defaultProps = defaultProps;

  const mapStateToProps = createStructuredSelector({
    isAuthenticated: makeSelectIsAuthenticated(),
  });

  return connect(mapStateToProps)(AuthComponent);
};

export default withAuth;
