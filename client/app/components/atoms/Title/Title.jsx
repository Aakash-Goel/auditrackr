/**
 * Themed Title
 */

import React from 'react';
import classnames from 'classnames';
import { object, oneOf, node, string } from 'prop-types';

import { withStyles } from '@material-ui/styles';

import titleStyles from './Title.style';

/**
 * @param {object} [classes] - The style definition available here.
 * @param {number} level - The heading level. (i.e., The numbers of h1, h2, h3, h4, h5, h6) [ 1 | 2 | 3 | 4 | 5 | 6 ]
 * @param {object} [img=null] - The definition of the optional image. Defaults to null.
 * @param {node} [children=null] - The children of the component. Defaults to null.
 * @param {string} [className=null] - CSS class name to allow custom styling to be passed in. Defaults to empty string.
 */
const propTypes = {
  classes: object.isRequired,
  level: oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  theme: oneOf(['primary', 'secondary']),
  img: object,
  children: node,
  className: string,
};

const defaultProps = {
  theme: 'primary',
  img: null,
  children: null,
  className: null,
};

/* eslint-disable jsx-a11y/alt-text */
const Title = ({
  classes,
  level,
  theme,
  img,
  children,
  className,
  ...props
}) => {
  if (React.Children.count(children) < 1) {
    return null;
  }
  const HeadingTag = `h${level}`;
  const HeadingWithTheme = `${HeadingTag}-${theme}`;

  if (img && img.exist) {
    return (
      <HeadingTag {...props}>
        <img {...img.attr} />
        {children}
      </HeadingTag>
    );
  }

  const headingClasses = classnames({
    [classes.heading]: true,
    [classes[HeadingWithTheme]]: HeadingWithTheme,
    [className]: className,
  });

  return (
    <HeadingTag {...props} className={headingClasses}>
      {children}
    </HeadingTag>
  );
};

Title.propTypes = propTypes;
Title.defaultProps = defaultProps;

export default withStyles(titleStyles)(Title);
