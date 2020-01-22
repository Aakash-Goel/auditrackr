import {
  primaryColor,
  secondaryColor,
  infoColor,
  successColor,
  warningColor,
  errorColor,
  whiteColor,
  blackColor,
  greyColor,
} from './colors';
import {
  primaryFontFamily,
  secondaryFontFamily,
  fontUnit,
  fontSizeExtraLarge,
  fontSizeLarge,
  fontSizeExtraMedium,
  fontSizeMedium,
  fontSizeRegular,
  fontSizeNormal,
  fontSizeSmall,
  fontSizeExtraSmall,
  fontWeightBold,
  fontWeightMedium,
  fontWeightNormal,
  fontWeightLight,
  fontWeightThin,
} from './fonts';

/**
 * box-shadow
 */
export const primaryBoxShadow = {
  boxShadow:
    '0 12px 20px -10px rgba(150, 60, 189, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(150, 60, 189, 0.2)',
};
export const secondaryBoxShadow = {
  boxShadow:
    '0 12px 20px -10px rgba(255, 111, 97, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 111, 97, 0.2)',
};
export const infoBoxShadow = {
  boxShadow:
    '0 12px 20px -10px rgba(70, 136, 241, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(70, 136, 241, 0.2)',
};
export const successBoxShadow = {
  boxShadow:
    '0 12px 20px -10px rgba(68, 172, 94, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(68, 172, 94, 0.2)',
};
export const warningBoxShadow = {
  boxShadow:
    '0 12px 20px -10px rgba(248, 188, 47, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(248, 188, 47, 0.2)',
};
export const errorBoxShadow = {
  boxShadow:
    '0 12px 20px -10px rgba(233, 72, 62, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(233, 72, 62, 0.2)',
};
export const whiteBoxShadow = {
  boxShadow:
    '0 12px 20px -10px rgba(255, 255, 255, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 255, 255, 0.2)',
};
export const blackBoxShadow = {
  boxShadow:
    '0 12px 20px -10px rgba(20, 23, 26, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(20, 23, 26, 0.2)',
};
export const greyBoxShadow = {
  boxShadow:
    '0 12px 20px -10px rgba(153, 153, 153, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(153, 153, 153, 0.2)',
};

/**
 * colors
 */
export const colors = {
  primary: primaryColor, // #963cbd | rgb(150, 60, 189)
  secondary: secondaryColor, // #ff6f61 | rgb(255, 111, 97)
  info: infoColor, // #4688f1 | rgb(70, 136, 241)
  success: successColor, // #44ac5e | rgb(68, 172, 94)
  warning: warningColor, // #f8bc2f | rgb(248, 188, 47)
  error: errorColor, // #e9483e | rgb(233, 72, 62)
  white: whiteColor, // #fff | rgb(255, 255, 255)
  black: blackColor, // #14171a | rgb(20, 23, 26)
  grey: greyColor, // #999 | rgb(153, 153, 153)
};

/**
 * font-family
 */
export const fontFamily = {
  primary: primaryFontFamily, // '"Josefin Sans", "Helvetica", "Arial", sans-serif'
  secondary: secondaryFontFamily, // '"Raleway", "Helvetica", "Arial", sans-serif'
};

/**
 * font-size
 */
export const fontSize = {
  extraLarge: fontSizeExtraLarge + fontUnit, // 3rem | 48px
  large: fontSizeLarge + fontUnit, // 2rem | 32px
  extraMedium: fontSizeExtraMedium + fontUnit, // 1.5rem | 24px
  medium: fontSizeMedium + fontUnit, // 1.25 | 20px
  regular: fontSizeRegular + fontUnit, // 1.125rem | 18px
  normal: fontSizeNormal + fontUnit, // 1rem | 16px
  small: fontSizeSmall + fontUnit, // 0.875rem | 14px
  extraSmall: fontSizeExtraSmall + fontUnit, // 0.75rem | 12px
};

/**
 * font-weight
 */
export const fontWeight = {
  bold: fontWeightBold, // 600
  medium: fontWeightMedium, // 500
  normal: fontWeightNormal, // 400
  light: fontWeightLight, // 300
  thin: fontWeightThin, // 100
};

/**
 * line-height
 */
export const lineHeight = {
  extraLarge: 1.2,
  large: 1.25,
  extraMedium: 1.35,
  medium: 1.4,
  regular: 1.45,
  normal: 1.75,
  small: 1.5,
  extraSmall: 1.5,
};

/**
 * letter-spacing
 */
export const letterSpacing = {
  regular: '1px',
  normal: '0.8px',
  small: '0.6px',
  extraSmall: '0.4px',
};

/**
 * font headings
 */
export const primaryH1ExtraLargeFontLight = `${fontWeight.light} ${fontSize.extraLarge}/${lineHeight.extraLarge} ${fontFamily.primary}`; // 300 48px/1.2 "Josefin Sans", "Helvetica", "Arial", sans-serif
export const primaryH1ExtraLargeFontMedium = `${fontWeight.medium} ${fontSize.extraLarge}/${lineHeight.extraLarge} ${fontFamily.primary}`; // 500 48px/1.2 "Josefin Sans", "Helvetica", "Arial", sans-serif
export const secondaryH1ExtraLargeFontLight = `${fontWeight.light} ${fontSize.extraLarge}/${lineHeight.extraLarge} ${fontFamily.secondary}`; // 300 48px/1.2 "Raleway", "Helvetica", "Arial", sans-serif
export const secondaryH1ExtraLargeFontNormal = `${fontWeight.normal} ${fontSize.extraLarge}/${lineHeight.extraLarge} ${fontFamily.secondary}`; // 400 48px/1.2 "Raleway", "Helvetica", "Arial", sans-serif
export const secondaryH1ExtraLargeFontMedium = `${fontWeight.medium} ${fontSize.extraLarge}/${lineHeight.extraLarge} ${fontFamily.secondary}`; // 500 48px/1.2 "Raleway", "Helvetica", "Arial", sans-serif

