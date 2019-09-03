import React from 'react';
import { object, bool, string } from 'prop-types';
import { isEmpty } from 'lodash';

import withStyles from '@material-ui/core/styles/withStyles';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormHelperText from '@material-ui/core/FormHelperText';

import checkboxStyles from './Checkbox.style';

/**
 * Checkbox: https://material-ui.com/components/checkboxes/
 */
const propTypes = {
  formControlLabelProps: object,
  checkboxProps: object,
  showFieldLevelErrorMsz: bool,
  error: bool,
  groupLabel: string,
};

/**
 * Define default prop values
 * @private
 */
const defaultProps = {
  formControlLabelProps: {},
  checkboxProps: {},
  showFieldLevelErrorMsz: false,
  error: false,
  groupLabel: null,
};

class CustomCheckbox extends React.PureComponent {
  /**
   * Constructor
   *
   * @param props
   */
  constructor(props) {
    super(props);

    this.uniqueID = `checkbox-${CustomCheckbox.incrementInstanceCounter()}`;
  }

  render() {
    const {
      formControlLabelProps,
      checkboxProps,
      showFieldLevelErrorMsz,
      error,
      groupLabel,
    } = this.props;

    if (isEmpty(checkboxProps)) {
      return null;
    }
    const checkboxId = checkboxProps.id || this.uniqueID;
    const checkboxName = checkboxProps.inputProps
      ? checkboxProps.inputProps.name || this.uniqueID
      : this.uniqueID;
    const fieldError = `${checkboxName}Error`;

    return (
      <FormControl error={error}>
        {groupLabel && (
          <FormLabel component="legend" htmlFor={checkboxId}>
            {groupLabel}
          </FormLabel>
        )}
        <FormControlLabel
          {...formControlLabelProps}
          control={
            <Checkbox id={checkboxId} color="primary" {...checkboxProps} />
          }
        />
        {showFieldLevelErrorMsz && (
          <FormHelperText id={`${checkboxId}_error_msg`}>
            {this.props[fieldError] || ''}
          </FormHelperText>
        )}
      </FormControl>
    );
  }
}

CustomCheckbox.propTypes = propTypes;
CustomCheckbox.defaultProps = defaultProps;

CustomCheckbox.instanceCounter = 0;
CustomCheckbox.incrementInstanceCounter = () => {
  CustomCheckbox.instanceCounter += 1;
  return CustomCheckbox.instanceCounter;
};

export default withStyles(checkboxStyles)(CustomCheckbox);
