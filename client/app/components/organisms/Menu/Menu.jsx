import React from 'react';
import { connect } from 'react-redux';
import { bool, array, object } from 'prop-types';
import { createStructuredSelector } from 'reselect';

import { withStyles } from '@material-ui/core/styles';

import MenuBar from '../../molecules/MenuBar';

import { makeSelectRoute } from '../../../lib/routes/selectors';

const menuStyles = {};

const propTypes = {
  menuItems: array.isRequired,
  routeInfo: object.isRequired,
  isMenuOpen: bool,
};

const defaultProps = {
  isMenuOpen: false,
};

const Menu = props => {
  const { isMenuOpen, menuItems, routeInfo } = props;

  return (
    <MenuBar isOpen={isMenuOpen} pages={menuItems} activePage={routeInfo} />
  );
};

Menu.propTypes = propTypes;
Menu.defaultProps = defaultProps;

export const mapStateToProps = createStructuredSelector({
  routeInfo: makeSelectRoute(),
});

export default connect(
  mapStateToProps,
  null
)(withStyles(menuStyles)(Menu));
