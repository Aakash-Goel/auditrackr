import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { object, func, array } from 'prop-types';
import _isEmpty from 'lodash/isEmpty';

import { withStyles } from '@material-ui/core/styles';

import Button from '../../../atoms/Button';
import FormWrapper from '../FormWrapper';
import FormInput from '../FormInput';
import {
  checkIsError,
  validationObject,
  getFormWrapperDataValue,
} from '../../../../utils/formInputUtil';

import createAuditFormStyles from './CreateAuditForm.style';

const propTypes = {
  classes: object.isRequired,
  formWrapperData: object,
  projDomainList: array,
  error: object,
  onSubmitCreateAuditForm: func.isRequired,
};

const defaultProps = {
  formWrapperData: {},
  projDomainList: [],
  error: null,
};

class CreateAuditForm extends PureComponent {
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

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  submitFormHandler = errorObj => {
    // check if there is no error
    if (_isEmpty(errorObj)) {
      const { formWrapperData } = this.props;

      this.props.onSubmitCreateAuditForm({
        projectAuditNameVal: formWrapperData.auditName.value,
        projectNameVal: formWrapperData.projectName.value,
        projectCodeVal: formWrapperData.projectId.value,
        projectDomainVal: formWrapperData.projectDomain.value,
        projectReviewersVal: formWrapperData.projectReviewers.value,
      });
    }
  };

  render() {
    const { classes, projDomainList, error } = this.props;

    return (
      <>
        <div>
          <FormWrapper
            id="createAuditForm"
            identifier="createAuditForm"
            onSubmit={this.submitFormHandler}
            formWrapperData={this.props.formWrapperData}
            {...{
              createAuditFormError: error,
            }}
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
                error={checkIsError(this.props.formWrapperData, 'projectId')}
              />
            </div>
            <div className={classnames(classes.inputWrapper)}>
              <FormInput
                validationRule="domain"
                identifier="createAuditForm"
                labelText="Select a domain"
                formControlProps={{
                  required: true,
                  fullWidth: true,
                }}
                inputProps={{
                  value: getFormWrapperDataValue(
                    this.props.formWrapperData,
                    'projectDomain',
                    'value'
                  ),
                  id: 'projectDomain',
                  name: 'projectDomain',
                  'aria-label': 'Select a domain',
                  type: 'select',
                }}
                {...{
                  projectDomainError: this.validationObject.projectDomainError,
                }}
                error={checkIsError(
                  this.props.formWrapperData,
                  'projectDomain'
                )}
                selectProps={{
                  optionList: projDomainList,
                }}
              />
            </div>
            <div className={classnames(classes.inputWrapper)}>
              <FormInput
                validationRule="email"
                identifier="createAuditForm"
                labelText="Enter reviewer's id"
                formControlProps={{
                  required: true,
                  fullWidth: true,
                }}
                inputProps={{
                  id: 'projectReviewers',
                  name: 'projectReviewers',
                  'aria-label': `Enter reviewer's id`,
                  type: 'multiple',
                }}
                {...{
                  projectReviewersError: this.validationObject
                    .projectReviewersError,
                }}
                error={checkIsError(
                  this.props.formWrapperData,
                  'projectReviewers'
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
      </>
    );
  }
}

CreateAuditForm.propTypes = propTypes;
CreateAuditForm.defaultProps = defaultProps;

export default withStyles(createAuditFormStyles)(CreateAuditForm);
