import React from 'react';
import { object, node, string, oneOf } from 'prop-types';
import classnames from 'classnames';

import Link from '@material-ui/core/Link';
import withStyles from '@material-ui/core/styles/withStyles';

import { Link as RouterLink } from '../../../../routes';

import linkStyles from './Link.style';

const NextLink = React.forwardRef(({ className, href, children }, ref) => (
  <span ref={ref}>
    <RouterLink route={href}>
      <a className={className}>{children}</a>
    </RouterLink>
  </span>
));
NextLink.propTypes = {
  className: string,
  href: string.isRequired,
  children: node,
};
NextLink.defaultProps = {
  className: '',
  children: null,
};

/**
 * Type checking - Define prop types
 * @private
 */
const propTypes = {
  classes: object.isRequired,
  children: node,
  className: string,
  href: string.isRequired,
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
    'inherit',
  ]),
  textTransform: oneOf(['cap', 'iht', 'lwc', 'nn', 'upc']),
};

/**
 * Define default prop values
 * @private
 */
const defaultProps = {
  children: null,
  className: '',
  color: 'primary',
  textTransform: 'upc',
};

const CustomLink = ({ ...props }) => {
  const { classes, children, className, href, color } = props;

  const linkClasses = classnames({
    [classes.link]: true,
    [classes[color]]: color,
    [className]: className,
  });

  return (
    <Link
      component={NextLink}
      href={href}
      className={linkClasses}
      // color={color}
    >
      {children}
    </Link>
  );
};

CustomLink.propTypes = propTypes;
CustomLink.defaultProps = defaultProps;

export default withStyles(linkStyles)(CustomLink);
