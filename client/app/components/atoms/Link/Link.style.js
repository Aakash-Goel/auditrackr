import { makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';

import linksStyles from '../../../styles/mixins/links';
import { textTransform } from '../../../styles/variables';

// constants
const linkAlpha = 0.75;

const linkStyles = makeStyles(theme => {
  // theme constants
  const primaryColor = theme.palette.primary.main;
  const secondaryColor = theme.palette.secondary.main;
  const infoColor = theme.palette.info.main;
  const successColor = theme.palette.success.main;
  const warningColor = theme.palette.warning.main;
  const errorColor = theme.palette.error.main;
  const whiteColor = theme.palette.common.white;
  const blackColor = theme.palette.common.black;
  const greyColor = theme.palette.grey[500];
  const {
    fontSizeExtraSmall,
    fontSizeSmall,
    fontSizeRegular,
  } = theme.typography;

  const styleObject = {
    link: {
      cursor: 'pointer',
      ...linksStyles.default,

      '&:hover,&:focus': {
        ...linksStyles.defaultHover,
      },
    },

    // colors
    primary: {
      '&,&:focus': {
        color: primaryColor,
      },
      '&:hover,&:visited': {
        color: fade(primaryColor, linkAlpha),
      },
    },
    secondary: {
      '&,&:focus': {
        color: secondaryColor,
      },
      '&:hover,&:visited': {
        color: fade(secondaryColor, linkAlpha),
      },
    },
    info: {
      '&,&:focus': {
        color: infoColor,
      },
      '&:hover,&:visited': {
        color: fade(infoColor, linkAlpha),
      },
    },
    success: {
      '&,&:focus': {
        color: successColor,
      },
      '&:hover,&:visited': {
        color: fade(successColor, linkAlpha),
      },
    },
    warning: {
      '&,&:focus': {
        color: warningColor,
      },
      '&:hover,&:visited': {
        color: fade(warningColor, linkAlpha),
      },
    },
    error: {
      '&,&:focus': {
        color: errorColor,
      },
      '&:hover,&:visited': {
        color: fade(errorColor, linkAlpha),
      },
    },
    white: {
      '&,&:focus': {
        color: whiteColor,
      },
      '&:hover,&:visited': {
        color: fade(whiteColor, linkAlpha),
      },
    },
    black: {
      '&,&:focus': {
        color: blackColor,
      },
      '&:hover,&:visited': {
        color: fade(blackColor, linkAlpha),
      },
    },
    grey: {
      '&,&:focus': {
        color: greyColor,
      },
      '&:hover,&:visited': {
        color: fade(greyColor, linkAlpha),
      },
    },
    inherit: {
      color: 'inherit',
    },

    // sizes
    sm: {
      fontSize: fontSizeExtraSmall,
    },
    md: {
      fontSize: fontSizeSmall,
    },
    lg: {
      fontSize: fontSizeRegular,
    },

    // weights
    bold: {
      fontWeight: theme.typography.fontWeightBold,
    },
    medium: {
      fontWeight: theme.typography.fontWeightMedium,
    },
    light: {
      fontWeight: theme.typography.fontWeightLight,
    },

    // text-transform
    cap: {
      textTransform: textTransform.cap,
    },
    iht: {
      textTransform: textTransform.iht,
    },
    lwc: {
      textTransform: textTransform.lwc,
    },
    nn: {
      textTransform: textTransform.nn,
    },
    upc: {
      textTransform: textTransform.upc,
    },
  };
  return styleObject;
});

export default linkStyles;
