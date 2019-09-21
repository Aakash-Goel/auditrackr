// import { SheetsRegistry } from 'jss';
import {
  ServerStyleSheets,
  createGenerateClassName,
} from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

import muiTheme from '../styles/theme/muiTheme';

// A theme with custom options.
// It's optional.
const theme = createMuiTheme({ ...muiTheme });

function createPageContext() {
  return {
    theme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    // sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    // sheetsRegistry: new SheetsRegistry(),

    serverStyleSheets: new ServerStyleSheets(),
    // The standard class name generator.
    generateClassName: createGenerateClassName(),
  };
}

let pageContext;

export default function getPageContext() {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).
  if (!process.browser) {
    return createPageContext();
  }

  // Reuse context on the client-side.
  if (!pageContext) {
    pageContext = createPageContext();
  }

  return pageContext;
}
