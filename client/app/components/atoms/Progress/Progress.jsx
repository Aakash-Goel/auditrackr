import React from 'react';
import { object, oneOf } from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';
import LinearProgress from '@material-ui/core/LinearProgress';

import progressStyles from './Progress.style';

/**
 * Type checking - Define prop types
 * @private
 */
const propTypes = {
  classes: object.isRequired,
  color: oneOf([
    'primary',
    'info',
    'success',
    'warning',
    'error',
    'rose',
    'grey',
  ]),
};

/**
 * Define default prop values
 * @private
 */
const defaultProps = {
  color: 'grey',
};

const CustomProgress = ({ ...props }) => {
  const { classes, color, ...rest } = props;

  return (
    <LinearProgress
      {...rest}
      classes={{
        root: `${classes.root} ${classes[`${color}Background`]}`,
        bar: `${classes.bar} ${classes[color]}`,
        bar2Buffer: `${classes[`${color}BufferBackground`]}`,
      }}
    />
  );
};

CustomProgress.propTypes = propTypes;
CustomProgress.defaultProps = defaultProps;

export default withStyles(progressStyles)(CustomProgress);
