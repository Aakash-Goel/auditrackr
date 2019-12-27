import React from 'react';
import classnames from 'classnames';
import { object, node, string, oneOf } from 'prop-types';

import { Paper as MuiPaper } from '@material-ui/core';

import withStyles from '@material-ui/core/styles/withStyles';

const paperStyles = theme => {
  // theme constants
  const primaryColor = theme.palette.primary.main;
  const secondaryColor = theme.palette.secondary.main;
  const infoColor = theme.palette.info.main;
  const successColor = theme.palette.success.main;
  const warningColor = theme.palette.warning.main;
  const errorColor = theme.palette.error.main;
  const whiteColor = theme.palette.common.white;
  const blackColor = theme.palette.common.black;
  const greyColor = theme.palette.grey[500];

  const styles = {
    root: {
      ...theme.mixins.gutters(),
      position: 'relative',
      overflow: 'hidden',
      color: theme.palette.common.black,
      padding: theme.spacing(3), // 24px,
    },
    primaryBorder: {
      borderTop: `3px solid ${primaryColor}`,
    },
    secondaryBorder: {
      borderTop: `3px solid ${secondaryColor}`,
    },
    infoBorder: {
      borderTop: `3px solid ${infoColor}`,
    },
    successBorder: {
      borderTop: `3px solid ${successColor}`,
    },
    warningBorder: {
      borderTop: `3px solid ${warningColor}`,
    },
    errorBorder: {
      borderTop: `3px solid ${errorColor}`,
    },
    whiteBorder: {
      borderTop: `3px solid ${whiteColor}`,
    },
    blackBorder: {
      borderTop: `3px solid ${blackColor}`,
    },
    greyBorder: {
      borderTop: `3px solid ${greyColor}`,
    },
    noneBorder: {
      borderTop: 'none',
    },
  };

  return styles;
};

const propTypes = {
  classes: object.isRequired,
  children: node,
  className: string,
  borderColor: oneOf([
    'primary',
    'secondary',
    'info',
    'success',
    'warning',
    'error',
    'white',
    'black',
    'grey',
    'none',
  ]),
};

const defaultProps = {
  children: null,
  className: null,
  borderColor: 'primary',
};

const Paper = ({ classes, children, className, borderColor, ...rest }) => {
  const rootClasses = classnames({
    [classes.root]: true,
    [classes[`${borderColor}Border`]]: borderColor,
    [className]: className,
  });

  return (
    <>
      <MuiPaper className={rootClasses} {...rest}>
        {children}
      </MuiPaper>
    </>
  );
};

Paper.propTypes = propTypes;
Paper.defaultProps = defaultProps;

export default withStyles(paperStyles)(Paper);
