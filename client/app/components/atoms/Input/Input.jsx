import React from 'react';
import { object, bool, node, string, func } from 'prop-types';
import classnames from 'classnames';
import { isEmpty } from 'lodash';

import withStyles from '@material-ui/core/styles/withStyles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';

import Select from '../Select';
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
    if (!isEmpty(this.props.inputProps) && this.props.inputProps.name) {
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
      const { name } = inputProps;
      const isRequired = formControlProps ? formControlProps.required : false;
      const dataValue = '';
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

    if (!isEmpty(formWrapperSelector)) {
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

  renderSelect(props) {
    const { onSelectChangeHandler, classes, ...otherProps } = props;

    return (
      <Select
        onSelectChange={e => this.handleOnSelectChange(e)}
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
      [classes.underline]: true,
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

    const fieldError = `${inputProps.name}Error`;
    const isRequired = formControlProps ? formControlProps.required : false;

    if (inputProps && inputProps.type === 'select') {
      return this.renderSelect(this.props);
    }

    return (
      <FormControl {...formControlProps} className={formControlClasses}>
        {labelText && (
          <InputLabel
            className={`${classes.labelRoot} ${labelClasses}`}
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
          {...this.props[fieldError] && {
            'aria-describedby': `${inputProps.id}_error_msg`,
          }}
          {...inputProps}
        />
        {showFieldLevelErrorMsz && (
          <FormHelperText id={`${inputProps.id}_error_msg`}>
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
