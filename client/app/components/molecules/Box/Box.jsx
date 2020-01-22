import React from 'react';
import { oneOfType, string, node } from 'prop-types';

import Box from '@material-ui/core/Box';

const propTypes = {
  children: oneOfType([string, node]),
};

const defaultProps = {
  children: null,
};

const CustomBox = ({ ...props }) => {
  const { children, ...rest } = props;

  if (children) {
    return <Box {...rest}>{children}</Box>;
  }

  return null;
};

CustomBox.propTypes = propTypes;
CustomBox.defaultProps = defaultProps;

export default CustomBox;
