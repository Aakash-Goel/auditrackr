import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { object, string, bool, func, node } from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { ListItem, ListSubheader, Collapse } from '@material-ui/core';

import { Button } from 'app-components';
import { Link } from 'app-routes';

import navBarItemsStyles from './NavBarItems.style';

const propTypes = {
  classes: object.isRequired,
  title: string.isRequired,
  href: string,
  children: node,
  onClick: func,
  openImmediately: bool,
  isSubHeader: bool,
};

const defaultProps = {
  href: null,
  children: null,
  onClick: () => {},
  openImmediately: false,
  isSubHeader: false,
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
    } = this.props;

    if (isSubHeader) {
      return (
        <ListSubheader className={classes.subHeader}>{title}</ListSubheader>
      );
    }

    if (href) {
      return (
        <ListItem className={classes.navLink} disableGutters>
          <Link to={href}>
            <Button
              simple
              fullWidth
              textTransform="nn"
              color="transparent"
              href={href}
              activeClassName={classes.activeButton}
              className={classnames(classes.button, classes.navLinkButton)}
              disableRipple
              onClick={onClick}
            >
              {title}
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
