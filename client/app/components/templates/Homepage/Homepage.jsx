import React, { PureComponent } from 'react';
import { object } from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import classnames from 'classnames';

import { withStyles } from '@material-ui/core/styles';

import GridContainer from '../../atoms/Grid/GridContainer';
import GridItem from '../../atoms/Grid/GridItem';
import Title from '../../atoms/Title';
import Head from '../../atoms/Head';
import FormWrapper from '../../organisms/Forms/FormWrapper';
import FormInput from '../../organisms/Forms/FormInput';
import Button from '../../atoms/Button';
import Checkbox from '../../atoms/Checkbox';
import { formWrapperSelector } from '../../organisms/Forms/FormWrapper/selectors';
import {
  checkIsError,
  getFormWrapperDataValue,
} from '../../../utils/formInputUtil';

/**
 * @property propTypes
 */
const propTypes = {
  classes: object.isRequired,
  formWrapperData: object,
};

const defaultProps = {
  formWrapperData: {},
};

const homepageStyle = {
  bgBrand: {
    background: '#4E3883',
    color: '#000',
  },
  bgPrimary: {
    background: '#1181B2', // '#4A4E9D',
    color: '#fff',
  },
  bgSecondary: {
    background: '#00438b',
    color: '#fff',
  },
  bgWhite: {
    background: '#fff',
    color: '#000',
  },
  bgBlack: {
    background: '#212221', // '#262B33',
    color: '#fff',
  },
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
    const { classes } = this.props;
    // console.log('1212-===classes ', classes);
    // console.log('1212-===this.props ', this.props);

    return (
      <>
        <Head
          title="My website"
          description="My website description goes here"
        />

        <GridContainer alignItems="center">
          <GridItem xs={3} className={classnames(classes.bgPrimary)}>
            <Title level={1}>Randome title</Title>
            <p className={classnames(classes.description)}>
              Random description
            </p>
            <GridItem xs={4}>
              <Button type="button" fullWidth size="lg">
                button
              </Button>
            </GridItem>
          </GridItem>
          <GridItem xs={3} className={classnames(classes.bgWhite)}>
            <Title level={1}>Randome title</Title>
            <p className={classnames(classes.description)}>
              Random description
            </p>
            <GridItem xs={4}>
              <Button type="button" fullWidth size="lg">
                button
              </Button>
            </GridItem>
          </GridItem>
          <GridItem xs={3} className={classnames(classes.bgBlack)}>
            <Title level={1}>Randome title</Title>
            <p className={classnames(classes.description)}>
              Random description
            </p>
            <GridItem xs={4}>
              <Button type="button" fullWidth size="lg">
                button
              </Button>
            </GridItem>
          </GridItem>
          <GridItem xs={3} className={classnames(classes.bgSecondary)}>
            <Title level={1}>Randome title</Title>
            <p className={classnames(classes.description)}>
              Random description
            </p>
            <GridItem xs={4}>
              <Button type="button" fullWidth size="lg">
                button
              </Button>
            </GridItem>
          </GridItem>
        </GridContainer>

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
            error={checkIsError(this.props.formWrapperData, 'email')}
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
            error={checkIsError(this.props.formWrapperData, 'password')}
          />
          <Checkbox
            checkboxProps={{
              checked: this.state.isCheckBoxChecked,
              onChange: this.handleCheckBoxChange('isCheckBoxChecked'),
              inputProps: {
                name: 'agreeTnC',
              },
            }}
            {...{
              agreeTnCError: !this.state.isCheckBoxChecked
                ? 'This is required'
                : '',
            }}
            error={!this.state.isCheckBoxChecked}
            groupLabel="Test Checkbox Group"
          />
          <FormInput
            validationRule="category"
            identifier="testLoginForm"
            labelText="Select a category"
            formControlProps={{
              required: true,
              fullWidth: true,
            }}
            inputProps={{
              value: getFormWrapperDataValue(
                this.props.formWrapperData,
                'projectCategory',
                'value'
              ),
              id: 'projectCategory',
              name: 'projectCategory',
              'aria-label': 'Select a category',
              type: 'select',
            }}
            {...{
              projectCategoryError: this.validationObject.projectCategoryError,
            }}
            error={checkIsError(this.props.formWrapperData, 'projectCategory')}
            selectProps={{
              optionList: [
                { text: 'Action', value: 'action' },
                {
                  text: 'Another action',
                  value: 'another action',
                  disabled: true,
                },
                { text: 'Something else here', value: 'something else' },
                { divider: true },
                { text: 'Separated link', value: 'link' },
                { divider: true },
                { text: 'One more separated link', value: 'more links' },
              ],
            }}
          />
          <Button type="submit" fullWidth size="lg">
            Login
          </Button>
        </FormWrapper>
      </>
    );
  }
}

Homepage.propTypes = propTypes;
Homepage.defaultProps = defaultProps;

export const mapStateToProps = createStructuredSelector({
  formWrapperData: formWrapperSelector('testLoginForm'),
});

export default connect(mapStateToProps)(withStyles(homepageStyle)(Homepage));
