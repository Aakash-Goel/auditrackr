import headingsStyles from './mixins/headings';
import paragraphsStyles from './mixins/paragraphs';
import linksStyles from './mixins/links';
import { defaultFont, colors } from './variables';

export default {
  '@global': {
    // '@font-face': {
    //   fontFamily: 'BebasNeue',
    //   fontWeight: 400,
    //   fontStyle: 'normal',
    //   src:
    //     'url("/static/fonts/bebas_neue/BebasNeue-Regular.otf") format("opentype")',
    // },
    'html, body': {
      height: '100%',
      width: '100%',
    },
    body: {
      font: defaultFont,
      margin: 0,
      background: colors.white,
      color: colors.black,
      overflowX: 'hidden',
    },
    'h1, h2, h3, h4, h5, h6': {
      ...headingsStyles.default,
    },
    h1: {
      ...headingsStyles.h1Primary,
    },
    'h1.secondary': {
      ...headingsStyles.h1Secondary,
    },
    h2: {
      ...headingsStyles.h2Secondary,
    },
    'h2.primary': {
      ...headingsStyles.h2Primary,
    },
    h3: {
      ...headingsStyles.h3Secondary,
    },
    'h3.primary': {
      ...headingsStyles.h3Primary,
    },
    h4: {
      ...headingsStyles.h4Secondary,
    },
    'h4.primary': {
      ...headingsStyles.h4Primary,
    },
    h5: {
      ...headingsStyles.h5Secondary,
    },
    'h5.primary': {
      ...headingsStyles.h5Primary,
    },
    h6: {
      ...headingsStyles.h6Secondary,
    },
    'h6.primary': {
      ...headingsStyles.h6Primary,
    },
    p: {
      ...paragraphsStyles.default,
    },
    a: {
      ...linksStyles.default,
    },
    'a:hover, a:visited': {
      ...linksStyles.defaultHover,
    },
    'ol, ul': {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
};
