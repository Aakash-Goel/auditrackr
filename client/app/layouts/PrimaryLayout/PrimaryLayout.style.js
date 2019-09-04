const primaryLayoutStyles = theme => ({
  pageWrapper: {
    display: 'flex',
  },
  mainWrapper: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  appBarSpacer: theme.mixins.toolbar,
  sectionWrapper: {
    position: 'relative',
  },
});

export default primaryLayoutStyles;
