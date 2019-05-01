import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { object } from 'prop-types';
import classnames from 'classnames';

import withStyles from '@material-ui/core/styles/withStyles';

import Head from '../../atoms/Head';
import GridContainer from '../../atoms/Grid/GridContainer';
import GridItem from '../../atoms/Grid/GridItem';
import Title from '../../atoms/Title';
import Input from '../../atoms/Input';

import loginStyles from './Login.style';

/**
 * Type checking - Define prop types
 * @private
 */
const propTypes = {
  classes: object.isRequired,
};

const LoginContainer = ({ ...props }) => {
  const { classes } = props;

  return (
    <Fragment>
      <Head
        title="Login | AuditTrackR"
        description="My website description goes here"
      />
      <div id="loginPage" className={classnames(classes.pageWrapper)}>
        <GridContainer
          direction="row-reverse"
          className={classnames(classes.contentWrapper)}
        >
          <GridItem
            md={5}
            className={classnames(classes.cell, classes.utilityBlock)}
          >
            <GridContainer
              direction="column"
              className={classnames(classes.loginSignupWrapper)}
            >
              <GridItem xs={12}>
                <Title level={1}>Login to your account</Title>
                <div>
                  <form noValidate autoComplete="off">
                    <div>
                      <Input
                        labelText="Enter your e-mail address"
                        formControlProps={{
                          required: true,
                          fullWidth: true,
                        }}
                      />
                    </div>
                    <div>
                      <Input
                        labelText="Enter your password"
                        formControlProps={{
                          required: true,
                          fullWidth: true,
                        }}
                        inputProps={{
                          type: 'password',
                        }}
                      />
                    </div>
                  </form>
                </div>
              </GridItem>
            </GridContainer>
          </GridItem>
          <GridItem
            md={7}
            className={classnames(classes.cell, classes.infoBlock)}
          >
            left
          </GridItem>
        </GridContainer>
      </div>
    </Fragment>
  );
};

LoginContainer.propTypes = propTypes;

export default connect()(withStyles(loginStyles)(LoginContainer));
