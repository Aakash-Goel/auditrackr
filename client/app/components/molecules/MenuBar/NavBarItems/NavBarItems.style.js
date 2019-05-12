const navBarItemsStyles = theme => ({
  button: theme.mixins.gutters({
    borderRadius: 0,
    justifyContent: 'flex-start',
    textTransform: 'none',
    width: '100%',
    transition: theme.transitions.create('background-color', {
      duration: theme.transitions.duration.shortest,
    }),
    '&:hover': {
      textDecoration: 'none',
    },
  }),
  subHeader: {
    color: '#666',
  },
  navItem: {
    ...theme.typography.body2,
    display: 'block',
    paddingTop: 0,
    paddingBottom: 0,
  },
  navLink: {
    fontWeight: theme.typography.fontWeightRegular,
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0,
    color: theme.palette.custom.grey,
  },
  navLinkButton: {
    textIndent: 24,
    fontSize: 14,
    margin: 0,

    '&:hover': {
      color: theme.palette.common.white,
      background: theme.palette.primary.dark,
      transition: 'all .5s',
    },
  },
  activeButton: {
    color: theme.palette.text.primary,
  },
});

export default navBarItemsStyles;
