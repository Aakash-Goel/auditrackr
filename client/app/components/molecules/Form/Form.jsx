import React from 'react';
import {
  string,
  oneOfType,
  arrayOf,
  object,
  node,
  func,
  bool,
} from 'prop-types';
import _isEmpty from 'lodash/isEmpty';
import _merge from 'lodash/merge';

import FormHelperText from '@material-ui/core/FormHelperText';

import { validateAll } from '../../../utils/validation/validationUtil';
import {
  setFocus,
  isMobileDevice,
  calculateOffset,
} from '../../../utils/helpersUtil';

/**
 * @property propTypes
 * @description Defined property types for component
 */
const propTypes = {
  id: string.isRequired,
  className: string,
  children: oneOfType([arrayOf(object), object, node]).isRequired,
  onSubmit: func.isRequired,
  formWrapperData: object.isRequired,
  identifier: string.isRequired,
  updateFormIdentifierData: func.isRequired,
  clearFormIdentifierData: func.isRequired,
  shouldClearFormDataOnUnmount: bool,
  showFormLevelErrorMsz: bool,
  method: string,
  otherFormAttr: object,
};

const defaultProps = {
  className: '',
  method: 'post',
  shouldClearFormDataOnUnmount: true,
  showFormLevelErrorMsz: true,
  otherFormAttr: {},
};

/**
 * Render Form Component
 * @param {Object} props
 */
class Form extends React.PureComponent {
  constructor(props) {
    super(props);

    this.getFormErrorMsz = this.getFormErrorMsz.bind(this);
  }

  componentWillUnmount() {
    const {
      identifier,
      clearFormIdentifierData,
      shouldClearFormDataOnUnmount,
    } = this.props;
    if (shouldClearFormDataOnUnmount) clearFormIdentifierData(identifier);
  }

  /**
   * Run validation on submit function and returns error
   * @param {object} e  event
   * @param {object} propObj
   */
  onSubmitCheck = e => {
    e.preventDefault();
    e.stopPropagation();

    const {
      onSubmit,
      formWrapperData,
      identifier,
      updateFormIdentifierData,
    } = this.props;

    const formRef = e.target;
    const errorValidationObj = {};
    const updateStateObj = {};
    const formWrapperDataLength = Object.keys(formWrapperData);

    if (formWrapperDataLength && formWrapperDataLength.length) {
      formWrapperDataLength.forEach(item => {
        const checkobj = _merge({}, formWrapperData[item]);
        if (checkobj.required || (checkobj.value && checkobj.value.length))
          errorValidationObj[item] = {
            rule: checkobj.rule,
            value: checkobj.value,
          };
      });
    }

    // validate all function
    const errors = validateAll(errorValidationObj);
    const errorsLength = Object.keys(errors);
    if (errorsLength && errorsLength.length) {
      errorsLength.forEach(item => {
        const key = item.replace('Error', '');
        updateStateObj[key] = {
          [item]: errors[item],
          isChangedOnce: true,
        };
      });
    }
    updateStateObj.identifier = identifier;
    // update the store
    if (updateFormIdentifierData) {
      updateFormIdentifierData(updateStateObj);
    }
    setTimeout(() => {
      const el = formRef.querySelector('.errorFormField');
      if (el) {
        // set focus on error element
        if (!isMobileDevice.iOS()) {
          setFocus(formRef, 'errorFormField');
        } else {
          // programmatic focus isn't working in iphone
          const offset = calculateOffset(el);
          window.scrollTo(0, offset.top - 150);
        }
      }
    }, 0);
    // call the onSubmit function

    return onSubmit(errors);
  };

  getFormErrorMsz() {
    let errorMsz;
    const { id } = this.props;

    const formError = `${id}Error`;
    const errorObj = this.props[formError] ? this.props[formError] : null;

    if (errorObj) {
      if (errorObj.data === null) {
        if (_isEmpty(errorObj.error.message)) {
          // modify form API level error messages here
          errorMsz = errorObj.axiosErrorMessage;
        } else {
          // modify form API level error messages here
          errorMsz = errorObj.error.message;
        }
      } else {
        errorMsz = errorObj.message;
      }
    } else {
      errorMsz = '';
    }

    return errorMsz;
  }

  render() {
    const {
      id,
      className,
      children,
      method,
      otherFormAttr,
      showFormLevelErrorMsz,
    } = this.props;

    const formErrorMsz = this.getFormErrorMsz();

    return (
      <form
        id={id}
        onSubmit={this.onSubmitCheck}
        method={method}
        noValidate
        className={className}
        {...otherFormAttr}
      >
        {children}
        {showFormLevelErrorMsz && formErrorMsz && (
          <FormHelperText id={`${id}_error_msg`} error={showFormLevelErrorMsz}>
            {formErrorMsz}
          </FormHelperText>
        )}
      </form>
    );
  }
}

Form.propTypes = propTypes;
Form.defaultProps = defaultProps;

export default Form;
