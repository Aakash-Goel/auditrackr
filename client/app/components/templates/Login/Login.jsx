import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { object } from 'prop-types';
import classnames from 'classnames';
import Link from 'next/link';

import InputAdornment from '@material-ui/core/InputAdornment';
import EmailOutlined from '@material-ui/icons/EmailOutlined';
import LockOutlined from '@material-ui/icons/LockOutlined';
import withStyles from '@material-ui/core/styles/withStyles';

import Head from '../../atoms/Head';
import GridContainer from '../../atoms/Grid/GridContainer';
import GridItem from '../../atoms/Grid/GridItem';
import Title from '../../atoms/Title';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';

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
                <Title level={1} className={classnames(classes.heading)}>
                  Login to your account
                </Title>
                <div className={classnames(classes.formWrapper)}>
                  <form autoComplete="off">
                    <div className={classnames(classes.inputWrapper)}>
                      <Input
                        labelText="Enter your e-mail address"
                        formControlProps={{
                          required: true,
                          fullWidth: true,
                        }}
                        inputProps={{
                          endAdornment: (
                            <InputAdornment position="end" color="primary">
                              <EmailOutlined className={classes.icon} />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </div>
                    <div className={classnames(classes.inputWrapper)}>
                      <Input
                        labelText="Enter your password"
                        formControlProps={{
                          required: true,
                          fullWidth: true,
                        }}
                        inputProps={{
                          type: 'password',
                          endAdornment: (
                            <InputAdornment position="end" color="primary">
                              <LockOutlined className={classes.icon} />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </div>
                    <GridContainer
                      className={classnames(classes.buttonsWrapper)}
                    >
                      <GridItem xs={12} md={6}>
                        <Button
                          type="submit"
                          fullWidth
                          size="lg"
                          className={classnames(classes.btnSubmit)}
                        >
                          Login
                        </Button>
                      </GridItem>
                      <GridItem
                        xs={12}
                        md={6}
                        className={classnames(classes.btnLinkWrapper)}
                      >
                        <Button
                          link
                          textTransform="nn"
                          className={classnames(classes.btnLink)}
                        >
                          Forget password?
                        </Button>
                      </GridItem>
                    </GridContainer>
                  </form>
                </div>
                <div>
                  <p className={classnames(classes.helper)}>
                    Don&#39;t have an account?
                    <Link href="/signup">
                      <Button link size="lg" textTransform="nn">
                        Sign up
                      </Button>
                    </Link>
                  </p>
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
