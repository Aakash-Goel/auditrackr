import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Button from '../../../atoms/Button';

/* eslint-disable no-unused-vars, no-undef */
class ListItemLink extends React.Component {
  renderLink = itemProps => (
    <Link href={this.props.to}>
      <a>{itemProps.children} </a>
    </Link>
  );
  // renderLink = itemProps => {
  //   console.log('1212==itemProps== ', itemProps);
  //   return <Link href={this.props.to}>asdad</Link>;
  // };

  render() {
    const { icon, primary } = this.props;
    return (
      <li>
        <ListItem button component={this.renderLink}>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={primary} />
        </ListItem>
      </li>
    );
  }
}

ListItemLink.propTypes = {
  icon: PropTypes.node.isRequired,
  primary: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};

export const mainListItems = (
  <List>
    <ListItemLink to="/login" primary="Dashboard" icon={<DashboardIcon />} />
    <ListItemLink to="/login" primary="Orders" icon={<ShoppingCartIcon />} />

    <ListItem disableGutters>
      <Link href="/login">
        <Button href="/login" simple fullWidth textTransform="nn">
          <PeopleIcon />
          Login me
        </Button>
      </Link>
      {/* <Button variant="button" href="/login" disableRipple>
        Testing me
      </Button> */}
    </ListItem>
  </List>
);

export const secondaryListItems = (
  <List>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </List>
);
