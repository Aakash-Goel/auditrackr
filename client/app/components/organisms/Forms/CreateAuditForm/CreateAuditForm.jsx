import React, { PureComponent, Fragment } from 'react';
import classnames from 'classnames';
import { object, func } from 'prop-types';
import isEmpty from 'lodash/fp/isEmpty';

import { withStyles } from '@material-ui/core/styles';

import Button from '../../../atoms/Button';
import FormWrapper from '../FormWrapper';
import FormInput from '../FormInput';
import { checkIsError } from '../../../../utils/formInputUtil';

import createAuditFormStyles from './CreateAuditForm.style';

const propTypes = {
  classes: object.isRequired,
  formWrapperData: object,
  onSubmitCreateAuditForm: func.isRequired,
};

const defaultProps = {
  formWrapperData: {},
};

class CreateAuditForm extends PureComponent {
  constructor(props) {
    super(props);

    this.validationObject = {};
    this.submitFormHandler = this.submitFormHandler.bind(this);
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

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  submitFormHandler = errorObj => {
    // check if there is no error
    if (isEmpty(errorObj)) {
      const { formWrapperData } = this.props;

      this.props.onSubmitCreateAuditForm({
        auditNameVal: formWrapperData.auditName.value,
        projectNameVal: formWrapperData.projectName.value,
        projectIdVal: formWrapperData.projectId.value,
        projectCategoryVal: 'Finance', // formWrapperData.projectCategory.value
      });
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <div>
          <FormWrapper
            id="createAuditForm"
            identifier="createAuditForm"
            onSubmit={this.submitFormHandler}
            formWrapperData={this.props.formWrapperData}
            noValidate
            autoComplete="off"
          >
            <div className={classnames(classes.inputWrapper)}>
              <FormInput
                validationRule="name"
                identifier="createAuditForm"
                labelText="Enter an audit name"
                formControlProps={{
                  required: true,
                  fullWidth: true,
                }}
                inputProps={{
                  id: 'auditName',
                  name: 'auditName',
                  'aria-label': 'Enter an audit name',
                }}
                {...{
                  auditNameError: this.validationObject.auditNameError,
                }}
                showFieldLevelErrorMsz
                error={checkIsError(this.props.formWrapperData, 'auditName')}
              />
            </div>
            <div className={classnames(classes.inputWrapper)}>
              <FormInput
                validationRule="name"
                identifier="createAuditForm"
                labelText="Enter the project name"
                formControlProps={{
                  required: true,
                  fullWidth: true,
                }}
                inputProps={{
                  id: 'projectName',
                  name: 'projectName',
                  'aria-label': 'Enter the project name',
                }}
                {...{
                  projectNameError: this.validationObject.projectNameError,
                }}
                showFieldLevelErrorMsz
                error={checkIsError(this.props.formWrapperData, 'projectName')}
              />
            </div>
            <div className={classnames(classes.inputWrapper)}>
              <FormInput
                validationRule="number"
                identifier="createAuditForm"
                labelText="Enter the project id"
                formControlProps={{
                  required: true,
                  fullWidth: true,
                }}
                inputProps={{
                  id: 'projectId',
                  name: 'projectId',
                  'aria-label': 'Enter the project id',
                }}
                {...{
                  projectIdError: this.validationObject.projectIdError,
                }}
                showFieldLevelErrorMsz
                error={checkIsError(this.props.formWrapperData, 'projectId')}
              />
            </div>
            <div className={classnames(classes.inputWrapper)}>
              <FormInput
                validationRule="category"
                identifier="createAuditForm"
                labelText="Select a category"
                formControlProps={{
                  required: true,
                  fullWidth: true,
                }}
                inputProps={{
                  id: 'projectCategory',
                  name: 'projectCategory',
                  'aria-label': 'Select a category',
                }}
                {...{
                  projectCategoryError: this.validationObject
                    .projectCategoryError,
                }}
                showFieldLevelErrorMsz
                error={checkIsError(
                  this.props.formWrapperData,
                  'projectCategory'
                )}
              />
            </div>
            <div className={classnames(classes.buttonsWrapper)}>
              <Button type="submit" fullWidth size="lg">
                Start new audit
              </Button>
            </div>
          </FormWrapper>
        </div>
      </Fragment>
    );
  }
}

CreateAuditForm.propTypes = propTypes;
CreateAuditForm.defaultProps = defaultProps;

export default withStyles(createAuditFormStyles)(CreateAuditForm);
