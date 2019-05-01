import React from 'react';
import { object, bool, node, string } from 'prop-types';
import classnames from 'classnames';
import { isEmpty } from 'lodash';

import withStyles from '@material-ui/core/styles/withStyles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';

import inputStyles from './Input.style';

/**
 * Type checking - Define prop types
 * @private
 */
const propTypes = {
  classes: object.isRequired,
  labelText: node,
  labelProps: object,
  id: string,
  inputProps: object,
  formControlProps: object,
  inputRootCustomClasses: string,
  error: bool,
  success: bool,
  white: bool,
};

/**
 * Define default prop values
 * @private
 */
const defaultProps = {
  labelText: null,
  labelProps: {},
  id: '',
  inputProps: {},
  formControlProps: {},
  inputRootCustomClasses: '',
  error: false,
  success: false,
  white: false,
};

const CustomInput = ({ ...props }) => {
  const {
    classes,
    formControlProps,
    labelText,
    id,
    labelProps,
    inputProps,
    error,
    white,
    inputRootCustomClasses,
    success,
  } = props;

  const labelClasses = classnames({
    [` ${classes.labelRootError}`]: error,
    [` ${classes.labelRootSuccess}`]: success && !error,
  });
  const underlineClasses = classnames({
    [classes.underlineError]: error,
    [classes.underlineSuccess]: success && !error,
    [classes.underline]: true,
    [classes.whiteUnderline]: white,
  });
  const marginTop = classnames({
    [inputRootCustomClasses]: inputRootCustomClasses !== undefined,
  });
  const inputClasses = classnames({
    [classes.input]: true,
    [classes.whiteInput]: white,
  });
  let formControlClasses;
  if (!isEmpty(formControlProps)) {
    formControlClasses = classnames(
      formControlProps.className,
      classes.formControl
    );
  } else {
    formControlClasses = classes.formControl;
  }

  return (
    <FormControl {...formControlProps} className={formControlClasses}>
      {labelText && (
        <InputLabel
          className={`${classes.labelRoot} ${labelClasses}`}
          htmlFor={id}
          {...labelProps}
        >
          {labelText}
        </InputLabel>
      )}
      <Input
        classes={{
          input: inputClasses,
          root: marginTop,
          disabled: classes.disabled,
          underline: underlineClasses,
        }}
        id={id}
        {...inputProps}
      />
    </FormControl>
  );
};

CustomInput.propTypes = propTypes;
CustomInput.defaultProps = defaultProps;

export default withStyles(inputStyles)(CustomInput);
