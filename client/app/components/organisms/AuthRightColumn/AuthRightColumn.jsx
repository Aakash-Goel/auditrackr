import React from 'react';
import { connect } from 'react-redux';
import { object, string, node } from 'prop-types';
import classnames from 'classnames';

import { withStyles } from '@material-ui/core/styles';

import GridContainer from '../../atoms/Grid/GridContainer';
import GridItem from '../../atoms/Grid/GridItem';
import Title from '../../atoms/Title';

import authRightColumnStyles from './AuthRightColumn.style';

/**
 * Type checking - Define prop types
 * @private
 */
const propTypes = {
  classes: object.isRequired,
  title: string,
  children: node,
};

const defaultProps = {
  title: '',
  children: null,
};

const AuthRightColumn = ({ ...props }) => {
  const { classes, title, children } = props;

  return (
    <>
      <GridContainer direction="column" alignItems="center">
        <GridItem xs={8}>
          <Title level={1} className={classnames(classes.heading)}>
            {title}
          </Title>
          {children}
        </GridItem>
        <GridItem xs={12} className={classnames(classes.copyrightWrapper)}>
          <p>Copyright &copy; 2019-2020 AuditTrackR. All rights reserved </p>
        </GridItem>
      </GridContainer>
    </>
  );
};

AuthRightColumn.propTypes = propTypes;
AuthRightColumn.defaultProps = defaultProps;

export default connect()(withStyles(authRightColumnStyles)(AuthRightColumn));
