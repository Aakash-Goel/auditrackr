import {
  greyColor,
  defaultFont,
  primaryColor,
  primaryBoxShadow,
  infoColor,
  infoBoxShadow,
  successColor,
  successBoxShadow,
  warningColor,
  warningBoxShadow,
  errorColor,
  errorBoxShadow,
} from '../../../styles/themes/muiKit';

const selectStyles = () => ({
  formControl: {
    position: 'relative',
    '& svg,& .fab,& .far,& .fal,& .fas,& .material-icons': {
      color: greyColor,
    },
  },
  labelRoot: {
    color: greyColor,
    fontWeight: '400',
  },
  labelRootError: {
    color: `${errorColor} !important`,
  },
  labelRootSuccess: {
    color: `${successColor} !important`,
  },
  select: {
    color: primaryColor,
    fontWeight: '400',
    '&,&::placeholder': {
      opacity: '1',
    },
    '&::placeholder': {
      color: greyColor,
    },
  },
  selectItem: {
    ...defaultFont,
    // fontSize: "13px",
    padding: '10px 20px',
    // margin: '0 5px',
    // borderRadius: '2px',
    position: 'relative',
    transition: 'all 150ms linear',
    display: 'block',
    clear: 'both',
    fontWeight: '400',
    height: 'fit-content',
    // color: "#333",
    whiteSpace: 'nowrap',
  },
  selectedMenuItem: {
    '&:hover': {
      boxShadow: 'none !important',
      color: 'inherit !important',
    },
  },
  blackHover: {
    '&:hover': {
      boxShadow:
        '0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(33, 33, 33, 0.4)',
      backgroundColor: '#212121',
      color: '#fff',
    },
  },
  primaryHover: {
    '&:hover': {
      backgroundColor: primaryColor,
      color: '#FFFFFF',
      ...primaryBoxShadow,
    },
  },
  'primaryHover.selected': {
    border: '2px solid red',
  },
  infoHover: {
    '&:hover': {
      backgroundColor: infoColor,
      color: '#FFFFFF',
      ...infoBoxShadow,
    },
  },
  successHover: {
    '&:hover': {
      backgroundColor: successColor,
      color: '#FFFFFF',
      ...successBoxShadow,
    },
  },
  warningHover: {
    '&:hover': {
      backgroundColor: warningColor,
      color: '#FFFFFF',
      ...warningBoxShadow,
    },
  },
  errorHover: {
    '&:hover': {
      backgroundColor: errorColor,
      color: '#FFFFFF',
      ...errorBoxShadow,
    },
  },
  selectDividerItem: {
    margin: '5px 0',
    backgroundColor: 'rgba(0, 0, 0, 0.12)',
    height: '1px',
    overflow: 'hidden',
  },
  disabled: {
    '&:before': {
      borderColor: 'transparent !important',
    },
  },
});

export default selectStyles;
