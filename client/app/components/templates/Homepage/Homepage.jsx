import React, { Fragment, PureComponent } from 'react';
import { object } from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Head from '../../atoms/Head';
import FormWrapper from '../../organisms/Forms/FormWrapper';
import FormInput from '../../organisms/Forms/FormInput';
import Button from '../../atoms/Button';
import Checkbox from '../../atoms/Checkbox';
import { formWrapperSelector } from '../../organisms/Forms/FormWrapper/selectors';

/**
 * @property propTypes
 */
const propTypes = {
  formWrapperData: object,
};

const defaultProps = {
  formWrapperData: {},
};

/* getInitialProps
 * { req, res, pathname, query, asPath, store, isServer } = ctx
 */
class Homepage extends PureComponent {
  // static async getInitialProps({ res, ctx }) {
  //   return {};
  // }

  constructor(props) {
    super(props);

    this.validationObject = {};
    this.state = {
      isCheckBoxChecked: false,
    };

    // this.handleChange = this.handleChange.bind(this);

    this.submitTestForm = this.submitTestForm.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.formWrapperData) {
      Object.keys(nextProps.formWrapperData).forEach(item => {
        const fieldError = `${item}Error`;
        this.validationObject[item] = nextProps.formWrapperData[item].value;
        this.validationObject[fieldError] =
          nextProps.formWrapperData[item][fieldError] || '';
      });
    }
  }

  handleCheckBoxChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  submitTestForm(obj) {
    console.log('1212>>>>>>>submitTestForm>>>> ', obj);
  }

  render() {
    return (
      <Fragment>
        <Head
          title="My website"
          description="My website description goes here"
        />

        <FormWrapper
          id="testForm"
          identifier="testLoginForm"
          onSubmit={this.submitTestForm}
          formWrapperData={this.props.formWrapperData}
          noValidate
          // name="testForm"
        >
          <FormInput
            validationRule="email"
            identifier="testLoginForm"
            labelText="Enter your e-mail address"
            formControlProps={{
              required: true,
              fullWidth: true,
            }}
            inputProps={{
              id: 'email',
              name: 'email',
              // value: userEmail,
              // onChange: this.handleChange('userEmail'),
              'aria-label': 'Enter your e-mail address',
            }}
            {...{
              emailError: this.validationObject.emailError,
            }}
            showFieldLevelErrorMsz
            error={
              this.props.formWrapperData.email &&
              this.props.formWrapperData.email.emailError
            }
          />
          <FormInput
            validationRule="passwordValidation"
            identifier="testLoginForm"
            labelText="Enter your password"
            formControlProps={{
              required: true,
              fullWidth: true,
            }}
            inputProps={{
              id: 'password',
              name: 'password',
              // value: userPassword,
              // onChange: this.handleChange('userPassword'),
              'aria-label': 'Enter your password',
              type: 'password',
            }}
            {...{
              passwordError: this.validationObject.passwordError,
            }}
            showFieldLevelErrorMsz
            error={
              this.props.formWrapperData.password &&
              this.props.formWrapperData.password.passwordError
            }
          />
          <Checkbox
            checkboxProps={{
              checked: this.state.isCheckBoxChecked,
              onChange: this.handleCheckBoxChange('isCheckBoxChecked'),
              inputProps: {
                name: 'agreeTnC',
              },
            }}
            showFieldLevelErrorMsz
            {...{
              agreeTnCError: !this.state.isCheckBoxChecked
                ? 'This is required'
                : '',
            }}
            error={!this.state.isCheckBoxChecked}
            groupLabel="Test Checkbox Group"
          />
          <Button type="submit" fullWidth size="lg">
            Login
          </Button>
        </FormWrapper>
      </Fragment>
    );
  }
}

Homepage.propTypes = propTypes;
Homepage.defaultProps = defaultProps;

export const mapStateToProps = createStructuredSelector({
  formWrapperData: formWrapperSelector('testLoginForm'),
});

export default connect(mapStateToProps)(Homepage);
