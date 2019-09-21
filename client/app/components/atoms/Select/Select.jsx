import React from 'react';
import { object, bool, node, func } from 'prop-types';
import classnames from 'classnames';
import _concat from 'lodash/concat';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Divider from '@material-ui/core/Divider';
import Select from '@material-ui/core/Select';

import selectStyles from './Select.style';

const propTypes = {
  classes: object.isRequired,
  labelText: node,
  labelProps: object,
  inputProps: object,
  formControlProps: object,
  selectProps: object,
  onSelectChange: func.isRequired,
  showFieldLevelErrorMsz: bool,
  error: bool,
  success: bool,
};

const defaultProps = {
  labelText: null,
  labelProps: {},
  inputProps: {},
  formControlProps: {},
  selectProps: {},
  showFieldLevelErrorMsz: true,
  error: false,
  success: false,
};

/* eslint-disable react/no-array-index-key */
class CustomSelect extends React.Component {
  constructor(props) {
    super(props);

    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleSelectChange(event) {
    this.props.onSelectChange(event);
  }

  transformOptionList(isDisplayLabel = true, listOfOptions = [], label = '') {
    let transformOptions = listOfOptions;
    if (isDisplayLabel) {
      const labelAsObject = [
        {
          text: label,
          value: '',
          disabled: true,
        },
      ];

      transformOptions = _concat(labelAsObject, transformOptions);
    }

    return transformOptions;
  }

  render() {
    const {
      classes,
      labelText,
      labelProps,
      inputProps,
      formControlProps,
      selectProps,
      showFieldLevelErrorMsz,
      error,
      success,
    } = this.props;

    const { id, name, type, value, ...otherInputProps } = inputProps;
    const {
      optionList,
      selectHeader,
      displayLabelAsOption,
      hoverColor,
      ...otherSelectProps
    } = selectProps;

    const hoverColorVariant = hoverColor || 'primary';

    const selectClasses = classnames({
      [classes.select]: true,
      [`errorFormField`]: error,
    });
    const labelClasses = classnames({
      [`${classes.labelRootError}`]: error,
      [`${classes.labelRootSuccess}`]: success && !error,
    });
    const selectItemClass = classnames({
      [classes.selectItem]: true,
      [classes[`${hoverColorVariant}Hover`]]: true,
    });

    const fieldError = `${inputProps.name}Error`;
    const selectOptionList = this.transformOptionList(
      displayLabelAsOption,
      optionList,
      labelText
    );

    return (
      <div>
        <FormControl {...formControlProps} className={classes.formControl}>
          {labelText && (
            <InputLabel
              className={`${classes.labelRoot} ${labelClasses}`}
              htmlFor={id}
              {...labelProps}
            >
              {labelText}
            </InputLabel>
          )}
          <Select
            classes={{
              select: selectClasses,
              disabled: classes.disabled,
            }}
            value={value || ''}
            onChange={this.handleSelectChange}
            name={name}
            inputProps={{
              id,
              ...otherInputProps,
            }}
            {...otherSelectProps}
          >
            {selectHeader ? <MenuItem>{selectHeader}</MenuItem> : null}
            {selectOptionList.map((prop, key) => {
              if (prop.divider) {
                return (
                  <Divider key={key} className={classes.selectDividerItem} />
                );
              }
              return (
                <MenuItem
                  value={prop.value}
                  key={key}
                  disabled={prop.disabled}
                  classes={{
                    selected: classes.selectedMenuItem,
                  }}
                  className={selectItemClass}
                >
                  {prop.text}
                </MenuItem>
              );
            })}
          </Select>
          {showFieldLevelErrorMsz && (
            <FormHelperText id={`${id}_error_msg`}>
              {this.props[fieldError] || ''}
            </FormHelperText>
          )}
        </FormControl>
      </div>
    );
  }
}

CustomSelect.propTypes = propTypes;
CustomSelect.defaultProps = defaultProps;

export default withStyles(selectStyles)(CustomSelect);
