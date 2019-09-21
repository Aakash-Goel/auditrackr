import React from 'react';
import { object, arrayOf } from 'prop-types';
import { isEmpty } from 'lodash';

import withStyles from '@material-ui/core/styles/withStyles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

import radioStyles from './Radio.style';

/**
 * Type checking - Define prop types
 * @private
 */
const propTypes = {
  options: arrayOf(object).isRequired,
  radioGroupProps: object,
};

/**
 * Define default prop values
 * @private
 */
const defaultProps = {
  radioGroupProps: {},
};

/* eslint-disable react/no-array-index-key */
const CustomRadio = ({ ...props }) => {
  const { radioGroupProps, options } = props;

  if (!isEmpty(radioGroupProps)) {
    return (
      <RadioGroup {...radioGroupProps}>
        {options &&
          options.map((option, index) => (
            <FormControlLabel
              key={index}
              {...option.formControlLabelProps}
              control={<Radio color="primary" {...option.radioProps} />}
            />
          ))}
      </RadioGroup>
    );
  }

  return (
    <>
      {options &&
        options.map((option, index) => (
          <FormControlLabel
            key={index}
            {...option.formControlLabelProps}
            control={<Radio color="primary" {...option.radioProps} />}
          />
        ))}
    </>
  );
};

CustomRadio.propTypes = propTypes;
CustomRadio.defaultProps = defaultProps;

export default withStyles(radioStyles)(CustomRadio);
