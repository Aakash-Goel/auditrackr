const twoColumnLayoutStyles = theme => ({
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
});

export default twoColumnLayoutStyles;
