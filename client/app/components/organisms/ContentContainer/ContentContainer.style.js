const contentContainerStyles = theme => ({
  contentWrapperBefore: {
    position: 'absolute',
    zIndex: -1,
    top: 0,
    left: 0,
    width: '100%',
    height: '186px',
    transition: '.3s ease all',
    backgroundColor: theme.palette.primary.main,
  },
  contentWrapper: {
    padding: theme.spacing(3), // 24px
    paddingTop: theme.spacing(10), // 80px
  },
  contentContainer: {
    margin: theme.spacing(2, 0), // 16px 0
  },
});

export default contentContainerStyles;
