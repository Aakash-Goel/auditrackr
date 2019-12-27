const inputStyles = theme => {
  // theme constants
  const successColor = theme.palette.success.main;
  const errorColor = theme.palette.error.main;
  const whiteColor = theme.palette.common.white;
  const greyColor = theme.palette.grey[500];

  const styleObject = {
    // form control - top most container
    formControl: {
      '& svg,& .fab,& .far,& .fal,& .fas,& .material-icons': {
        color: whiteColor,
      },
    },

    // custom label styles
    labelRootError: {
      color: `${errorColor} !important`,
    },
    labelRootSuccess: {
      color: `${successColor} !important`,
    },

    // custom input underline
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

    // disabled class | not required as of now
    disabled: {},

    // input styles
    input: {
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
  };

  return styleObject;
};

export default inputStyles;
