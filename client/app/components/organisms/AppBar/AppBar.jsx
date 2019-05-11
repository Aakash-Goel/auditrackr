import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { object, bool, string, func } from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Badge } from '@material-ui/core';
import { Menu, ChevronLeft, NotificationsOutlined } from '@material-ui/icons';

import appBarStyles from './AppBar.style';

const propTypes = {
  classes: object.isRequired,
  isOpen: bool,
  className: string,
  onHandleDrawerClose: func,
  onHandleDrawerOpen: func,
};

const defaultProps = {
  isOpen: false,
  className: '',
  onHandleDrawerClose: () => {},
  onHandleDrawerOpen: () => {},
};

class CustomAppBar extends PureComponent {
  render() {
    const {
      classes,
      isOpen,
      onHandleDrawerClose,
      onHandleDrawerOpen,
    } = this.props;

    return (
      <AppBar
        position="fixed"
        className={classnames(classes.appBar, isOpen && classes.appBarShift)}
      >
        <Toolbar disableGutters className={classes.toolbar}>
          <div
            className={classnames(
              classes.logo,
              !isOpen && classes.logoClosedDrawer
            )}
          >
            <span>icon</span>
            <span className={classnames(!isOpen && classes.displayHide)}>
              Logo Desktop
            </span>
          </div>
          <div
            className={classnames(
              classes.topNav,
              !isOpen && classes.topNavClosedDrawer
            )}
          >
            <IconButton
              color="inherit"
              aria-label="Close drawer"
              onClick={onHandleDrawerClose}
              className={classnames(
                classes.menuButton,
                !isOpen && classes.menuButtonHidden
              )}
            >
              <ChevronLeft />
            </IconButton>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={onHandleDrawerOpen}
              className={classnames(
                classes.menuButton,
                isOpen && classes.menuButtonHidden
              )}
            >
              <Menu />
            </IconButton>
            <div className={classes.contentWrapper}>Dashboard</div>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="primary">
                <NotificationsOutlined />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

CustomAppBar.propTypes = propTypes;
CustomAppBar.defaultProps = defaultProps;

export default withStyles(appBarStyles)(CustomAppBar);
