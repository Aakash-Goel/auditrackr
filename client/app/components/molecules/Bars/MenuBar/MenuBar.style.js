const drawerWidth = 240;

const menuBarStyles = theme => ({
  nav: {
    padding: 0,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    borderRight: 0,
    backgroundColor: theme.palette.common.black,
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7), // 56px
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(8), // 64px
    },
  },
  appBarSpacer: theme.mixins.toolbar,
});

export default menuBarStyles;
