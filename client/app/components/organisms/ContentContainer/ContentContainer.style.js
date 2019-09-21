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
    padding: theme.spacing.unit * 3,
    color: '#fff',
  },
  contentContainer: {
    margin: `1em 0`,
  },
  paperRoot: {
    ...theme.mixins.gutters(),
    position: 'relative',
    overflow: 'hidden',
    transition: `box-shadow .25s, -webkit-box-shadow .25s`,
    color: theme.palette.common.black,
    padding: theme.spacing.unit * 4,
  },
});

export default contentContainerStyles;
