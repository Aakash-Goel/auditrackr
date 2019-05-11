/**
 * _document.js
 *
 * _document is only rendered on the server side and not on the client side
 * Is used to change the initial server side rendered document markup
 *
 * For more info, check out
 * https://github.com/zeit/next.js#custom-document
 *
 */

/**
 * Module dependencies.
 */
import React, { Fragment } from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { object } from 'prop-types';
import flush from 'styled-jsx/server';

import { withStyles } from '@material-ui/core/styles';

import catchErrors from 'app-utils/errorBoundary';
import preloadAssets from 'app-utils/preloadAssets';
import { WEB_FONTS_PATH } from 'app-constants';
import globalStyles from 'app-styles/globalStyles';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    // Resolution order
    //
    // On the server:
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. document.getInitialProps
    // 4. app.render
    // 5. page.render
    // 6. document.render
    //
    // On the server with error:
    // 1. document.getInitialProps
    // 2. app.render
    // 3. page.render
    // 4. document.render
    //
    // On the client
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. app.render
    // 4. page.render

    // Render app and page and get the context of the page with collected side effects.
    let pageContext;
    const page = renderPage(Component => {
      const WrappedComponent = props => {
        ({ pageContext } = props);
        return <Component {...props} />;
      };

      WrappedComponent.propTypes = {
        pageContext: object.isRequired,
      };

      return withStyles(globalStyles)(WrappedComponent);
    });

    let css;
    // It might be undefined, e.g. after an error.
    if (pageContext) {
      css = pageContext.sheetsRegistry.toString();
    }

    return {
      ...page,
      pageContext,
      styles: (
        <Fragment>
          <style
            id="jss-server-side"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: css }}
          />
          {flush() || null}
        </Fragment>
      ),
    };
  }

  render() {
    const Content = catchErrors(Main);
    const preLoadFonts = WEB_FONTS_PATH || [];
    const { pageContext } = this.props;

    return (
      <html lang="en">
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
          <meta
            name="theme-color"
            content={
              pageContext ? pageContext.theme.palette.primary.main : null
            }
          />
          {preloadAssets(preLoadFonts, 'font')}
        </Head>
        <body className="app">
          <Content />
          <NextScript />
        </body>
      </html>
    );
  }
}
