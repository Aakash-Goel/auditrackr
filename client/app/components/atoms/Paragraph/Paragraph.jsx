/**
 * Themed Paragraph
 */

import React from 'react';
import classnames from 'classnames';
import { oneOf, node, string } from 'prop-types';

import paragraphStyles from './Paragraph.style';

/**
 * @param {object} [classes] - The style definition available here.
 * @param {string} [color=null] - Font color styling to be passed in.
 * @param {node} [children=null] - The children of the component. Defaults to null.
 * @param {string} [className=null] - CSS class name to allow custom styling to be passed in. Defaults to null.
 */
const propTypes = {
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
  ]),
  weight: oneOf(['bold', 'medium', 'light']),
  textTransform: oneOf(['cap', 'iht', 'lwc', 'nn', 'upc']),
  children: node,
  className: string,
};

const defaultProps = {
  color: null,
  weight: null,
  textTransform: 'nn',
  children: null,
  className: null,
};

const Paragraph = ({
  color,
  weight,
  textTransform,
  children,
  className,
  ...props
}) => {
  const classes = paragraphStyles();
  const paragraphClasses = classnames({
    [classes.paragraph]: true,
    [classes[color]]: color,
    [classes[weight]]: weight,
    [classes[textTransform]]: textTransform,
    [className]: className,
  });

  return (
    <p className={paragraphClasses} {...props}>
      {children}
    </p>
  );
};

Paragraph.propTypes = propTypes;
Paragraph.defaultProps = defaultProps;

export default Paragraph;
