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
  grid: {},
};

const GridContainer = ({ ...props }) => {
  const { classes, children, className, ...rest } = props;

  const gridContainerClasses = classnames({
    [classes.grid]: true,
    [className]: className,
  });

  return (
    <Grid container {...rest} className={gridContainerClasses}>
      {children}
    </Grid>
  );
};

GridContainer.propTypes = propTypes;
GridContainer.defaultProps = defaultProps;

export default withStyles(style)(GridContainer);
