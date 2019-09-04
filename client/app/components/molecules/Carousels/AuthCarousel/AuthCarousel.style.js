const authCarouselStyles = () => ({
  carouselWrapper: {
    marginBottom: '24px',
  },
  carouselHeading: {
    marginBottom: '24px',
  },
  carouselImgWrapper: {
    '& img': {
      margin: '0 auto',
      maxWidth: '100%',
      width: '400px',
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
        width: '1em',
        height: '1em',
        padding: 0,
        lineHeight: 0,
        textIndent: '-999px',
        borderRadius: '50%',
        background: 'transparent',
        opacity: 0.5,
        border: `1px solid #999`,

        '&:hover': {
          opacity: 0.75,
          border: `1px solid #6D1B7B`,
        },
      },
    },

    '& li.slick-active button': {
      opacity: 1,
      border: `1px solid #9c27b0`,
      background: `#9c27b0`,
    },
  },
});

export default authCarouselStyles;
