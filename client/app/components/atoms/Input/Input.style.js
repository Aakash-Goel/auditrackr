const inputStyles = theme => ({
  disabled: {
    '&:before': {
      borderColor: 'transparent !important',
    },
  },
  underline: {
    '&:hover:not($disabled):before,&:before': {
      borderColor: `${theme.palette.custom.grey} !important`,
    },
  },
  underlineError: {
    '&:after': {
      borderColor: theme.palette.error.main,
    },
  },
  underlineSuccess: {
    '&:after': {
      borderColor: theme.palette.custom.success,
    },
  },
  whiteUnderline: {
    '&:hover:not($disabled):before,&:before': {
      borderColor: theme.palette.common.white,
    },
    '&:after': {
      borderColor: theme.palette.common.white,
    },
  },
  labelRoot: {
    color: theme.palette.custom.grey,
  },
  labelRootError: {
    color: `${theme.palette.error.main} !important`,
  },
  labelRootSuccess: {
    color: `${theme.palette.custom.success} !important`,
  },
  formControl: {
    fontWeight: 500,
    position: 'relative',
    '& svg,& .fab,& .far,& .fal,& .fas,& .material-icons': {
      color: theme.palette.custom.grey,
    },
  },
  input: {
    color: theme.palette.primary.main,
    '&,&::placeholder': {
      opacity: '1',
    },
    '&::placeholder': {
      color: theme.palette.custom.grey,
    },
  },
  whiteInput: {
    '&,&::placeholder': {
      color: theme.palette.common.white,
      opacity: '1',
    },
  },
});

export default inputStyles;
