import React from 'react';
import { object } from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import AppBar from '../../../organisms/AppBar';
import NavBar from '../../../organisms/NavBar';
import pages from '../../../../constants/navBarList';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  title: {
    flexGrow: 1,
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  mainSection: {
    position: 'relative',
  },
  contentWrapper: {
    padding: theme.spacing.unit * 3,
    color: '#fff',
  },
  contentWrapperBefore: {
    position: 'absolute',
    zIndex: -1,
    top: 0,
    left: 0,
    width: '100%',
    height: '186px',
    transition: '.3s ease all',
    backgroundColor: theme.palette.custom.brand,
  },
});

class Dashboard extends React.Component {
  state = {
    open: true,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar
          isOpen={this.state.open}
          onHandleDrawerClose={this.handleDrawerClose}
          onHandleDrawerOpen={this.handleDrawerOpen}
        />

        <NavBar isOpen={this.state.open} pages={pages} />

        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <div className={classes.mainSection}>
            <div className={classes.contentWrapperBefore} />
            <div className={classes.contentWrapper}>
              <div>
                <div>Some dummy section</div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: object.isRequired,
};

export default withStyles(styles)(Dashboard);
