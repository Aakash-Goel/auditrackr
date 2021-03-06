import React from 'react';
import { object, bool, node, string, func } from 'prop-types';
import classnames from 'classnames';
import _isEmpty from 'lodash/isEmpty';

import withStyles from '@material-ui/core/styles/withStyles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';

import Select from '../Select';
import InputChip from '../InputChip';
import { validateChange } from '../../../utils/validation/validationUtil';

import inputStyles from './Input.style';

/**
 * Type checking - Define prop types
 * @private
 */
const propTypes = {
  classes: object.isRequired,
  labelText: node,
  labelProps: object,
  identifier: string.isRequired,
  validationRule: string,
  inputProps: object,
  formControlProps: object,
  formWrapperSelector: object.isRequired,
  selectProps: object,
  validators: object,
  onSelectChangeHandler: func,
  onInputChipChangeHandler: func,
  onChangeHandler: func,
  onBlurHandler: func,
  onErrorCallback: func,
  onValidationDoneCallback: func,
  updateFormIdentifierData: func.isRequired,
  addFormIdentifierData: func.isRequired,
  inputRootCustomClasses: string,
  fieldErrorMsg: string,
  showFieldLevelErrorMsz: bool,
  error: bool,
  success: bool,
  white: bool,
  isChangedOnce: bool,
};

/**
 * Define default prop values
 * @private
 */
const defaultProps = {
  labelText: null,
  labelProps: {},
  validationRule: '',
  inputProps: {},
  formControlProps: {},
  selectProps: {},
  validators: {},
  onSelectChangeHandler: () => {},
  onInputChipChangeHandler: () => {},
  onChangeHandler: () => {},
  onBlurHandler: () => {},
  onErrorCallback: () => {},
  onValidationDoneCallback: () => {},
  inputRootCustomClasses: '',
  fieldErrorMsg: '',
  showFieldLevelErrorMsz: true,
  error: false,
  success: false,
  white: false,
  isChangedOnce: false,
};

