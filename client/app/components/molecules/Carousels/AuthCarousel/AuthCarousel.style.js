const imgWidth = '400px';
const dotsWidth = '1em';
const dotsHeight = '1em';
const dotsRadius = '50%';
const dotsOpacity = 0.5;
const dotsHoverOpacity = 0.75;
const dotsActiveOpacity = 1;

const authCarouselStyles = theme => ({
  carouselWrapper: {
    marginBottom: theme.spacing(3), // 24px
  },
  carouselHeading: {
    marginBottom: theme.spacing(3), // 24px
  },
  carouselImgWrapper: {
    '& img': {
      margin: '0 auto',
      maxWidth: '100%',
      width: imgWidth,
    },
  },
  carouselDotsClass: {
    position: 'absolute',
    bottom: '-1.5em',
    display: 'block',
    width: '100%',
    padding: 0,
    margin: 0,
    listStyle: 'none',
    textAlign: 'center',

    '& li': {
      position: 'relative',
      display: 'inline-block',
      margin: '0 0.375em',
      padding: 0,
      cursor: 'pointer',

      '& button': {
        display: 'block',
        cursor: 'pointer',
        width: dotsWidth,
        height: dotsHeight,
        padding: 0,
        lineHeight: 0,
        textIndent: '-999px',
        borderRadius: dotsRadius,
        background: 'transparent',
        opacity: dotsOpacity,
        border: `1px solid ${theme.palette.grey[500]}`,

        '&:hover': {
          opacity: dotsHoverOpacity,
          border: `1px solid ${theme.palette.common.white}`,
          background: theme.palette.common.white,
        },
      },
    },

    '& li.slick-active button, li.slick-active button:hover': {
      opacity: dotsActiveOpacity,
      border: `1px solid ${theme.palette.secondary.main}`,
      background: theme.palette.secondary.main,
    },
  },
});

export default authCarouselStyles;
