import {
  primaryColor,
  secondaryColor,
  infoColor,
  successColor,
  warningColor,
  errorColor,
  blackColor,
  whiteColor,
  greyColor,
} from 'app-styles/theme/muiKit';

const buttonStyles = theme => ({
  button: {
    minHeight: 'auto',
    minWidth: 'auto',
    backgroundColor: greyColor,
    color: whiteColor,
    boxShadow:
      '0 2px 2px 0 rgba(153, 153, 153, 0.14), 0 3px 1px -2px rgba(153, 153, 153, 0.2), 0 1px 5px 0 rgba(153, 153, 153, 0.12)',
    border: 'none',
    position: 'relative',
    padding: '12px 26px',
    margin: '.3125rem 1px',
    fontSize: '16px',
    fontWeight: '500',
    letterSpacing: '0',
    willChange: 'box-shadow, transform',
    transition:
      'box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    lineHeight: '1.5',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
    touchAction: 'manipulation',
    cursor: 'pointer',
    '&:hover,&:focus': {
      color: whiteColor,
      backgroundColor: greyColor,
      boxShadow:
        '0 14px 26px -12px rgba(153, 153, 153, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2)',
    },
    '& .fab,& .fas,& .far,& .fal,& .material-icons': {
      position: 'relative',
      display: 'inline-block',
      top: '0',
      fontSize: '1.1rem',
      marginRight: '4px',
      verticalAlign: 'middle',
    },
    '& svg': {
      position: 'relative',
      display: 'inline-block',
      top: '0',
      width: '18px',
      height: '18px',
      marginRight: '4px',
      verticalAlign: 'middle',
    },
    '&$justIcon': {
      '& .fab,& .fas,& .far,& .fal,& .material-icons': {
        marginRight: '0px',
        position: 'absolute',
        width: '100%',
        transform: 'none',
        left: '0px',
        top: '0px',
        height: '100%',
        lineHeight: '41px',
        fontSize: '20px',
      },
    },
  },
  fullWidth: {
    width: '100%',
  },
  primary: {
    backgroundColor: theme.palette.primary.main,
    boxShadow:
      '0 2px 2px 0 rgba(156, 39, 176, 0.14), 0 3px 1px -2px rgba(156, 39, 176, 0.2), 0 1px 5px 0 rgba(156, 39, 176, 0.12)',
    '&:hover,&:focus': {
      backgroundColor: theme.palette.primary.dark,
      boxShadow:
        '0 14px 26px -12px rgba(156, 39, 176, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(156, 39, 176, 0.2)',
      transition: 'all .5s',
    },
  },
  secondary: {
    backgroundColor: theme.palette.secondary.main,
    boxShadow:
      '0 2px 2px 0 rgba(1, 167, 143, 0.14), 0 3px 1px -2px rgba(1, 167, 143, 0.2), 0 1px 5px 0 rgba(1, 167, 143, 0.12)',
    '&:hover,&:focus': {
      backgroundColor: theme.palette.secondary.main,
      boxShadow:
        '0 14px 26px -12px rgba(1, 167, 143, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(1, 167, 143, 0.2)',
    },
  },
  info: {
    backgroundColor: infoColor,
    boxShadow:
      '0 2px 2px 0 rgba(0, 188, 212, 0.14), 0 3px 1px -2px rgba(0, 188, 212, 0.2), 0 1px 5px 0 rgba(0, 188, 212, 0.12)',
    '&:hover,&:focus': {
      backgroundColor: infoColor,
      boxShadow:
        '0 14px 26px -12px rgba(0, 188, 212, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 188, 212, 0.2)',
    },
  },
  success: {
    backgroundColor: successColor,
    boxShadow:
      '0 2px 2px 0 rgba(76, 175, 80, 0.14), 0 3px 1px -2px rgba(76, 175, 80, 0.2), 0 1px 5px 0 rgba(76, 175, 80, 0.12)',
    '&:hover,&:focus': {
      backgroundColor: successColor,
      boxShadow:
        '0 14px 26px -12px rgba(76, 175, 80, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(76, 175, 80, 0.2)',
    },
  },
  warning: {
    backgroundColor: warningColor,
    boxShadow:
      '0 2px 2px 0 rgba(255, 152, 0, 0.14), 0 3px 1px -2px rgba(255, 152, 0, 0.2), 0 1px 5px 0 rgba(255, 152, 0, 0.12)',
    '&:hover,&:focus': {
      backgroundColor: warningColor,
      boxShadow:
        '0 14px 26px -12px rgba(255, 152, 0, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(255, 152, 0, 0.2)',
    },
  },
  error: {
    backgroundColor: errorColor,
    boxShadow:
      '0 2px 2px 0 rgba(244, 67, 54, 0.14), 0 3px 1px -2px rgba(244, 67, 54, 0.2), 0 1px 5px 0 rgba(244, 67, 54, 0.12)',
    '&:hover,&:focus': {
      backgroundColor: errorColor,
      boxShadow:
        '0 14px 26px -12px rgba(244, 67, 54, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(244, 67, 54, 0.2)',
    },
  },
  black: {
    backgroundColor: blackColor,
    boxShadow:
      '0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)',
    '&:hover,&:focus': {
      backgroundColor: blackColor,
      boxShadow:
        '0 14px 26px -12px rgba(0, 0, 0, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
    },
  },
  white: {
    '&,&:focus,&:hover,&:visited': {
      backgroundColor: '#FFFFFF',
      color: blackColor,
    },
  },
  twitter: {
    backgroundColor: '#55acee',
    color: '#fff',
    boxShadow:
      '0 2px 2px 0 rgba(85, 172, 238, 0.14), 0 3px 1px -2px rgba(85, 172, 238, 0.2), 0 1px 5px 0 rgba(85, 172, 238, 0.12)',
    '&:hover,&:focus,&:visited': {
      backgroundColor: '#55acee',
      color: '#fff',
      boxShadow:
        '0 14px 26px -12px rgba(85, 172, 238, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(85, 172, 238, 0.2)',
    },
  },
  facebook: {
    backgroundColor: '#3b5998',
    color: '#fff',
    boxShadow:
      '0 2px 2px 0 rgba(59, 89, 152, 0.14), 0 3px 1px -2px rgba(59, 89, 152, 0.2), 0 1px 5px 0 rgba(59, 89, 152, 0.12)',
    '&:hover,&:focus': {
      backgroundColor: '#3b5998',
      color: '#fff',
      boxShadow:
        '0 14px 26px -12px rgba(59, 89, 152, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(59, 89, 152, 0.2)',
    },
  },
  google: {
    backgroundColor: '#dd4b39',
    color: '#fff',
    boxShadow:
      '0 2px 2px 0 rgba(221, 75, 57, 0.14), 0 3px 1px -2px rgba(221, 75, 57, 0.2), 0 1px 5px 0 rgba(221, 75, 57, 0.12)',
    '&:hover,&:focus': {
      backgroundColor: '#dd4b39',
      color: '#fff',
      boxShadow:
        '0 14px 26px -12px rgba(221, 75, 57, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(221, 75, 57, 0.2)',
    },
  },
  github: {
    backgroundColor: '#333333',
    color: '#fff',
    boxShadow:
      '0 2px 2px 0 rgba(51, 51, 51, 0.14), 0 3px 1px -2px rgba(51, 51, 51, 0.2), 0 1px 5px 0 rgba(51, 51, 51, 0.12)',
    '&:hover,&:focus': {
      backgroundColor: '#333333',
      color: '#fff',
      boxShadow:
        '0 14px 26px -12px rgba(51, 51, 51, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(51, 51, 51, 0.2)',
    },
  },
  simple: {
    '&': {
      color: greyColor,
      background: 'transparent',
      boxShadow: 'none',
    },
    '&:hover': {
      color: blackColor,
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
    '&$black': {
      '&,&:focus,&:hover,&:visited': {
        color: blackColor,
      },
    },
    '&$white': {
      '&,&:focus,&:hover,&:visited': {
        color: whiteColor,
      },
    },
    '&$twitter': {
      '&,&:focus,&:hover,&:visited': {
        color: '#55acee',
      },
    },
    '&$facebook': {
      '&,&:focus,&:hover,&:visited': {
        color: '#3b5998',
      },
    },
    '&$google': {
      '&,&:focus,&:hover,&:visited': {
        color: '#dd4b39',
      },
    },
    '&$github': {
      '&': {
        color: '#333333',
      },
      '&:hover,&:focus': {
        color: whiteColor,
      },
    },
  },
  transparent: {
    '&,&:hover': {
      color: 'inherit',
      background: 'transparent',
      boxShadow: 'none',
    },
  },
  disabled: {
    opacity: '0.65',
    pointerEvents: 'none',
  },
  lg: {
    padding: '1rem 2.125rem',
    fontSize: '1rem',
    lineHeight: '1.333333',
    borderRadius: '0.2rem',
  },
  sm: {
    padding: '0.5rem 1.125rem',
    fontSize: '0.75rem',
    lineHeight: '1.5',
    borderRadius: '0.2rem',
  },
  round: {
    borderRadius: '30px',
  },
  block: {
    width: '100% !important',
  },
  link: {
    '&': {
      backgroundColor: 'transparent',
      color: '#999999',
      boxShadow: 'none',
      margin: 0,
      padding: 0,
      lineHeight: '1.5',
    },
    '&:hover,&:focus': {
      color: '#999999',
      backgroundColor: 'transparent',
      boxShadow: 'none',
      textDecoration: 'underline',
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
    '&$black': {
      '&,&:focus,&:hover,&:visited': {
        color: blackColor,
      },
    },
    '&$white': {
      '&,&:focus,&:hover,&:visited': {
        color: whiteColor,
      },
    },
    '&$twitter': {
      '&,&:focus,&:hover,&:visited': {
        color: '#55acee',
      },
    },
    '&$facebook': {
      '&,&:focus,&:hover,&:visited': {
        color: '#3b5998',
      },
    },
    '&$google': {
      '&,&:focus,&:hover,&:visited': {
        color: '#dd4b39',
      },
    },
    '&$github': {
      '&,&:focus,&:hover,&:visited': {
        color: '#333333',
      },
    },
  },
  outlined: {
    '&': {
      backgroundColor: 'transparent',
      color: '#999999',
      border: '1px solid #999999',
      boxShadow: 'none',
    },
    '&:hover,&:focus': {
      color: '#fff',
      opacity: '0.8',
      boxShadow: 'none',
    },
    '&$primary': {
      '&': {
        color: primaryColor,
        border: `1px solid ${primaryColor}`,
      },
      '&:hover,&:focus': {
        color: '#fff',
      },
    },
    '&$secondary': {
      '&': {
        color: secondaryColor,
        border: `1px solid ${secondaryColor}`,
      },
      '&:hover,&:focus': {
        color: '#fff',
      },
    },
    '&$info': {
      '&': {
        color: infoColor,
        border: `1px solid ${infoColor}`,
      },
      '&:hover,&:focus': {
        color: '#fff',
      },
    },
    '&$success': {
      '&': {
        color: successColor,
        border: `1px solid ${successColor}`,
      },
      '&:hover,&:focus': {
        color: '#fff',
      },
    },
    '&$warning': {
      '&': {
        color: warningColor,
        border: `1px solid ${warningColor}`,
      },
      '&:hover,&:focus': {
        color: '#fff',
      },
    },
    '&$error': {
      '&': {
        color: errorColor,
        border: `1px solid ${errorColor}`,
      },
      '&:hover,&:focus': {
        color: '#fff',
      },
    },
    '&$black': {
      '&': {
        color: blackColor,
        border: `1px solid ${blackColor}`,
      },
      '&:hover,&:focus': {
        color: '#fff',
      },
    },
    '&$white': {
      '&': {
        color: whiteColor,
        border: `1px solid ${whiteColor}`,
      },
      '&:hover,&:focus': {
        color: '#000',
      },
    },
    '&$twitter': {
      '&': {
        color: '#55acee',
        border: `1px solid #55acee`,
      },
      '&:hover,&:focus': {
        color: '#fff',
      },
    },
    '&$facebook': {
      '&': {
        color: '#3b5998',
        border: `1px solid #3b5998`,
      },
      '&:hover,&:focus': {
        color: '#fff',
      },
    },
    '&$google': {
      '&': {
        color: '#dd4b39',
        border: `1px solid #dd4b39`,
      },
      '&:hover,&:focus': {
        color: '#fff',
      },
    },
    '&$github': {
      '&': {
        color: '#333333',
        border: `1px solid #333333`,
      },
      '&:hover,&:focus': {
        color: '#fff',
      },
    },
    '&$transparent': {
      '&': {
        border: `none`,
      },
    },
  },
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
  cap: {
    textTransform: 'capitalize',
  },
  iht: {
    textTransform: 'inherit',
  },
  lwc: {
    textTransform: 'lowercase',
  },
  nn: {
    textTransform: 'none',
  },
  upc: {
    textTransform: 'uppercase',
  },
});

export default buttonStyles;
