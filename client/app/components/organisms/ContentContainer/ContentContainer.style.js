const contentContainerStyles = theme => ({
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
