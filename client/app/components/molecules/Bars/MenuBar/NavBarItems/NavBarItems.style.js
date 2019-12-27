const navBarItemsStyles = theme => ({
  button: theme.mixins.gutters({
    borderRadius: 0,
    justifyContent: 'flex-start',
    width: '100%',
    // transition: theme.transitions.create('background-color', {
    //   duration: theme.transitions.duration.shortest,
    // }),
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    transition: 'none',
    '&:hover': {
      // textDecoration: 'none',
    },
  }),
  subHeader: {
    color: theme.palette.grey[500],
  },
  navItem: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  navLink: {
    fontWeight: theme.typography.fontWeightRegular,
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0,
    color: theme.palette.grey[500],
    fill: theme.palette.grey[500],
  },
  navLinkButton: {
    '&:hover': {
      fill: theme.palette.common.white,
      color: theme.palette.common.white,
      background: theme.palette.primary.main,
    },
  },
});

export default navBarItemsStyles;
