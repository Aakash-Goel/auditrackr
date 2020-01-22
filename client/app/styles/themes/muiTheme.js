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
  colors,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  textTransform,
} from '../variables';
import { remToPx } from '../mixins/utils';

/**
 * Module variables.
 * @public
 */
const muiTheme = {
  palette: {
    common: {
      black: colors.black,
      white: colors.white,
    },
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    error: {
      main: colors.error,
    },
    warning: {
      main: colors.warning,
    },
    info: {
      main: colors.info,
    },
    success: {
      main: colors.success,
    },
    grey: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e', // commonly used this only
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
      A100: '#d5d5d5',
      A200: '#aaaaaa',
      A400: '#303030',
      A700: '#616161',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.54)',
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.38)',
    },
    divider: 'rgba(0, 0, 0, 0.12)',
    background: { paper: '#fff', default: '#fafafa' },
    action: {
      active: 'rgba(0, 0, 0, 0.54)',
      hover: 'rgba(0, 0, 0, 0.08)',
      hoverOpacity: 0.08,
      selected: 'rgba(0, 0, 0, 0.14)',
      disabled: 'rgba(0, 0, 0, 0.26)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
    },
  },
  typography: {
    htmlFontSize: 16,
    fontFamilyPrimary: fontFamily.primary, // custom field
    fontFamily: fontFamily.secondary,
    fontSize: parseInt(remToPx(fontSize.normal)),
    fontSizeSmall: fontSize.small, // custom field
    fontSizeExtraSmall: fontSize.extraSmall, // custom field
    fontSizeRegular: fontSize.regular, // custom field
    fontSizeMedium: fontSize.medium, // custom field
    fontSizeExtraMedium: fontSize.extraMedium, // custom field
    fontSizeLarge: fontSize.large, // custom field
    fontSizeExtraLarge: fontSize.extraLarge, // custom field
    fontWeightThin: fontWeight.thin, // custom field
    fontWeightLight: fontWeight.light,
    fontWeightRegular: fontWeight.normal,
    fontWeightMedium: fontWeight.medium,
    fontWeightBold: fontWeight.bold,
    body1: {
      fontFamily: fontFamily.secondary,
      fontSize: parseInt(remToPx(fontSize.normal)),
      fontWeight: fontWeight.normal,
      lineHeight: lineHeight.normal,
    },
    button: {
      fontFamily: fontFamily.secondary,
      fontWeight: fontWeight.medium,
      fontSize: parseInt(remToPx(fontSize.normal)),
      lineHeight: lineHeight.normal,
      textTransform: textTransform.upc,
    },
  },
  overrides: {
    MuiPaper: {
      root: {
        color: 'inherit',
      },
    },
    MuiButton: {
      root: {
        '&$disabled': {
          color: 'rgba(255, 255, 255, 0.67)',
        },
      },
    },
    MuiFormControlLabel: {
      label: {
        '&$disabled': {
          color: colors.grey,
        },
      },
    },
    MuiFormLabel: {
      root: {
        fontSize: parseInt(remToPx(fontSize.normal)),
        fontWeight: fontWeight.normal,
        color: colors.grey,
      },
    },
    MuiFormHelperText: {
      root: {
        fontSize: parseInt(remToPx(fontSize.small)),
        color: colors.grey,
      },
    },
    MuiInputBase: {
      root: {
        fontSize: parseInt(remToPx(fontSize.normal)),
        fontWeight: fontWeight.normal,
      },
      input: {
        color: colors.primary,
      },
    },
    MuiInput: {
      underline: {
        color: colors.grey,
        '&:hover:not($disabled):after': {
          // borderBottom: '1px solid red',
        },
        '&:hover:not($disabled):before': {
          borderBottom: `1px solid ${colors.grey}`,
        },
        '&:after': {
          // borderBottom: `1px solid ${colors.primary}`,
        },
        '&:before': {
          borderBottom: `1px solid ${colors.grey}`,
        },
      },
    },
    MuiMenuItem: {
      root: {
        fontFamily: fontFamily.secondary,
        fontSize: parseInt(remToPx(fontSize.normal)),
        fontWeight: fontWeight.normal,
        lineHeight: lineHeight.normal,
      },
    },
    MuiListItem: {
      root: {
        '&$selected': {
          fill: colors.white,
          color: colors.white,
          backgroundColor: colors.primary,

          /** will remove it in future if not required */
          // '&:hover': {
          //   color: colors.white,
          //   backgroundColor: colors.primary,
          // },
        },
      },
    },
    MuiSvgIcon: {
      root: {
        fontSize: parseInt(remToPx(fontSize.extraMedium)),
      },
    },
    MuiCheckbox: {
      root: {
        color: colors.grey,
      },
      colorPrimary: {
        '&$disabled': {
          color: colors.grey,
        },
      },
    },
    MuiIconButton: {
      root: {
        color: colors.grey,
        fontSize: parseInt(remToPx(fontSize.normal)),

        '&$disabled': {
          color: colors.grey,
        },
      },
    },
    MuiChip: {
      root: {
        color: colors.black,
        height: '30px',
        fontSize: fontSize.small,

        '& $avatar': {
          height: '30px', // this should same as chip root height
          width: '30px', // this should same as chip root height
          marginLeft: 0,
        },
      },
      outlined: {
        '& $avatar': {
          marginLeft: 0,
        },
      },
      deleteIcon: {
        color: colors.white,
      },
    },
  },
};

/**
 * Module exports.
 * @public
 */
export default muiTheme;
