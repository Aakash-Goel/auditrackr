import React from 'react';
import { bool, func } from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import AppBar from '../../molecules/Bars/AppBar';

const styles = {};

const propTypes = {
  isMenuOpen: bool,
  onMenuOpen: func,
  onMenuClose: func,
  onLogout: func,
};

const defaultProps = {
  isMenuOpen: false,
  onMenuOpen: () => {},
  onMenuClose: () => {},
  onLogout: () => {},
};

const Header = props => {
  const { isMenuOpen, onMenuOpen, onMenuClose, onLogout } = props;

  return (
    <AppBar
      isMenuOpen={isMenuOpen}
      onHandleDrawerOpen={onMenuOpen}
      onHandleDrawerClose={onMenuClose}
      onHandleLogout={onLogout}
    />
  );
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default withStyles(styles)(Header);
