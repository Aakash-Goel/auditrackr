import React from 'react';
import { object } from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

import switchStyles from './Switch.style';

/**
 * Type checking - Define prop types
 * @private
 */
const propTypes = {
  formControlLabelProps: object,
  switchProps: object,
};

/**
 * Define default prop values
 * @private
 */
const defaultProps = {
  formControlLabelProps: {},
  switchProps: {},
};

const CustomSwitch = ({ ...props }) => {
  const { formControlLabelProps, switchProps } = props;

  return (
    <FormControlLabel
      {...formControlLabelProps}
      control={<Switch color="primary" {...switchProps} />}
    />
  );
};

CustomSwitch.propTypes = propTypes;
CustomSwitch.defaultProps = defaultProps;

export default withStyles(switchStyles)(CustomSwitch);
