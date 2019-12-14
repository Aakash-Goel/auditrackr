import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { object, func } from 'prop-types';
import isEmpty from 'lodash/fp/isEmpty';

import { withStyles } from '@material-ui/core/styles';

import GridContainer from '../../../atoms/Grid/GridContainer';
import GridItem from '../../../atoms/Grid/GridItem';
import Checkbox from '../../../atoms/Checkbox';
import Button from '../../../atoms/Button';
import Link from '../../../atoms/Link';
import FormWrapper from '../FormWrapper';
import FormInput from '../FormInput';
import {
  checkIsError,
  validationObject,
} from '../../../../utils/formInputUtil';

import signUpFormStyles from './SignUpForm.style';

const propTypes = {
  classes: object.isRequired,
  formWrapperData: object,
  error: object,
  onSubmitSignUpForm: func.isRequired,
};

const defaultProps = {
  formWrapperData: {},
  error: null,
};

class SignUpForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasTermsChecked: false,
    };

    this.validationObject = {};
    this.handleChange = this.handleChange.bind(this);
    this.submitFormHandler = this.submitFormHandler.bind(this);
    this.renderTnC = this.renderTnC.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.formWrapperData) {
      this.validationObject = validationObject(nextProps.formWrapperData);
    }
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.checked,
    });
  };

  submitFormHandler = errorObj => {
    const { hasTermsChecked } = this.state;
    // check if there is no error
    if (isEmpty(errorObj) && hasTermsChecked) {
      const { formWrapperData } = this.props;

      this.props.onSubmitSignUpForm({
        userName: formWrapperData.userName.value,
        userEmail: formWrapperData.userEmail.value,
        userPassword: formWrapperData.userPassword.value,
        userAgreeTerms: hasTermsChecked,
      });
    }
  };

  renderTnC() {
    return (
      <>
        <span>
          By signing up you agree&nbsp;
          <Link href="/tos">Terms & Conditions</Link>
        </span>
      </>
    );
  }

  render() {
    const { classes, error } = this.props;
    const { hasTermsChecked } = this.state;

    return (
      <>
        <div className={classnames(classes.formWrapper)}>
          <FormWrapper
            id="signUpForm"
            identifier="signUpForm"
            onSubmit={this.submitFormHandler}
            formWrapperData={this.props.formWrapperData}
            className={classnames(classes.formWrapper)}
            {...{
              signUpFormError: error,
            }}
            noValidate
            autoComplete="off"
          >
            <div className={classnames(classes.inputWrapper)}>
              <FormInput
                validationRule="name"
                identifier="signUpForm"
                labelText="Enter your name"
                formControlProps={{
                  required: true,
                  fullWidth: true,
                }}
                inputProps={{
                  id: 'userName',
                  name: 'userName',
                  'aria-label': 'Enter your name',
                }}
                {...{
                  userNameError: this.validationObject.userNameError,
                }}
                error={checkIsError(this.props.formWrapperData, 'userName')}
              />
            </div>
            <div className={classnames(classes.inputWrapper)}>
              <FormInput
                validationRule="email"
                identifier="signUpForm"
                labelText="Enter your e-mail address"
                formControlProps={{
                  required: true,
                  fullWidth: true,
                }}
                inputProps={{
                  id: 'userEmail',
                  name: 'userEmail',
                  'aria-label': 'Enter your e-mail address',
                }}
                {...{
                  userEmailError: this.validationObject.userEmailError,
                }}
                error={checkIsError(this.props.formWrapperData, 'userEmail')}
              />
            </div>
            <div className={classnames(classes.inputWrapper)}>
              <FormInput
                validationRule="password"
                identifier="signUpForm"
                labelText="Enter your password"
                formControlProps={{
                  required: true,
                  fullWidth: true,
                }}
                inputProps={{
                  id: 'userPassword',
                  name: 'userPassword',
                  'aria-label': 'Enter your password',
                  type: 'password',
                }}
                {...{
                  userPasswordError: this.validationObject.userPasswordError,
                }}
                error={checkIsError(this.props.formWrapperData, 'userPassword')}
              />
            </div>
            <div className={classnames(classes.inputWrapper)}>
              <FormInput
                validationRule="password"
                identifier="signUpForm"
                labelText="Enter your password again"
                formControlProps={{
                  required: true,
                  fullWidth: true,
                }}
                inputProps={{
                  id: 'userConfirmPassword',
                  name: 'userConfirmPassword',
                  'aria-label': 'Enter your password again',
                  type: 'password',
                }}
                {...{
                  userConfirmPasswordError: this.validationObject
                    .userConfirmPasswordError,
                }}
                error={checkIsError(
                  this.props.formWrapperData,
                  'userConfirmPassword'
                )}
              />
            </div>
            <div className={classnames(classes.consentWrapper)}>
              <p className={classnames(classes.consentContainer)}>
                <Checkbox
                  formControlLabelProps={{
                    label: this.renderTnC(),
                  }}
                  checkboxProps={{
                    disabled: true,
                    required: true,
                    checked: hasTermsChecked,
                    onChange: this.handleChange('hasTermsChecked'),
                    value: hasTermsChecked,
                    inputProps: {
                      'aria-label': 'terms and condition checkbox',
                    },
                  }}
                />
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
                <Link href="/account/login">I already have an account</Link>
              </GridItem>
            </GridContainer>
          </FormWrapper>
        </div>
      </>
    );
  }
}

SignUpForm.propTypes = propTypes;
SignUpForm.defaultProps = defaultProps;

export default withStyles(signUpFormStyles)(SignUpForm);
