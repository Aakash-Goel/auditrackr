import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { object, bool, string, func } from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import {
  AppBar as MuiAppBar,
  Toolbar,
  IconButton,
  Badge,
  Avatar,
  MenuList,
  MenuItem,
  Popper,
  Grow,
  ClickAwayListener,
} from '@material-ui/core';

import Button from '../../../atoms/Button';
import Icon from '../../../atoms/Icon';
import Paper from '../../Paper';
import { Link } from '../../../../../routes';
import APP_URLS from '../../../../constants/appUrls';
import addIcon from '../../../../static/icons/add-plus-button.svg?sprite'; // eslint-disable-line import/no-unresolved
import backIcon from '../../../../static/icons/back.svg?sprite'; // eslint-disable-line import/no-unresolved
import alarmIcon from '../../../../static/icons/notifications-bell-button.svg?sprite'; // eslint-disable-line import/no-unresolved
import menuIcon from '../../../../static/icons/menu-button.svg?sprite'; // eslint-disable-line import/no-unresolved

import appBarStyles from './AppBar.style';

const propTypes = {
  classes: object.isRequired,
  isMenuOpen: bool,
  className: string,
  onHandleDrawerClose: func,
  onHandleDrawerOpen: func,
  onHandleLogout: func,
};

const defaultProps = {
  isMenuOpen: false,
  className: '',
  onHandleDrawerClose: () => {},
  onHandleDrawerOpen: () => {},
  onHandleLogout: () => {},
};

class CustomAppBar extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPopOverOpen: false,
    };

    this.handleClose = this.handleClose.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ isPopOverOpen: false });
  };

  handleToggle = () => {
    this.setState(state => ({ isPopOverOpen: !state.isPopOverOpen }));
  };

  handleLogout = () => {
    this.setState({ isPopOverOpen: false });
    this.props.onHandleLogout();
  };

  render() {
    const {
      classes,
      isMenuOpen,
      onHandleDrawerClose,
      onHandleDrawerOpen,
    } = this.props;

    const { isPopOverOpen } = this.state;

    return (
      <MuiAppBar
        position="fixed"
        className={classnames(
          classes.appBar,
          isMenuOpen && classes.appBarShift
        )}
      >
        <Toolbar disableGutters className={classes.toolbar}>
          <div
            className={classnames(
              classes.logo,
              !isMenuOpen && classes.logoClosedDrawer
            )}
          >
            <span>icon</span>
            <span className={classnames(!isMenuOpen && classes.displayHide)}>
              {' '}
              logo
            </span>
          </div>
          <div
            className={classnames(
              classes.topNav,
              !isMenuOpen && classes.topNavClosedDrawer
            )}
          >
            <IconButton
              color="inherit"
              aria-label="Close drawer"
              onClick={onHandleDrawerClose}
              className={classnames(
                classes.menuButton,
                !isMenuOpen && classes.menuButtonHidden
              )}
            >
              <Icon type={backIcon} />
            </IconButton>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={onHandleDrawerOpen}
              className={classnames(
                classes.menuButton,
                isMenuOpen && classes.menuButtonHidden
              )}
            >
              <Icon type={menuIcon} />
            </IconButton>
            <div className={classes.contentWrapper} />
            <Link to={APP_URLS.auditCreate.url}>
              <Button
                outlined
                color="secondary"
                href={APP_URLS.auditCreate.url}
                size="sm"
                startIcon={<Icon type={addIcon} />}
              >
                Start Audit
              </Button>
            </Link>
            <IconButton className={classnames(classes.icon)}>
              <Badge badgeContent={4} color="primary">
                <Icon type={alarmIcon} width="20px" height="20px" />
              </Badge>
            </IconButton>
            <div>
              <IconButton
                color="inherit"
                buttonRef={node => {
                  this.anchorEl = node;
                }}
                aria-owns={isPopOverOpen ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={this.handleToggle}
              >
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatars/1.jpg"
                  className={classes.avatar}
                  component="span"
                />
              </IconButton>
              <Popper
                open={isPopOverOpen}
                anchorEl={this.anchorEl}
                transition
                disablePortal
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    id="menu-list-grow"
                    style={{
                      transformOrigin:
                        placement === 'bottom' ? 'center top' : 'center bottom',
                    }}
                  >
                    <Paper
                      className={classes.popperContainer}
                      borderColor="none"
                    >
                      <ClickAwayListener onClickAway={this.handleClose}>
                        <MenuList>
                          <MenuItem onClick={this.handleClose}>
                            Profile
                          </MenuItem>
                          <MenuItem onClick={this.handleLogout}>
                            Logout
                          </MenuItem>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </div>
          </div>
        </Toolbar>
      </MuiAppBar>
    );
  }
}

CustomAppBar.propTypes = propTypes;
CustomAppBar.defaultProps = defaultProps;

export default withStyles(appBarStyles)(CustomAppBar);
