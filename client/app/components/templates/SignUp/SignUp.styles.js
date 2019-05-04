const signUpStyles = theme => ({
  '@global #__next': {
    height: '100%',
  },
  pageWrapper: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%',
  },
  contentWrapper: {
    display: 'flex',
    flexGrow: 1,
    color: theme.palette.custom.grey,
  },
  cell: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoBlock: {
    background: theme.palette.common.black,
    textAlign: 'center',

    '& h2': {
      color: theme.palette.common.white,
    },
  },
  utilityBlock: {
    background: theme.palette.custom.brand,

    '& h1': {
      color: theme.palette.common.white,
    },
  },
  heading: {
    marginBottom: '24px',
  },
  formWrapper: {},
  inputWrapper: {
    marginBottom: '24px',
  },
  icon: {
    fontSize: 22,
  },
  buttonsWrapper: {
    margin: '48px 0',
    alignItems: 'center',
  },
  btnSubmit: {
    margin: 0,
  },
  btnLinkWrapper: {
    textAlign: 'right',
  },
  btnLink: {
    margin: 0,
    paddingLeft: 0,
    paddingRight: 0,
  },
  consentWrapper: {
    paddingTop: '24px',
  },
  consentContainer: {
    margin: 0,
    padding: 0,
    '& label': {
      marginRight: 0,
    },
    '& button': {
      padding: 0,
      paddingLeft: '4px',
      lineHeight: '24px',
    },
  },
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
  footerWrapper: {
    padding: '24px 0',
    position: 'absolute',
    bottom: '2em',
  },
  footerList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: 'auto',
    margin: '0 auto',
    textAlign: 'center',
  },
  footerItem: {
    display: 'inline-block',
    padding: '0 16px 0 16px',
  },
  copyrightWrapper: {
    position: 'absolute',
    bottom: '1em',
    padding: '24px 0',
    textAlign: 'center',
    fontSize: '12px',
  },
});

export default signUpStyles;
