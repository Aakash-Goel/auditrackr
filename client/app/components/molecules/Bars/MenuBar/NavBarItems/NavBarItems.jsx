import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { object, string, bool, func, node } from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { ListItem, ListSubheader, Collapse } from '@material-ui/core';

import Button from '../../../../atoms/Button';
import Icon from '../../../../atoms/Icon';
import { Link } from '../../../../../../routes';

import navBarItemsStyles from './NavBarItems.style';

const propTypes = {
  classes: object.isRequired,
  title: string.isRequired,
  activePage: object.isRequired,
  href: string,
  children: node,
  onClick: func,
  openImmediately: bool,
  isSubHeader: bool,
  icon: func,
  isOpen: bool,
};

const defaultProps = {
  href: null,
  children: null,
  onClick: () => {},
  openImmediately: false,
  isSubHeader: false,
  icon: null,
  isOpen: false,
};

class NavBarItems extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  componentWillMount() {
    if (this.props.openImmediately) {
      this.setState({ open: true });
    }
  }

  handleClick = () => {
    this.setState(prevState => ({ open: !prevState.open }));
  };

  render() {
    const {
      classes,
      children,
      title,
      href,
      openImmediately,
      onClick,
      isSubHeader,
      icon,
      isOpen,
      activePage,
    } = this.props;

    if (isSubHeader) {
      const navSubHeader = isOpen ? (
        <ListSubheader className={classes.subHeader}>{title}</ListSubheader>
      ) : null;
      return navSubHeader;
    }

    if (href) {
      return (
        <ListItem
          selected={href === activePage.asPath}
          className={classes.navLink}
          disableGutters
        >
          <Link to={href}>
            <Button
              simple
              fullWidth
              textTransform="nn"
              color="transparent"
              href={href}
              className={classnames(classes.button, classes.navLinkButton)}
              disableRipple
              onClick={onClick}
              size="md"
              startIcon={icon && <Icon type={icon} />}
            >
              {isOpen ? title : ''}
            </Button>
          </Link>
        </ListItem>
      );
    }

    return (
      <ListItem className={classes.navItem} disableGutters>
        <Button
          classes={{
            root: classes.button,
            label: openImmediately ? 'algolia-lvl0' : '',
          }}
          onClick={this.handleClick}
        >
          {title}
        </Button>
        <Collapse in={this.state.open} transitionDuration="auto" unmountOnExit>
          {children}
        </Collapse>
      </ListItem>
    );
  }
}

NavBarItems.propTypes = propTypes;
NavBarItems.defaultProps = defaultProps;

export default withStyles(navBarItemsStyles)(NavBarItems);
