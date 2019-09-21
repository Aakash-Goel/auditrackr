import isEmpty from 'lodash/fp/isEmpty';

import { validateChange } from './validation/validationUtil';

/**
 * This method iterates over the detailed error object required for the password field
  While iterating it creates an error object which tells what all validation has failed and passed
  Returns Error Object
 * @param {Object} detailedValidationResult - detailedValidationResult is the detailed error response from validate.js
 */
export const getErrorStateForPassword = (
  detailedValidationResult,
  validators
) => {
  const newValidators = Object.assign({}, validators);
  // Setting default state of every property to true
  Object.keys(newValidators).forEach(v => (newValidators[v] = true)); // eslint-disable-line no-return-assign
  if (detailedValidationResult.detailedValidationResult) {
    // Iterate over the error object and get which validation type failed
    detailedValidationResult.detailedValidationResult.forEach(error => {
      const key = error.validator;
      if (key === 'format') {
        let spaceSeparatedFormats = error.error.trim().split(' ');
        spaceSeparatedFormats = spaceSeparatedFormats.slice(
          2,
          spaceSeparatedFormats.length
        );
        spaceSeparatedFormats.forEach(failedFormat => {
          newValidators[failedFormat] = false;
        });
      } else {
        newValidators[key] = false;
      }
    });
  }
  return newValidators;
};

export const compareValue = (
  name,
  value,
  comparatorKey,
  comparatorValue,
  rule,
  identifier
) => {
  const valError = `${name}Error`;
  const validation = validateChange(
    name,
    { [name]: value, [comparatorKey]: comparatorValue },
    rule
  );
  const nameKey = name;
  const errorKey = validation[valError];
  const obj = {
    [nameKey]: {
      value: validation[nameKey][nameKey],
      [valError]: validation[valError],
    },
    identifier,
  };
  return { validation, errorKey, obj };
};

/**
 * This function check and return the key values
 * against the identifier from the formWrapperData Object.
 * @param {Object} dataObj formWrapperdata object
 * @param {string} identifier
 * @param {string} key
 */
export const getFormWrapperDataValue = (dataObj, identifier, key) => {
  return (dataObj && dataObj[identifier] && dataObj[identifier][key]) || '';
};

/**
 * This function check if error exist against the form field
 * from the formWrapperData Object.
 * @param {Object} formDataObj formWrapperData object of specific identifier
 * @param {string} formInputKey
 */
export const checkIsError = (formDataObj, formInputKey) => {
  if (isEmpty(formDataObj[formInputKey])) {
    return false;
  }

  if (isEmpty(formDataObj[formInputKey][`${formInputKey}Error`])) {
    return false;
  }

  return true;
};
