import React from 'react';
import { object, node, string } from 'prop-types';
import classnames from 'classnames';

import withStyles from '@material-ui/core/styles/withStyles';
import { Card as MuiCard } from '@material-ui/core';

/**
 * Type checking - Define prop types
 * @private
 */
const propTypes = {
  classes: object.isRequired,
  children: node.isRequired,
  className: string,
};

/**
 * Define default prop values
 * @private
 */
const defaultProps = {
  className: '',
};

const style = {
  cardRoot: {
    padding: '8px',
    borderTop: '4px solid green', // needs to change, it should be handle by variations
  },
};

const Card = ({ ...props }) => {
  const { classes, children, className, ...rest } = props;

  const cardClasses = classnames({
    [classes.cardRoot]: true,
    [className]: className,
  });

  return (
    <MuiCard {...rest} className={cardClasses}>
      {children}
    </MuiCard>
  );
};

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default withStyles(style)(Card);
