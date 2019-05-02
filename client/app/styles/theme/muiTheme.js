/**
 * muiTheme.js
 *
 * Here you can define the theme which then pass to MuiThemeProvider
 * inside `app/pages/_document.js` file
 *
 * Here you can import styles defined in muiKit.js and
 * override default MaterialUI theme.
 *
 * Check out the full list of default theme section of Material-UI
 *  https://material-ui.com/customization/default-theme/
 *
 * You can also define your custom options like
 *  palette: {
 *    myCustomOption: {
 *      myCustomButtonColor: '#000',
 *    }
 *  }
 * Then, you can access `myCustomButtonColor` object inside your component styles as
 *  `theme.palette.myCustomOption.myCustomButtonColor` // Result -> '#000'
 *
 * Check out theme section of Materail-UI to know more
 *  https://material-ui.com/customization/themes/#custom-variables
 *
 */

import {
  primaryColor,
  secondaryColor,
  errorColor,
  blackColor,
  whiteColor,
  infoColor,
  successColor,
  warningColor,
  greyColor,
  brandColor,
  primaryFontFamily,
} from './muiKit';

/**
 * Module variables.
 * @public
 */
const muiTheme = {
  palette: {
    common: {
      black: blackColor,
      white: whiteColor,
    },
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
    error: {
      main: errorColor,
    },
    custom: {
      info: infoColor,
      success: successColor,
      warning: warningColor,
      grey: greyColor,
      brand: brandColor,
    },
  },
  typography: {
    fontFamily: primaryFontFamily,
    useNextVariants: true,
  },
};

/**
 * Module exports.
 * @public
 */
export default muiTheme;
