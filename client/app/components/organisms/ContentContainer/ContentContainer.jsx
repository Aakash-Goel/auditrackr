import React from 'react';
import { object, node } from 'prop-types';
import classnames from 'classnames';

import { Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import contentContainerStyles from './ContentContainer.style';

const propTypes = {
  classes: object.isRequired,
  children: node.isRequired,
};

const ContentContainer = props => {
  const { classes, children } = props;

  return (
    <div className={classnames(classes.contentContainer)}>
      <Paper className={classes.paperRoot} elevation={1}>
        {children}
      </Paper>
    </div>
  );
};

ContentContainer.propTypes = propTypes;

export default withStyles(contentContainerStyles)(ContentContainer);
