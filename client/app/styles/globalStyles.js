import {
  defaultFont,
  primaryFontFamily,
  secondaryFontFamily,
} from './theme/muiKit';

export default {
  '@global': {
    html: {
      height: '100%',
    },
    body: {
      ...defaultFont,
      height: '100%',
      background: '#e6ecf0',
      color: '#14171a',
    },
    'h1, h2, h3, h4': {
      fontFamily: secondaryFontFamily,
      fontWeight: 400,
      margin: 0,
    },
    'h5, h6': {
      fontFamily: primaryFontFamily,
      fontWeight: 400,
    },
    'ol, ul': {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
};
