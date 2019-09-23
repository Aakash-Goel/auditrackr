const linkStyles = theme => ({
  link: {
    cursor: 'pointer',
    '&:hover,&:focus': {
      textDecoration: 'none',
    },
  },
  primary: {
    color: theme.palette.primary.main,
    '&,&:focus,&:visited': {
      color: theme.palette.primary.main,
    },
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
  secondary: {
    color: theme.palette.secondary.main,
    '&,&:focus,&:visited': {
      color: theme.palette.secondary.main,
    },
    '&:hover,&:visited': {
      color: theme.palette.common.white,
    },
  },
  info: {
    color: theme.palette.custom.info,
  },
  success: {
    color: theme.palette.custom.success,
  },
  warning: {
    color: theme.palette.custom.warning,
  },
  error: {
    color: theme.palette.error.main,
  },
  black: {
    color: theme.palette.common.black,
  },
  white: {
    color: theme.palette.common.white,
  },
  inherit: {
    color: 'inherit',
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

export default linkStyles;
