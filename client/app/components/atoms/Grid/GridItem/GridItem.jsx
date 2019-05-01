import React from 'react';
import { object, node, string } from 'prop-types';
import classnames from 'classnames';

import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';

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
  grid: {
    position: 'relative',
    width: '100%',
    minHeight: '1px',
    flexBasis: 'auto',
  },
};

const GridItem = ({ ...props }) => {
  const { classes, children, className, ...rest } = props;

  const gridItemClasses = classnames({
    [classes.grid]: true,
    [className]: className,
  });

  return (
    <Grid item {...rest} className={gridItemClasses}>
      {children}
    </Grid>
  );
};

GridItem.propTypes = propTypes;
GridItem.defaultProps = defaultProps;

export default withStyles(style)(GridItem);
