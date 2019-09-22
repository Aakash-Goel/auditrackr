import React, { PureComponent } from 'react';
import Link from 'next/link';
import classnames from 'classnames';
import { object } from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { InputAdornment } from '@material-ui/core';
import {
  PersonOutlined,
  EmailOutlined,
  LockOutlined,
} from '@material-ui/icons';

import GridContainer from '../../atoms/Grid/GridContainer';
import GridItem from '../../atoms/Grid/GridItem';
import Input from '../../atoms/Input';
import Checkbox from '../../atoms/Checkbox';
import Button from '../../atoms/Button';

import ServiceUtil from '../../../utils/serviceUtil';

import signUpFormStyles from './SignUpForm.style';

const propTypes = {
  classes: object.isRequired,
};

/* eslint-disable react/prefer-stateless-function */
class SignUpForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      userEmail: '',
      userPassword: '',
      userConfirmPassword: '',
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
    const {
      userName,
      userEmail,
      userPassword,
      // userConfirmPassword,
    } = this.state;

    const userAgreeTerms = true;

    const requestData = {
      query: `
        mutation {
          createUser(userInput: {name: "${userName}", email: "${userEmail}", password: "${userPassword}", agreeTerms: ${userAgreeTerms}}) {
            _id
            name
            email
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
          alert('Successfully Submitted!!!'); // eslint-disable-line
        }
      })
      .catch(error => {
        console.log('error>>> ', error); // eslint-disable-line
      });
  };

  render() {
    const { classes } = this.props;
    const {
      userName,
      userEmail,
      userPassword,
      userConfirmPassword,
    } = this.state;

    return (
      <>
        <div className={classnames(classes.formWrapper)}>
          <form noValidate autoComplete="off" onSubmit={this.submitHandler}>
            <div className={classnames(classes.inputWrapper)}>
              <Input
                labelText="Enter your name"
                formControlProps={{
                  required: true,
                  fullWidth: true,
                }}
                inputProps={{
                  value: userName,
                  onChange: this.handleChange('userName'),
                  'aria-label': 'Enter your name',
                  endAdornment: (
                    <InputAdornment position="end" color="primary">
                      <PersonOutlined className={classes.icon} />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
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
            <div className={classnames(classes.inputWrapper)}>
              <Input
                labelText="Enter your password again"
                formControlProps={{
                  required: true,
                  fullWidth: true,
                }}
                inputProps={{
                  value: userConfirmPassword,
                  onChange: this.handleChange('userConfirmPassword'),
                  'aria-label': 'Enter your password again',
                  type: 'password',
                  endAdornment: (
                    <InputAdornment position="end" color="primary">
                      <LockOutlined className={classes.icon} />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <div className={classnames(classes.consentWrapper)}>
              <p className={classnames(classes.consentContainer)}>
                <Checkbox
                  checkboxProps={{
                    checked: true,
                  }}
                />
                By signing up you agree&nbsp;
                <Link href="/tos">
                  <Button href="/tos" link size="lg" textTransform="nn">
                    Terms & Conditions
                  </Button>
                </Link>
              </p>
            </div>
            <GridContainer className={classnames(classes.buttonsWrapper)}>
              <GridItem xs={12} md={6}>
                <Button
                  type="submit"
                  fullWidth
                  size="lg"
                  className={classnames(classes.btnSubmit)}
                >
                  Sign up
                </Button>
              </GridItem>
              <GridItem
                xs={12}
                md={6}
                className={classnames(classes.btnLinkWrapper)}
              >
                <Link href="/login">
                  <Button
                    href="/login"
                    link
                    textTransform="nn"
                    className={classnames(classes.btnLink)}
                  >
                    I already have an account
                  </Button>
                </Link>
              </GridItem>
            </GridContainer>
          </form>
        </div>
      </>
    );
  }
}

SignUpForm.propTypes = propTypes;

export default withStyles(signUpFormStyles)(SignUpForm);
