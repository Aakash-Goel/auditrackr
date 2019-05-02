import React from 'react';
import { object, bool, oneOf, node, string } from 'prop-types';
import classnames from 'classnames';

import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';

import buttonStyles from './Button.style';

/**
 * Type checking - Define prop types
 * @private
 */
const propTypes = {
  classes: object.isRequired,
  color: oneOf([
    '',
    'primary',
    'secondary',
    'info',
    'success',
    'warning',
    'error',
    'black',
    'white',
    'facebook',
    'twitter',
    'google',
    'github',
    'transparent',
  ]),
  size: oneOf(['', 'sm', 'lg']),
  simple: bool,
  round: bool,
  outlined: bool,
  fullWidth: bool,
  disabled: bool,
  block: bool,
  link: bool,
  justIcon: bool,
  children: node,
  className: string,
  textTransform: oneOf(['cap', 'iht', 'lwc', 'nn', 'upc']),
};

/**
 * Define default prop values
 * @private
 */
const defaultProps = {
  color: 'primary',
  size: '',
  simple: false,
  round: true,
  outlined: false,
  fullWidth: false,
  disabled: false,
  block: false,
  link: false,
  justIcon: false,
  children: null,
  className: '',
  textTransform: 'upc',
};

const CustomButton = ({ ...props }) => {
  const {
    classes,
    color,
    round,
    children,
    fullWidth,
    disabled,
    simple,
    size,
    block,
    link,
    justIcon,
    outlined,
    className,
    textTransform,
    ...rest
  } = props;

  const btnClasses = classnames({
    [classes.button]: true,
    [classes[size]]: size,
    [classes[color]]: color,
    [classes.round]: round,
    [classes.outlined]: outlined,
    [classes.fullWidth]: fullWidth,
    [classes.disabled]: disabled,
    [classes.simple]: simple,
    [classes.block]: block,
    [classes.link]: link,
    [classes.justIcon]: justIcon,
    [classes[textTransform]]: textTransform,
    [className]: className,
  });

  return (
    <Button {...rest} className={btnClasses}>
      {children}
    </Button>
  );
};

CustomButton.propTypes = propTypes;
CustomButton.defaultProps = defaultProps;

export default withStyles(buttonStyles)(CustomButton);
