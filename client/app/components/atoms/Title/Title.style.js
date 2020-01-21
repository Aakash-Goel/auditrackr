import headingsStyles from '../../../styles/mixins/headings';
import { textTransform } from '../../../styles/variables';

const titleStyles = theme => ({
  heading: {
    ...headingsStyles.default,
  },
  'h1-primary': {
    ...headingsStyles.h1Primary,
  },
  'h2-primary': {
    ...headingsStyles.h2Primary,
  },
  'h3-primary': {
    ...headingsStyles.h3Primary,
  },
  'h4-primary': {
    ...headingsStyles.h4Primary,
  },
  'h5-primary': {
    ...headingsStyles.h5Primary,
  },
  'h6-primary': {
    ...headingsStyles.h6Primary,
  },
  'h1-secondary': {
    ...headingsStyles.h1Secondary,
  },
  'h2-secondary': {
    ...headingsStyles.h2Secondary,
  },
  'h3-secondary': {
    ...headingsStyles.h3Secondary,
  },
  'h4-secondary': {
    ...headingsStyles.h4Secondary,
  },
  'h5-secondary': {
    ...headingsStyles.h5Secondary,
  },
  'h6-secondary': {
    ...headingsStyles.h6Secondary,
  },

  // colors
  primary: {
    color: theme.palette.primary.main,
  },
  secondary: {
    color: theme.palette.secondary.main,
  },
  info: {
    color: theme.palette.info.main,
  },
  success: {
    color: theme.palette.success.main,
  },
  warning: {
    color: theme.palette.warning.main,
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

export default titleStyles;
