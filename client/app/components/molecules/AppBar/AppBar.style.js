const drawerWidth = 240;

const appBarStyles = theme => ({
  appBar: {
    backgroundColor: theme.palette.custom.brand,
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    // marginLeft: drawerWidth,
    // width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  logo: {
    position: 'absolute',
    width: '100%',
    height: '64px',
    lineHeight: '64px',
    textAlign: 'center',
    transition: 'width .25s ease-in-out',
  },
  displayHide: {
    display: 'none',
  },
  contentWrapper: {
    flexGrow: 1,
  },
  topNav: {
    width: '100%',
    height: '64px',
    padding: '64px 0 0',
    transition: 'padding .25s ease-in-out',
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
  },
  topNavClosedDrawer: {
    padding: '0 0 0 64px',
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  avatar: {
    width: 30,
    height: 30,
  },

  '@media (min-width: 768px)': {
    logo: {
      display: 'inline-block',
      width: drawerWidth,
    },
    logoClosedDrawer: {
      width: '64px',
    },
    topNav: {
      padding: '0 0 0 240px',
    },
    topNavClosedDrawer: {
      padding: '0 0 0 64px',
    },
  },
});

export default appBarStyles;
