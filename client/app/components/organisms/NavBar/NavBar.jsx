import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { object, array, bool, string, func } from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { Drawer, List } from '@material-ui/core';

import NavBarItems from './NavBarItems';
import { pageToTitle } from '../../../utils/helpers';

import navBarStyles from './NavBar.style';

const propTypes = {
  classes: object.isRequired,
  pages: array.isRequired,
  onRequestClose: func,
  isOpen: bool,
  className: string,
  activePage: object,
};

const defaultProps = {
  isOpen: false,
  className: '',
  activePage: {
    pathname: '',
  },
  onRequestClose: () => {},
};

/* eslint-disable react/no-array-index-key */
class NavBar extends PureComponent {
  renderNavItems() {
    const { classes, pages, onRequestClose } = this.props;
    const navItems = [];
    if (pages && pages.length) {
      pages.forEach((page, index) => {
        navItems.push(
          <NavBarItems
            key={index}
            title={pageToTitle(page)}
            href={page.pathname}
            onClick={onRequestClose}
            isSubHeader={page.isSubHeader}
          />
        );
      });
    }
    return <List className={classes.nav}>{navItems}</List>;
  }

  render() {
    const { classes, isOpen } = this.props;

    const drawer = (
      <div className={classes.navWrapper}>{this.renderNavItems()}</div>
    );

    return (
      <Drawer
        variant="permanent"
        classes={{
          paper: classnames(
            classes.drawerPaper,
            !isOpen && classes.drawerPaperClose
          ),
        }}
        open={isOpen}
      >
        <div className={classes.appBarSpacer} />
        {drawer}
      </Drawer>
    );
  }
}

NavBar.propTypes = propTypes;
NavBar.defaultProps = defaultProps;

export default withStyles(navBarStyles)(NavBar);
