import paragraphsStyles from '../../../styles/mixins/paragraphs';
import { textTransform } from '../../../styles/variables';

const paragraphStyles = theme => ({
  paragraph: {
    ...paragraphsStyles.default,
  },

  // colors
  primary: {
    color: theme.palette.primary.main,
  },
  secondary: {
    color: theme.palette.secondary.main,
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
  white: {
    color: theme.palette.common.white,
  },
  black: {
    color: theme.palette.common.black,
  },
  grey: {
    color: theme.palette.grey[500],
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
});

export default paragraphStyles;
