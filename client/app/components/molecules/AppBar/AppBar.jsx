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
  Paper,
  Grow,
  ClickAwayListener,
} from '@material-ui/core';
import {
  Menu as MenuIcon,
  ChevronLeft,
  NotificationsOutlined,
} from '@material-ui/icons';

import Button from '../../atoms/Button';
import Icon from '../../atoms/Icon';
import { Link } from '../../../../routes';
import addIcon from '../../../static/icons/add-plus-button.svg?sprite'; // eslint-disable-line import/no-unresolved

import appBarStyles from './AppBar.style';

const propTypes = {
  classes: object.isRequired,
  isMenuOpen: bool,
  className: string,
  onHandleDrawerClose: func,
  onHandleDrawerOpen: func,
};

const defaultProps = {
  isMenuOpen: false,
  className: '',
  onHandleDrawerClose: () => {},
  onHandleDrawerOpen: () => {},
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
              <ChevronLeft />
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
              <MenuIcon />
            </IconButton>
            <div className={classes.contentWrapper} />
            <Link to="/account/audit/create">
              <Button
                outlined
                color="secondary"
                href="/account/audit/create"
                size="sm"
                startIcon={<Icon type={addIcon} />}
              >
                Start Audit
              </Button>
            </Link>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="primary">
                <NotificationsOutlined />
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
                    <Paper>
                      <ClickAwayListener onClickAway={this.handleClose}>
                        <MenuList>
                          <MenuItem onClick={this.handleClose}>
                            Profile
                          </MenuItem>
                          <MenuItem onClick={this.handleClose}>
                            My account
                          </MenuItem>
                          <MenuItem onClick={this.handleClose}>Logout</MenuItem>
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
