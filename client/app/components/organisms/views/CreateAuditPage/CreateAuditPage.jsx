import React, { PureComponent } from 'react';
import { object, func } from 'prop-types';
import classnames from 'classnames';

import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import GridContainer from '../../../atoms/Grid/GridContainer';
import GridItem from '../../../atoms/Grid/GridItem';
import CreateAuditForm from '../../Forms/CreateAuditForm';
import { Router } from '../../../../../routes';

import createAuditPageStyles from './CreateAuditPage.style';

const propTypes = {
  classes: object.isRequired,
  data: object,
  clearCreateAuditData: func.isRequired,
};

const defaultProps = {
  data: null,
};

/* eslint-disable react/prefer-stateless-function */
class CreateAuditPage extends PureComponent {
  componentWillReceiveProps(nextProps) {
    // @TODO: move below logic to one singleton file
    if (this.props.data !== nextProps.data) {
      if (nextProps.data) {
        Router.pushRoute('audit-questionnaires');
      }
    }
  }

  componentWillUnmount() {
    this.props.clearCreateAuditData();
  }

  render() {
    const { classes, ...rest } = this.props;

    return (
      <>
        <GridContainer alignItems="center" justify="center">
          <GridItem xs={12} sm={12} md={8} lg={6} xl={4}>
            <Typography
              variant="h5"
              component="p"
              className={classnames(classes.info)}
            >
              Start creating an audit to add pace to your business, don&#39;t
              let a messy audit be your fate.
            </Typography>
            <CreateAuditForm {...rest} />
          </GridItem>
        </GridContainer>
      </>
    );
  }
}

CreateAuditPage.propTypes = propTypes;
CreateAuditPage.defaultProps = defaultProps;

export default withStyles(createAuditPageStyles)(CreateAuditPage);
