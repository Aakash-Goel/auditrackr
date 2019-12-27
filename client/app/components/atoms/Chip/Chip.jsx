import React from 'react';

import Chip from '@material-ui/core/Chip';

import withStyles from '@material-ui/core/styles/withStyles';

const propTypes = {};

const defaultProps = {};

const chipStyles = {};

const CustomChip = ({ ...props }) => {
  return <Chip {...props} />;
};

CustomChip.propTypes = propTypes;
CustomChip.defaultProps = defaultProps;

export default withStyles(chipStyles)(CustomChip);
