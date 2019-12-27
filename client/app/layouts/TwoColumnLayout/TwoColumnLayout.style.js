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
    color: theme.palette.grey[500],
  },
  cell: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoBlock: {
    background: theme.palette.primary.main,
    textAlign: 'center',

    '& h2': {
      color: theme.palette.common.white,
    },
  },
  utilityBlock: {
    background: '#fff',

    '& h1': {
      color: theme.palette.common.black,
    },
  },
});

export default twoColumnLayoutStyles;