export const primaryH2LargeFontLight = `${fontWeight.light} ${fontSize.large}/${lineHeight.large} ${fontFamily.primary}`; // 300 32px/1.25 "Josefin Sans", "Helvetica", "Arial", sans-serif
export const primaryH2LargeFontMedium = `${fontWeight.medium} ${fontSize.large}/${lineHeight.large} ${fontFamily.primary}`; // 500 32px/1.25 "Josefin Sans", "Helvetica", "Arial", sans-serif
export const secondaryH2LargeFontLight = `${fontWeight.light} ${fontSize.large}/${lineHeight.large} ${fontFamily.secondary}`; // 300 32px/1.25 "Raleway", "Helvetica", "Arial", sans-serif
export const secondaryH2LargeFontMedium = `${fontWeight.medium} ${fontSize.large}/${lineHeight.large} ${fontFamily.secondary}`; // 500 32px/1.25 "Raleway", "Helvetica", "Arial", sans-serif

export const primaryH3ExtraMediumFontLight = `${fontWeight.light} ${fontSize.extraMedium}/${lineHeight.extraMedium} ${fontFamily.primary}`; // 300 24px/1.35 "Josefin Sans", "Helvetica", "Arial", sans-serif
export const primaryH3ExtraMediumFontMedium = `${fontWeight.medium} ${fontSize.extraMedium}/${lineHeight.extraMedium} ${fontFamily.primary}`; // 500 24px/1.35 "Josefin Sans", "Helvetica", "Arial", sans-serif
export const secondaryH3ExtraMediumFontLight = `${fontWeight.light} ${fontSize.extraMedium}/${lineHeight.extraMedium} ${fontFamily.secondary}`; // 300 24px/1.35 "Raleway", "Helvetica", "Arial", sans-serif
export const secondaryH3ExtraMediumFontMedium = `${fontWeight.medium} ${fontSize.extraMedium}/${lineHeight.extraMedium} ${fontFamily.secondary}`; // 500 24px/1.35 "Raleway", "Helvetica", "Arial", sans-serif

export const primaryH4MediumFontLight = `${fontWeight.light} ${fontSize.medium}/${lineHeight.medium} ${fontFamily.primary}`; // 300 20px/1.4 "Josefin Sans", "Helvetica", "Arial", sans-serif
export const primaryH4MediumFontMedium = `${fontWeight.medium} ${fontSize.medium}/${lineHeight.medium} ${fontFamily.primary}`; // 500 20px/1.4 "Josefin Sans", "Helvetica", "Arial", sans-serif
export const secondaryH4MediumFontLight = `${fontWeight.light} ${fontSize.medium}/${lineHeight.medium} ${fontFamily.secondary}`; // 300 20px/1.4 "Raleway", "Helvetica", "Arial", sans-serif
export const secondaryH4MediumFontMedium = `${fontWeight.medium} ${fontSize.medium}/${lineHeight.medium} ${fontFamily.secondary}`; // 500 20px/1.4 "Raleway", "Helvetica", "Arial", sans-serif

export const primaryH5RegularFont = `${fontWeight.light} ${fontSize.regular}/${lineHeight.regular} ${fontFamily.primary}`; // 500 18px/1.45 "Josefin Sans", "Helvetica", "Arial", sans-serif
export const secondaryH5RegularFont = `${fontWeight.medium} ${fontSize.regular}/${lineHeight.regular} ${fontFamily.secondary}`; // 500 18px/1.45 "Raleway", "Helvetica", "Arial", sans-serif

export const primaryH6NormalFont = `${fontWeight.medium} ${fontSize.normal}/${lineHeight.normal} ${fontFamily.primary}`; // 500 16px/1.5 "Josefin Sans", "Helvetica", "Arial", sans-serif
export const secondaryH6NormalFont = `${fontWeight.medium} ${fontSize.normal}/${lineHeight.normal} ${fontFamily.secondary}`; // 500 16px/1.5 "Raleway", "Helvetica", "Arial", sans-serif

/**
 * font default
 */
export const defaultFont = `${fontWeight.normal} ${fontSize.normal}/${lineHeight.normal} ${fontFamily.secondary}`; // 400 16px/1.5 "Raleway", "Helvetica", "Arial", sans-serif

/**
 * text
 */
export const textTransform = {
  cap: 'capitalize',
  iht: 'inherit',
  lwc: 'lowercase',
  nn: 'none',
  upc: 'uppercase',
};

export const textAlign = {
  left: 'left',
  right: 'right',
  center: 'center',
};

export const statusColors = {
  Complete: colors.info,
  InProgress: colors.error,
  InReview: colors.warning,
  Closed: colors.success,
};