class CustomInput extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleOnBlur = this.handleOnBlur.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.updateStateAndCallBackOnBlur = this.updateStateAndCallBackOnBlur.bind(
      this
    );
  }

  componentWillMount() {
    if (!_isEmpty(this.props.inputProps) && this.props.inputProps.name) {
      const {
        inputProps,
        formControlProps,
        validationRule,
        // value,
        identifier,
        addFormIdentifierData,
        validators,
        fieldErrorMsg,
        isChangedOnce,
      } = this.props;
      const { name, type } = inputProps;
      const isRequired = formControlProps ? formControlProps.required : false;
      const dataValue = type === 'multiple' ? [''] : '';
      if (addFormIdentifierData) {
        addFormIdentifierData({
          identifier,
          fieldData: {
            name,
            rule: validationRule,
            value: dataValue,
            required: isRequired,
            isChangedOnce,
            validators: validators || {},
            [`${name}Error`]: fieldErrorMsg,
          },
        });
      }
    }
  }

  updateStateAndCallBackOnBlur(
    validation,
    errorKey,
    obj,
    event,
    callCallback = true
  ) {
    const {
      onValidationDoneCallback,
      onErrorCallback,
      updateFormIdentifierData,
    } = this.props;
    if (validation && validation[errorKey] !== '') {
      if (updateFormIdentifierData) {
        updateFormIdentifierData(obj);
      }
      if (onErrorCallback) {
        onErrorCallback();
      }
    } else {
      if (updateFormIdentifierData) {
        updateFormIdentifierData(obj);
      }
      if (onValidationDoneCallback && callCallback) {
        // params needs to be discussed
        onValidationDoneCallback(event);
      }
    }
  }

  validateAndReturnErrorObject(name, value, rule) {
    const { identifier } = this.props;

    const validation = validateChange(name, value, rule);
    const nameKey = Object.keys(validation)[0];
    const errorKey = Object.keys(validation)[1];
    const obj = {
      [nameKey]: {
        value: validation[nameKey],
        [errorKey]: validation[errorKey],
      },
      identifier,
    };

    return {
      validation,
      errorKey,
      obj,
    };
  }

  /**
   * check if password field needs to be reset, by comapring current error message with new error passed in props.
   */
  handleOnBlur(rule, isRequired, e) {
    const { name } = e.target;
    const value = e.target.value.trim();

    const {
      updateFormIdentifierData,
      identifier,
      formWrapperSelector,
    } = this.props;

    let errorKey;
    let checkInputHasChanged = false;

    if (!_isEmpty(formWrapperSelector)) {
      checkInputHasChanged =
        formWrapperSelector[identifier][name].isChangedOnce;
    }
    if ((isRequired && checkInputHasChanged) || (!isRequired && value.length)) {
      const errorObjects = this.validateAndReturnErrorObject(name, value, rule);
      this.updateStateAndCallBackOnBlur(
        errorObjects.validation,
        errorObjects.errorKey,
        errorObjects.obj,
        e
      );
    } else {
      errorKey = `${name}Error`;
      const obj = {
        [name]: {
          value,
          [errorKey]: '',
        },
        identifier,
      };
      if (updateFormIdentifierData) {
        updateFormIdentifierData(obj);
      }
    }
    this.props.onBlurHandler(e, errorKey);
  }

  /**
   *  update store on change in input key
   * @param {*} e event
   */
  handleOnChange(e) {
    const { name, value } = e.target;
    const {
      updateFormIdentifierData,
      identifier,
      onChangeHandler,
    } = this.props;
    if (updateFormIdentifierData) {
      updateFormIdentifierData({
        [name]: { value, isChangedOnce: true },
        identifier,
      });
    }
    if (onChangeHandler) {
      onChangeHandler(e);
    }
  }

  handleOnSelectChange(e) {
    const { name, value } = e.target;
    const {
      updateFormIdentifierData,
      identifier,
      onSelectChangeHandler,
      validationRule,
    } = this.props;
    const validationObj = validateChange(name, value, validationRule);
    const errorKey = Object.keys(validationObj)[1];
    if (updateFormIdentifierData) {
      updateFormIdentifierData({
        [name]: { value, [errorKey]: validationObj[errorKey] },
        identifier,
      });
    }
    if (onSelectChangeHandler) {
      onSelectChangeHandler(value, name, e);
    }
  }

  handleInputChipCallBack(
    validation,
    errorKey,
    value,
    name,
    callCallback = true
  ) {
    const { onValidationDoneCallback, onErrorCallback } = this.props;
    if (validation && validation[errorKey] !== '') {
      if (onErrorCallback) {
        onErrorCallback();
      }
    } else if (onValidationDoneCallback && callCallback) {
      onValidationDoneCallback(name, value);
    }
  }

  handleOnInputChipChange(name, val, rule, isRequired) {
    const {
      updateFormIdentifierData,
      identifier,
      onInputChipChangeHandler,
    } = this.props;

    const errorKey = `${name}Error`;
    let errorMsz = '';
    let errorObject = {};

    if (isRequired || (!isRequired && val.length)) {
      errorObject = this.validateAndReturnErrorObject(name, val, rule);
      errorMsz = errorObject.validation[errorKey];
    }

    if (updateFormIdentifierData) {
      updateFormIdentifierData({
        [name]: {
          value: val,
          [errorKey]: errorMsz,
          isChangedOnce: true,
        },
        identifier,
        name, // this is required here to remove the duplicates from the value array in redux
      });
    }

    this.handleInputChipCallBack(
      errorObject.validation,
      errorObject.errorKey,
      val,
      name
    );

    if (onInputChipChangeHandler) {
      onInputChipChangeHandler(name, val, errorMsz);
    }
  }

  renderSelect(props) {
    const { onSelectChangeHandler, classes, ...otherProps } = props;

    return (
      <Select
        onSelectChange={e => this.handleOnSelectChange(e)}
        {...otherProps}
      />
    );
  }

  renderInputChip(props) {
    const { classes, ...otherProps } = props;

    return (
      <InputChip
        onInputChipChange={(name, inputValues, rule, isRequired) =>
          this.handleOnInputChipChange(name, inputValues, rule, isRequired)
        }
        {...otherProps}
      />
    );
  }

  /* eslint-disable complexity */
  render() {
    const {
      classes,
      formControlProps,
      labelText,
      validationRule,
      labelProps,
      inputProps,
      showFieldLevelErrorMsz,
      error,
      white,
      inputRootCustomClasses,
      success,
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
    if (!_isEmpty(formControlProps)) {
      formControlClasses = classnames(
        formControlProps.className,
        classes.formControl
      );
    } else {
      formControlClasses = classes.formControl;
    }

    const fieldError = `${inputProps.name}Error`;
    const isRequired = formControlProps ? formControlProps.required : false;

    if (inputProps && inputProps.type === 'select') {
      return this.renderSelect(this.props);
    }

    if (inputProps && inputProps.type === 'multiple') {
      return this.renderInputChip(this.props);
    }

    return (
      <FormControl {...formControlProps} className={formControlClasses}>
        {labelText && (
          <InputLabel
            className={`${labelClasses}`}
            htmlFor={inputProps.id}
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
          onChange={e => this.handleOnChange(e)}
          onBlur={e => this.handleOnBlur(validationRule, isRequired, e)}
          {...(this.props[fieldError] && {
            'aria-describedby': `${inputProps.id}_error_msg`,
          })}
          {...inputProps}
        />
        {showFieldLevelErrorMsz && this.props[fieldError] && (
          <FormHelperText
            id={`${inputProps.id}_error_msg`}
            error={showFieldLevelErrorMsz}
          >
            {this.props[fieldError] || ''}
          </FormHelperText>
        )}
      </FormControl>
    );
  }
}

CustomInput.propTypes = propTypes;
CustomInput.defaultProps = defaultProps;

export default withStyles(inputStyles)(CustomInput);
