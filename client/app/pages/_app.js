/**
 * _app.js
 *
 * Next.js uses the App component to initialize pages. You can override it and control the page initialization.
 *
 * For more info, check out
 * https://github.com/zeit/next.js#custom-app
 *
 */

/**
 * Module dependencies.
 */
import 'cross-fetch/polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import App from 'next/app';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';

import {
  StylesProvider,
  ThemeProvider,
  withStyles,
} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import getPageContext from '../lib/getPageContext';
import globalStyles from '../styles/global';
import createStore from '../store/store';
import { updateRoutes } from '../lib/routes/actions';
import { isBrowser, setStoreRef } from '../utils/helpersUtil';
import { getNextCookie } from '../utils/cookieUtil';
import { toggleUserAuthenticated } from '../components/templates/Account/Login/actions';

class MyApp extends App {
  static async getInitialProps({ Component, ctx, router }) {
    let pageProps = {};
    const { store } = ctx;
    store.dispatch(updateRoutes(router));

    // check if user is authenticated or not
    const token = getNextCookie(ctx, 'token'); // only accessible during SSR, because it is httpOnly
    if (token) {
      // @TODO: here call an API and check if `token` is valid or not.
      // if token is valid, dispatch an action to set the state `isAuthenticated`
      // to true. `isAuthenticated` then used in `withAuth` HOC
      store.dispatch(toggleUserAuthenticated(true));
    }

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx });
    }
    return { pageProps };
  }

  constructor(props) {
    super(props);
    this.pageContext = getPageContext();
    this.store = this.props.store;

    // @TODO: move below logic to one singleton file
    if (isBrowser()) {
      // set store to the external js
      setStoreRef(this.store);
    }
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      /* Wrap every page in JSS and Theme providers */
      <StylesProvider
        injectFirst
        generateClassName={this.pageContext.generateClassName}
      >
        {/* MuiThemeProvider makes the theme available down the React
              tree thanks to React context. */}
        <ThemeProvider
          theme={this.pageContext.theme}
          // sheetsManager={this.pageContext.sheetsManager}
        >
          <Provider store={store}>
            {/* CssBaseline kick start an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            {/* Pass pageContext to the _document though the renderPage enhancer
                    to render collected styles on server-side. */}
            <Component pageContext={this.pageContext} {...pageProps} />
          </Provider>
        </ThemeProvider>
      </StylesProvider>
    );
  }
}

export default withRedux(createStore)(
  withReduxSaga(withStyles(globalStyles)(MyApp))
);
