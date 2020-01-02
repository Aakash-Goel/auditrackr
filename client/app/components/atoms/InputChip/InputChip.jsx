import React from 'react';
import { object, bool, node, string, func, oneOfType } from 'prop-types';
import classnames from 'classnames';
import { isEmpty } from 'lodash';

import ChipInput from 'material-ui-chip-input';
import blue from '@material-ui/core/colors/blue';
import withStyles from '@material-ui/core/styles/withStyles';

import Chip from '../Chip';

import inputChipStyles from './InputChip.style';

/**
 * Type checking - Define prop types
 * @private
 */
const propTypes = {
  classes: object.isRequired,
  labelText: node,
  labelProps: object,
  inputProps: object,
  formControlProps: object,
  formHelperTextProps: object,
  validators: object,
  validationRule: string,
  onInputChipChange: func,
  onChangeHandler: func,
  onBlurHandler: func,
  inputRootCustomClasses: string,
  helperText: oneOfType([node, string]),
  showFieldLevelErrorMsz: bool,
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
  inputProps: {},
  formControlProps: {},
  formHelperTextProps: {},
  validators: {},
  validationRule: '',
  onInputChipChange: () => {},
  onChangeHandler: () => {},
  onBlurHandler: () => {},
  inputRootCustomClasses: '',
  helperText: null,
  showFieldLevelErrorMsz: true,
  error: false,
  success: false,
  white: false,
};

class InputChip extends React.PureComponent {
  constructor(props) {
    super(props);

    this.handleOnUpdateInput = this.handleOnUpdateInput.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
  }

  /**
   *  handle onChangeHandler callback if passed
   * @param {*} e event
   */
  handleOnUpdateInput(e) {
    const { onChangeHandler } = this.props;

    if (onChangeHandler) {
      onChangeHandler(e);
    }
  }

  handleOnChange(val, rule, isRequired) {
    const { inputProps } = this.props;
    const { name } = inputProps;

    const inputValues = val.length ? [...val] : [''];

    this.props.onInputChipChange(name, inputValues, rule, isRequired);
  }

  handleOnBlur(e) {
    this.props.onBlurHandler(e);
  }

  /* eslint-disable complexity */
  render() {
    const {
      classes,
      labelText,
      labelProps,
      inputProps,
      formControlProps,
      formHelperTextProps,
      validationRule,
      helperText,
      showFieldLevelErrorMsz,
      error,
      success,
      white,
      inputRootCustomClasses,
    } = this.props;

    const labelClasses = classnames({
      [` ${classes.labelRootError}`]: error,
      [` ${classes.labelRootSuccess}`]: success && !error,
    });
    const underlineClasses = classnames({
      [classes.underlineError]: error,
      [classes.underlineSuccess]: success && !error,
      [classes.whiteUnderline]: white,
    });
    const marginTop = classnames({
      [inputRootCustomClasses]: inputRootCustomClasses !== undefined,
    });
    const inputClasses = classnames({
      [classes.input]: true,
      [`errorFormField`]: error,
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

    let formHelperMsz = helperText;
    const fieldError = `${inputProps.name}Error`;
    const isRequired = formControlProps ? formControlProps.required : false;
    const { id, type, ...otherInputProps } = inputProps;
    const formHelperErrorMsz = showFieldLevelErrorMsz && this.props[fieldError];
    const formHelperProps = { ...formHelperTextProps };
    if (formHelperErrorMsz) {
      formHelperProps.id = `${id}_error_msg`;
      formHelperProps.error = showFieldLevelErrorMsz;
      formHelperMsz = formHelperErrorMsz;
    }

    return (
      <ChipInput
        id={id}
        required={isRequired}
        label={labelText}
        InputLabelProps={{ ...labelProps }}
        InputProps={{
          ...(this.props[fieldError] && {
            'aria-describedby': `${inputProps.id}_error_msg`,
          }),
          classes: {
            root: marginTop,
            input: inputClasses,
            disabled: classes.disabled,
            underline: underlineClasses,
          },
          ...otherInputProps,
        }}
        helperText={formHelperMsz}
        FormHelperTextProps={{
          ...formHelperProps,
        }}
        classes={{
          label: labelClasses,
          chipContainer: classes.chipContainer,
        }}
        className={formControlClasses}
        {...formControlProps}
        onChange={val => this.handleOnChange(val, validationRule, isRequired)}
        onUpdateInput={e => this.handleOnUpdateInput(e)}
        onBlur={e => this.handleOnBlur(e)}
        chipRenderer={(
          {
            value,
            isFocused,
            isDisabled,
            isReadOnly,
            handleClick,
            handleDelete,
            className,
          },
          key
        ) => (
          <Chip
            key={key}
            className={className}
            style={{
              pointerEvents: isDisabled || isReadOnly ? 'none' : undefined,
              backgroundColor: isFocused ? blue[300] : undefined,
            }}
            onClick={handleClick}
            onDelete={handleDelete}
            label={value}
          />
        )}
      />
    );
  }
}

InputChip.propTypes = propTypes;
InputChip.defaultProps = defaultProps;

export default withStyles(inputChipStyles)(InputChip);
