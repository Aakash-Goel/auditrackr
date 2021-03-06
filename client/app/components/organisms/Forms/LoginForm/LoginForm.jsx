import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { object, func } from 'prop-types';
import _isEmpty from 'lodash/isEmpty';

import { withStyles } from '@material-ui/core/styles';

import GridContainer from '../../../atoms/Grid/GridContainer';
import GridItem from '../../../atoms/Grid/GridItem';
import Button from '../../../atoms/Button';
import Link from '../../../atoms/Link';
import FormWrapper from '../FormWrapper';
import FormInput from '../FormInput';
import {
  checkIsError,
  validationObject,
} from '../../../../utils/formInputUtil';
import APP_URLS from '../../../../constants/appUrls';

import loginFormStyles from './LoginForm.style';

const propTypes = {
  classes: object.isRequired,
  formWrapperData: object,
  error: object,
  onSubmitLoginForm: func.isRequired,
};

const defaultProps = {
  formWrapperData: {},
  error: null,
};

class LoginForm extends PureComponent {
  constructor(props) {
    super(props);

    this.validationObject = {};
    this.submitFormHandler = this.submitFormHandler.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.formWrapperData) {
      this.validationObject = validationObject(nextProps.formWrapperData);
    }
  }

  submitFormHandler = errorObj => {
    // check if there is no error
    if (_isEmpty(errorObj)) {
      const { formWrapperData } = this.props;

      this.props.onSubmitLoginForm({
        email: formWrapperData.emailId.value,
        password: formWrapperData.password.value,
      });
    }
  };

  render() {
    const { classes, error } = this.props;

    return (
      <>
        <div>
          <FormWrapper
            id="loginForm"
            identifier="loginForm"
            onSubmit={this.submitFormHandler}
            formWrapperData={this.props.formWrapperData}
            className={classnames(classes.formWrapper)}
            {...{
              loginFormError: error,
            }}
            noValidate
            autoComplete="off"
          >
            <div className={classnames(classes.inputWrapper)}>
              <FormInput
                validationRule="email"
                identifier="loginForm"
                labelText="Enter your e-mail address"
                formControlProps={{
                  required: true,
                  fullWidth: true,
                }}
                inputProps={{
                  id: 'emailId',
                  name: 'emailId',
                  'aria-label': 'Enter your e-mail address',
                }}
                {...{
                  emailIdError: this.validationObject.emailIdError,
                }}
                error={checkIsError(this.props.formWrapperData, 'emailId')}
              />
            </div>
            <div className={classnames(classes.inputWrapper)}>
              <FormInput
                validationRule="password"
                identifier="loginForm"
                labelText="Enter your password"
                formControlProps={{
                  required: true,
                  fullWidth: true,
                }}
                inputProps={{
                  id: 'password',
                  name: 'password',
                  'aria-label': 'Enter your password',
                  type: 'password',
                }}
                {...{
                  passwordError: this.validationObject.passwordError,
                }}
                error={checkIsError(this.props.formWrapperData, 'password')}
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
          </FormWrapper>
        </div>
        <div>
          <p className={classnames(classes.helper)}>
            Don&#39;t have an account?&nbsp;
            <Link href={APP_URLS.signUp.url}>Sign up</Link>
          </p>
        </div>
      </>
    );
  }
}

LoginForm.propTypes = propTypes;
LoginForm.defaultProps = defaultProps;

export default withStyles(loginFormStyles)(LoginForm);
