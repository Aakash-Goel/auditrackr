import React, { PureComponent, Fragment } from 'react';
import classnames from 'classnames';
import { object } from 'prop-types';
import Router from 'next/router';

import { withStyles } from '@material-ui/core/styles';
import { InputAdornment } from '@material-ui/core';
import { EmailOutlined, LockOutlined } from '@material-ui/icons';

import GridContainer from '../../atoms/Grid/GridContainer';
import GridItem from '../../atoms/Grid/GridItem';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';

import ServiceUtil from '../../../utils/serviceUtil';

import loginFormStyles from './LoginForm.style';

const TOKEN = 'token';

const propTypes = {
  classes: object.isRequired,
};

/* eslint-disable react/prefer-stateless-function */
class LoginForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      userEmail: '',
      userPassword: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  submitHandler = event => {
    event.preventDefault();
    const { userEmail, userPassword } = this.state;

    const requestData = {
      query: `
        query {
          login(email: "${userEmail}", password: "${userPassword}") {
            userId
            token
            tokenExpiration
          }
        }
      `,
    };

    ServiceUtil.triggerRequest({
      url: 'http://localhost:4000/graphql',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify(requestData),
    })
      .then(response => {
        // console.log('response>>> ', response); // eslint-disable-line
        const { data } = response && response.body;

        if (data) {
          console.log('response data>>> ', data); // eslint-disable-line
          localStorage.setItem(TOKEN, data.login.token);
          Router.push('/account/dashboard');
        }
      })
      .catch(error => {
        console.log('error>>> ', error); // eslint-disable-line
      });
  };

  render() {
    const { classes } = this.props;
    const { userEmail, userPassword } = this.state;

    return (
      <Fragment>
        <div className={classnames(classes.formWrapper)}>
          <form noValidate autoComplete="off" onSubmit={this.submitHandler}>
            <div className={classnames(classes.inputWrapper)}>
              <Input
                labelText="Enter your e-mail address"
                formControlProps={{
                  required: true,
                  fullWidth: true,
                }}
                inputProps={{
                  value: userEmail,
                  onChange: this.handleChange('userEmail'),
                  'aria-label': 'Enter your e-mail address',
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
                  value: userPassword,
                  onChange: this.handleChange('userPassword'),
                  'aria-label': 'Enter your password',
                  type: 'password',
                  endAdornment: (
                    <InputAdornment position="end" color="primary">
                      <LockOutlined className={classes.icon} />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <GridContainer className={classnames(classes.buttonsWrapper)}>
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
      </Fragment>
    );
  }
}

LoginForm.propTypes = propTypes;

export default withStyles(loginFormStyles)(LoginForm);
