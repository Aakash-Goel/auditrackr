import { fade } from '@material-ui/core/styles/colorManipulator';

import linksStyles from '../../../styles/mixins/links';
import { textTransform } from '../../../styles/variables';

// constants
const outlineBorder = 1;
const outlineBorderUnit = 'px';
const outlineBorderStyle = 'solid';
const outlineAlpha = 0.5;
const linkAlpha = 0.75;
const roundButtonRadius = '30px';

const buttonStyles = theme => {
  // theme constants
  const primaryColor = theme.palette.primary.main;
  const secondaryColor = theme.palette.secondary.main;
  const infoColor = theme.palette.custom.info;
  const successColor = theme.palette.custom.success;
  const warningColor = theme.palette.custom.warning;
  const errorColor = theme.palette.error.main;
  const whiteColor = theme.palette.common.white;
  const blackColor = theme.palette.common.black;
  const greyColor = theme.palette.grey[500];
  const {
    fontSizeSmall,
    fontSizeRegular,
    fontSizeExtraSmall,
  } = theme.typography;

  const styleObject = {
    button: {
      minHeight: 'auto',
      minWidth: 'auto',
      boxShadow: theme.shadows[3],
      border: 'none',
      position: 'relative',
      padding: theme.spacing(1.5, 3), // 12px 24px
      willChange: 'box-shadow, transform',
      transition:
        'box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
      textAlign: 'center',
      whiteSpace: 'nowrap',
      verticalAlign: 'middle',
      touchAction: 'manipulation',
      cursor: 'pointer',
      '&:hover,&:focus': {
        boxShadow: theme.shadows[8],
      },
      '& .fab,& .fas,& .far,& .fal,& .material-icons': {
        position: 'relative',
        display: 'inline-block',
        top: '0',
        // fontSize: fontSize,
        marginRight: theme.spacing(0.5), // 4px
        verticalAlign: 'middle',
      },
      '& svg': {
        position: 'relative',
        display: 'inline-block',
        top: '0',
        width: '1rem',
        height: '1rem',
        verticalAlign: 'middle',
        fill: 'inherit',
      },
      '&$justIcon': {
        '& .fab,& .fas,& .far,& .fal,& .material-icons': {
          position: 'absolute',
          width: '100%',
          height: '100%',
          transform: 'none',
          left: '0',
          top: '0',
          marginRight: '0px',
          // lineHeight: '41px',
          // fontSize: '20px', // do not hard code
        },
      },
    },
    primary: {
      backgroundColor: primaryColor,
      color: whiteColor,
      '&:hover,&:focus': {
        backgroundColor: whiteColor,
        color: primaryColor,
      },
      '& svg': {
        fill: primaryColor,
      },
    },
    secondary: {
      backgroundColor: secondaryColor,
      color: whiteColor,
      '&:hover,&:focus': {
        backgroundColor: whiteColor,
        color: secondaryColor,
      },

      '& svg': {
        fill: secondaryColor,
      },
    },
    info: {
      backgroundColor: infoColor,
      color: whiteColor,
      '&:hover,&:focus': {
        backgroundColor: whiteColor,
        color: infoColor,
      },
      '& svg': {
        fill: infoColor,
      },
    },
    success: {
      backgroundColor: successColor,
      color: whiteColor,
      '&:hover,&:focus': {
        backgroundColor: whiteColor,
        color: successColor,
      },
      '& svg': {
        fill: successColor,
      },
    },
    warning: {
      backgroundColor: warningColor,
      color: whiteColor,
      '&:hover,&:focus': {
        backgroundColor: whiteColor,
        color: warningColor,
      },
      '& svg': {
        fill: warningColor,
      },
    },
    error: {
      backgroundColor: errorColor,
      color: whiteColor,
      '&:hover,&:focus': {
        backgroundColor: whiteColor,
        color: errorColor,
      },
      '& svg': {
        fill: errorColor,
      },
    },
    white: {
      backgroundColor: whiteColor,
      color: blackColor,
      '&:hover,&:focus': {
        backgroundColor: blackColor,
        color: whiteColor,
      },
      '& svg': {
        fill: whiteColor,
      },
    },
    black: {
      backgroundColor: blackColor,
      color: whiteColor,
      '&:hover,&:focus': {
        backgroundColor: whiteColor,
        color: blackColor,
      },
      '& svg': {
        fill: blackColor,
      },
    },
    grey: {
      backgroundColor: greyColor,
      color: whiteColor,
      '&:hover,&:focus': {
        backgroundColor: whiteColor,
        color: greyColor,
      },
      '& svg': {
        fill: greyColor,
      },
    },

    // icon styles
    startIcon: {
      '& svg': {
        marginRight: theme.spacing(1), // 4px
      },
    },
    endIcon: {
      '& svg': {
        marginLeft: theme.spacing(1), // 4px
      },
    },

    // Simple Button Styles
    simple: {
      '&': {
        background: 'transparent',
        boxShadow: 'none',
      },
      '&:hover': {
        background: 'transparent',
        boxShadow: 'none',
      },
      '&$primary': {
        '&,&:focus,&:hover,&:visited': {
          color: primaryColor,
        },
      },
      '&$secondary': {
        '&,&:focus,&:hover,&:visited': {
          color: secondaryColor,
        },
      },
      '&$info': {
        '&,&:focus,&:hover,&:visited': {
          color: infoColor,
        },
      },
      '&$success': {
        '&,&:focus,&:hover,&:visited': {
          color: successColor,
        },
      },
      '&$warning': {
        '&,&:focus,&:hover,&:visited': {
          color: warningColor,
        },
      },
      '&$error': {
        '&,&:focus,&:hover,&:visited': {
          color: errorColor,
        },
      },
      '&$white': {
        '&,&:focus,&:hover,&:visited': {
          color: whiteColor,
        },
      },
      '&$black': {
        '&,&:focus,&:hover,&:visited': {
          color: blackColor,
        },
      },
      '&$grey': {
        '&,&:focus,&:hover,&:visited': {
          color: greyColor,
        },
      },
    },

    // Outlined Button Styles
    outlined: {
      '&': {
        backgroundColor: 'transparent',
        boxShadow: 'none',
      },
      '&$primary': {
        '&': {
          color: primaryColor,
          border: `${outlineBorder}${outlineBorderUnit} ${outlineBorderStyle} ${primaryColor}`,
        },
        '&:hover,&:focus': {
          backgroundColor: fade(primaryColor, outlineAlpha),
        },
      },
      '&$secondary': {
        '&': {
          color: secondaryColor,
          border: `${outlineBorder}${outlineBorderUnit} ${outlineBorderStyle} ${secondaryColor}`,
        },
        '&:hover,&:focus': {
          backgroundColor: fade(secondaryColor, outlineAlpha),
        },
      },
      '&$info': {
        '&': {
          color: infoColor,
          border: `${outlineBorder}${outlineBorderUnit} ${outlineBorderStyle} ${infoColor}`,
        },
        '&:hover,&:focus': {
          backgroundColor: fade(infoColor, outlineAlpha),
        },
      },
      '&$success': {
        '&': {
          color: successColor,
          border: `${outlineBorder}${outlineBorderUnit} ${outlineBorderStyle} ${successColor}`,
        },
        '&:hover,&:focus': {
          backgroundColor: fade(successColor, outlineAlpha),
        },
      },
      '&$warning': {
        '&': {
          color: warningColor,
          border: `${outlineBorder}${outlineBorderUnit} ${outlineBorderStyle} ${warningColor}`,
        },
        '&:hover,&:focus': {
          backgroundColor: fade(warningColor, outlineAlpha),
        },
      },
      '&$error': {
        '&': {
          color: errorColor,
          border: `${outlineBorder}${outlineBorderUnit} ${outlineBorderStyle} ${errorColor}`,
        },
        '&:hover,&:focus': {
          backgroundColor: fade(errorColor, outlineAlpha),
        },
      },
      '&$white': {
        '&': {
          color: whiteColor,
          border: `${outlineBorder}${outlineBorderUnit} ${outlineBorderStyle} ${whiteColor}`,
        },
        '&:hover,&:focus': {
          backgroundColor: fade(whiteColor, outlineAlpha),
        },
      },
      '&$black': {
        '&': {
          color: blackColor,
          border: `${outlineBorder}${outlineBorderUnit} ${outlineBorderStyle} ${blackColor}`,
        },
        '&:hover,&:focus': {
          backgroundColor: fade(blackColor, outlineAlpha),
        },
      },
      '&$grey': {
        '&': {
          color: greyColor,
          border: `${outlineBorder}${outlineBorderUnit} ${outlineBorderStyle}
            ${greyColor}`,
        },
        '&:hover,&:focus': {
          backgroundColor: fade(greyColor, outlineAlpha),
        },
      },
      '&$transparent': {
        '&': {
          border: `none`,
        },
      },
    },

    // Link Button Styles
    link: {
      '&': {
        ...linksStyles.default,
      },
      '&:hover,&:focus': {
        ...linksStyles.defaultHover,
      },
      '&$primary': {
        '&,&:focus': {
          color: primaryColor,
        },
        '&:hover,&:visited': {
          color: fade(primaryColor, linkAlpha),
        },
      },
      '&$secondary': {
        '&,&:focus': {
          color: secondaryColor,
        },
        '&:hover,&:visited': {
          color: fade(secondaryColor, linkAlpha),
        },
      },
      '&$info': {
        '&,&:focus': {
          color: infoColor,
        },
        '&:hover,&:visited': {
          color: fade(infoColor, linkAlpha),
        },
      },
      '&$success': {
        '&,&:focus': {
          color: successColor,
        },
        '&:hover,&:visited': {
          color: fade(successColor, linkAlpha),
        },
      },
      '&$warning': {
        '&,&:focus': {
          color: warningColor,
        },
        '&:hover,&:visited': {
          color: fade(warningColor, linkAlpha),
        },
      },
      '&$error': {
        '&,&:focus': {
          color: errorColor,
        },
        '&:hover,&:visited': {
          color: fade(errorColor, linkAlpha),
        },
      },
      '&$white': {
        '&,&:focus': {
          color: whiteColor,
        },
        '&:hover,&:visited': {
          color: fade(whiteColor, linkAlpha),
        },
      },
      '&$black': {
        '&,&:focus': {
          color: blackColor,
        },
        '&:hover,&:visited': {
          color: fade(blackColor, linkAlpha),
        },
      },
      '&$grey': {
        '&,&:focus': {
          color: greyColor,
        },
        '&:hover,&:visited': {
          color: fade(greyColor, linkAlpha),
        },
      },
    },

    // General Styles
    round: {
      borderRadius: roundButtonRadius,
    },
    fullWidth: {
      width: '100%',
    },
    transparent: {
      '&,&:hover': {
        color: 'inherit',
        background: 'transparent',
        boxShadow: 'none',
      },
    },
    disabled: {
      ...theme.palette.custom.disabled,
      pointerEvents: 'none',
    },
    block: {
      width: '100% !important',
    },

    // Button Sizes
    sm: {
      padding: theme.spacing(1, 2), // '8px 16px',
      fontSize: fontSizeExtraSmall,
    },
    md: {
      padding: theme.spacing(1.25, 2.5), // 10px 20px
      fontSize: fontSizeSmall,
    },
    lg: {
      padding: theme.spacing(1.75, 3.5), // 14px, 28px
      fontSize: fontSizeRegular,
    },

    // weights
    bold: {
      fontWeight: theme.typography.fontWeightBold,
    },
    medium: {
      fontWeight: theme.typography.fontWeightRegular,
    },
    light: {
      fontWeight: theme.typography.fontWeightLight,
    },

    // refactor below, remove hard code values
    justIcon: {
      paddingLeft: '12px',
      paddingRight: '12px',
      fontSize: '20px',
      height: '41px',
      minWidth: '41px',
      width: '41px',
      '& .fab,& .fas,& .far,& .fal,& svg,& .material-icons': {
        marginRight: '0px',
      },
      '&$lg': {
        height: '57px',
        minWidth: '57px',
        width: '57px',
        lineHeight: '56px',
        '& .fab,& .fas,& .far,& .fal,& .material-icons': {
          fontSize: '32px',
          lineHeight: '56px',
        },
        '& svg': {
          width: '32px',
          height: '32px',
        },
      },
      '&$sm': {
        height: '30px',
        minWidth: '30px',
        width: '30px',
        '& .fab,& .fas,& .far,& .fal,& .material-icons': {
          fontSize: '17px',
          lineHeight: '29px',
        },
        '& svg': {
          width: '17px',
          height: '17px',
        },
      },
    },

    // Button Transform Styles
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
};

export default buttonStyles;
