import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { object, array, bool, string, func } from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { Drawer, List } from '@material-ui/core';

import { pageToTitle } from '../../../../utils/helpersUtil';
import NavBarItems from './NavBarItems';

import menuBarStyles from './MenuBar.style';

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
  activePage: null,
  onRequestClose: () => {},
};

/* eslint-disable react/no-array-index-key */
class MenuBar extends PureComponent {
  renderNavItems() {
    const { classes, pages, onRequestClose, isOpen, activePage } = this.props;
    const navItems = [];
    if (pages && pages.length) {
      pages.forEach((page, index) => {
        navItems.push(
          <NavBarItems
            key={index}
            title={pageToTitle(page)}
            href={page.pathUrl}
            onClick={onRequestClose}
            isSubHeader={page.isSubHeader}
            icon={page.icon}
            isOpen={isOpen}
            activePage={activePage}
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

MenuBar.propTypes = propTypes;
MenuBar.defaultProps = defaultProps;

export default withStyles(menuBarStyles)(MenuBar);
