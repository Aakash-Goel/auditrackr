import _ from 'lodash';
import validate from 'validate.js';
import * as Constraints from './constraints';

export const setRuleForError = (value, rule, detailed) => {
  let errors;

  const setConstraints = typeof rule === 'object' ? rule : Constraints[rule];
  const ruleKey = typeof rule === 'object' ? Object.keys(rule)[0] : rule;
  if (typeof value === 'object') {
    if (detailed) {
      errors = validate(value, setConstraints, { format: 'detailed' });
    } else {
      errors = validate(value, setConstraints);
    }
  } else {
    /* istanbul ignore next */
    errors = validate({ [ruleKey]: value }, setConstraints);
  }
  return errors;
};

export const validateChange = (name, value, rule, detailed = false) => {
  let errors = setRuleForError(value, rule, detailed);
  if (!detailed) {
    const rulekey = typeof rule === 'object' ? Object.keys(rule)[0] : rule;
    errors = errors ? errors[rulekey][0] : '';
    /* istanbul ignore next */
    const errorState = `${name}Error`;
    return {
      [name]: value,
      [errorState]: errors,
    };
  }
  return {
    [name]: value,
    detailedValidationResult: errors,
  };
};

export const validateEmpty = (name, value) => {
  const errors = validate.isEmpty(value);
  /* istanbul ignore next */
  const errorState = `${name}Error`;
  return {
    errors,
    [errorState]: '',
    [name]: value,
  };
};

export const validateAll = fieldMap => {
  const newState = {};
  _.reduce(
    fieldMap,
    (result, fieldValue, fieldKey) => {
      const { rule, value, depends, dependsMessage } = fieldValue;
      const errors = setRuleForError(value, rule);
      const rulekey = typeof rule === 'object' ? Object.keys(rule)[0] : rule;
      const ruleError = errors && errors[rulekey];
      if (ruleError && ruleError.length) {
        newState[`${fieldKey}Error`] = ruleError[0]; // eslint-disable-line prefer-destructuring
      } else if (depends) {
        const tempState = validateAll(depends);
        const tempArr = Object.values(tempState);
        if (tempArr.length) {
          newState[`${fieldKey}Error`] = dependsMessage || tempArr[0];
        }
      }
    },
    {}
  );
  return newState;
};
