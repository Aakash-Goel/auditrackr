import { fade } from '@material-ui/core/styles/colorManipulator';

const selectStyles = theme => {
  // theme constants
  const primaryColor = theme.palette.primary.main;
  const successColor = theme.palette.custom.success;
  const errorColor = theme.palette.error.main;
  const whiteColor = theme.palette.common.white;
  const greyColor = theme.palette.grey[500];
  const { fontFamilyPrimary, fontSizeRegular } = theme.typography;

  const styleObject = {
    // form control - top most container
    formControl: {
      width: '100%',
      '& svg,& .fab,& .far,& .fal,& .fas,& .material-icons': {
        color: greyColor,
      },
    },

    // custom label styles
    labelRootError: {
      color: `${errorColor} !important`,
    },
    labelRootSuccess: {
      color: `${successColor} !important`,
    },

    // select styles
    select: {
      '&,&::placeholder': {
        opacity: '1',
      },
      '&::placeholder': {
        color: greyColor,
      },
    },
    // options styles
    selectItem: {
      display: 'block',
      position: 'relative',
      padding: theme.spacing(1.25, 2.5), // 10px 20px
      height: 'fit-content',
      clear: 'both',
      transition: 'all 150ms linear',
    },
    selectedMenuItem: {
      '&:hover': {
        boxShadow: 'none',
      },
    },
    primaryHover: {
      '&&:hover': {
        color: whiteColor,
        backgroundColor: primaryColor,
      },
    },
    // select header styles
    selectHeaderItem: {
      cursor: 'default',
      pointerEvents: 'none',
      fontFamily: fontFamilyPrimary,
      fontSize: fontSizeRegular,
      borderBottom: `1px solid ${fade(greyColor, 0.35)}`,
      margin: theme.spacing(0, 0.25), // 0px 8px
    },
    // divider styles
    selectDividerItem: {
      /** not required as of now, but keeping it */
    },
    // disabled option styles
    disabled: {
      '&:before': {
        /** not required as of now, but keeping it */
      },
    },
  };

  return styleObject;
};

export default selectStyles;
