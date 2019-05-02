const loginStyles = theme => ({
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
  },
  utilityBlock: {
    background: theme.palette.custom.brand,

    '& h1': {
      color: theme.palette.common.white,
    },
  },
  loginSignupWrapper: {
    width: '70%',
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
  helper: {
    textAlign: 'center',
    '& button': {
      padding: 0,
      paddingLeft: '4px',
      lineHeight: '24px',
    },
  },
});

export default loginStyles;
