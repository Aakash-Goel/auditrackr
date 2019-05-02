import {
  primaryColor,
  successColor,
  errorColor,
  whiteColor,
  greyColor,
} from '../../../styles/theme/muiKit';

const inputStyles = () => ({
  disabled: {
    '&:before': {
      borderColor: 'transparent !important',
    },
  },
  underline: {
    '&:hover:not($disabled):before,&:before': {
      borderColor: `${greyColor} !important`,
    },
  },
  underlineError: {
    '&:after': {
      borderColor: errorColor,
    },
  },
  underlineSuccess: {
    '&:after': {
      borderColor: successColor,
    },
  },
  whiteUnderline: {
    '&:hover:not($disabled):before,&:before': {
      borderColor: whiteColor,
    },
    '&:after': {
      borderColor: whiteColor,
    },
  },
  labelRoot: {
    color: greyColor,
  },
  labelRootError: {
    color: `${errorColor} !important`,
  },
  labelRootSuccess: {
    color: `${successColor} !important`,
  },
  formControl: {
    fontWeight: 500,
    position: 'relative',
    '& svg,& .fab,& .far,& .fal,& .fas,& .material-icons': {
      color: greyColor,
    },
  },
  input: {
    color: primaryColor,
    '&,&::placeholder': {
      opacity: '1',
    },
    '&::placeholder': {
      color: greyColor,
    },
  },
  whiteInput: {
    '&,&::placeholder': {
      color: whiteColor,
      opacity: '1',
    },
  },
});

export default inputStyles;
