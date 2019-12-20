import React from 'react';
import { bool, func } from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import AppBar from '../../molecules/Bars/AppBar';

const styles = {};

const propTypes = {
  isMenuOpen: bool,
  onMenuOpen: func,
  onMenuClose: func,
};

const defaultProps = {
  isMenuOpen: false,
  onMenuOpen: () => {},
  onMenuClose: () => {},
};

const Header = props => {
  const { isMenuOpen, onMenuOpen, onMenuClose } = props;

  return (
    <AppBar
      isMenuOpen={isMenuOpen}
      onHandleDrawerOpen={onMenuOpen}
      onHandleDrawerClose={onMenuClose}
    />
  );
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default withStyles(styles)(Header);
