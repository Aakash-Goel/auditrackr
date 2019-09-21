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
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import pathOr from 'lodash/fp/pathOr';

import { withStyles } from '@material-ui/core/styles';
import { StylesProvider, ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import getPageContext from '../lib/getPageContext';
import globalStyles from '../styles/globalStyles';
import createStore from '../store/store';
import { setLabels } from '../lib/labels/actions';
import ServiceUtil from '../utils/serviceUtil';
import LocalStorageUtil from '../utils/localStorageUtil';
import { isBrowser, setStoreRef } from '../utils/helpersUtil';
import { setIsUserAuthenticated } from '../components/templates/Account/Login/actions';

const ID_TOKEN = 'id_token'; // @TODO: move this to the config

async function fetchLabelGlobalData() {
  await ServiceUtil.triggerRequest({
    url: 'http://localhost:1337/globals',
  }).then(
    resolvedValue => {
      return resolvedValue;
    },
    error => {
      return error;
    }
  );
}

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    const { store } = ctx;
    const globalLabelDetails = await fetchLabelGlobalData();
    const serviceStatus = pathOr(
      'ERROR',
      'body.statusText',
      globalLabelDetails
    );
    const labelsData = {
      serviceStatus,
      data: pathOr(null, 'body.data[0]', globalLabelDetails),
      identifier: 'globals',
    };
    store.dispatch(setLabels(labelsData));

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

      // check if user is authenticated or not
      const storageUtil = new LocalStorageUtil();
      const token = storageUtil.getItem(ID_TOKEN);
      // if token exist, dispatch an action to set the state isAuthenticated to true.
      if (token) {
        this.store.dispatch(setIsUserAuthenticated());
      }
    }

    this.client = new ApolloClient({
      uri: 'http://localhost:4000/graphql',
    });
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps /* store */ } = this.props;

    return (
      <ApolloProvider client={this.client}>
        {/* Wrap every page in JSS and Theme providers */}
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
            <Provider store={this.store}>
              {/* CssBaseline kick start an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
              {/* Pass pageContext to the _document though the renderPage enhancer
                    to render collected styles on server-side. */}
              <Component pageContext={this.pageContext} {...pageProps} />
            </Provider>
          </ThemeProvider>
        </StylesProvider>
      </ApolloProvider>
    );
  }
}

export default withRedux(createStore)(
  withReduxSaga(withStyles(globalStyles)(MyApp))
);
