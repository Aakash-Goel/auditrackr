import React from 'react';
import { object, bool, oneOf, node, string } from 'prop-types';
import classnames from 'classnames';

import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';

import buttonStyles from './Button.style';

const BtnIcon = React.forwardRef(({ className, startIcon, endIcon }, ref) => {
  if (startIcon) {
    return (
      <span ref={ref} className={className}>
        {startIcon}
      </span>
    );
  }
  if (endIcon) {
    return (
      <span ref={ref} className={className}>
        {endIcon}
      </span>
    );
  }

  return null;
});
BtnIcon.propTypes = {
  className: string,
  startIcon: node,
  endIcon: node,
};
BtnIcon.defaultProps = {
  className: null,
  startIcon: null,
  endIcon: null,
};

/**
 * Type checking - Define prop types
 * @private
 */
const propTypes = {
  classes: object.isRequired,
  color: oneOf([
    'primary',
    'secondary',
    'info',
    'success',
    'warning',
    'error',
    'white',
    'black',
    'grey',
    'transparent',
  ]),
  size: oneOf(['sm', 'md', 'lg']),
  weight: oneOf(['bold', 'medium', 'light']),
  simple: bool,
  round: bool,
  outlined: bool,
  fullWidth: bool,
  disabled: bool,
  block: bool,
  link: bool,
  justIcon: bool,
  startIcon: node,
  endIcon: node,
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
  size: null,
  weight: null,
  simple: false,
  round: true,
  outlined: false,
  fullWidth: false,
  disabled: false,
  block: false,
  link: false,
  justIcon: false,
  startIcon: null,
  endIcon: null,
  children: null,
  className: null,
  textTransform: 'upc',
};

const CustomButton = React.forwardRef(({ ...props }, ref) => {
  const {
    classes,
    color,
    round,
    children,
    fullWidth,
    disabled,
    simple,
    size,
    weight,
    block,
    link,
    justIcon,
    startIcon,
    endIcon,
    outlined,
    className,
    textTransform,
    ...rest
  } = props;

  const btnClasses = classnames({
    [classes.button]: true,
    [classes[size]]: size,
    [classes[weight]]: weight,
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

  const startIconClasses = classnames({
    [classes.startIcon]: true,
  });

  const endIconClasses = classnames({
    [classes.endIcon]: true,
  });

  return (
    <Button ref={ref} {...rest} className={btnClasses}>
      <BtnIcon className={startIconClasses} startIcon={startIcon} />
      {children}
      <BtnIcon className={endIconClasses} endIcon={endIcon} />
    </Button>
  );
});

CustomButton.propTypes = propTypes;
CustomButton.defaultProps = defaultProps;

export default withStyles(buttonStyles)(CustomButton);
