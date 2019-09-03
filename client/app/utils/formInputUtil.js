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
 * This method iterated on the formated error object created by getErrorStateForPassword
 * returns true if any validation has failed
 * @param {Object} passwordErrorState - This is the parsed error object
 */
export const checkIfPasswordErrorOccured = (passwordErrorState, validators) => {
  if (passwordErrorState) {
    return !Object.keys(validators).every(errorType => {
      return passwordErrorState[errorType];
    });
  }
  return false;
};
export const getPasswordValidationObj = (name, rule, value, fName) => {
  const newValue = {
    firstName: fName,
    passwordValidation: value,
  };
  return validateChange(name, newValue, rule, true);
};
