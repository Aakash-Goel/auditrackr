import React from 'react';
import { bool, array } from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import MenuBar from '../../molecules/MenuBar';

const styles = {};

const propTypes = {
  menuItems: array.isRequired,
  isMenuOpen: bool,
};

const defaultProps = {
  isMenuOpen: false,
};

const Menu = props => {
  const { isMenuOpen, menuItems } = props;

  return <MenuBar isOpen={isMenuOpen} pages={menuItems} />;
};

Menu.propTypes = propTypes;
Menu.defaultProps = defaultProps;

export default withStyles(styles)(Menu);
