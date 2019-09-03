import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  updateFormIdentifierData,
  addFormIdentifierData,
} from '../FormWrapper/actions';
import { formWrapperState } from '../FormWrapper/selectors';

import Input from '../../../atoms/Input';

export const FormInput = props => {
  return <Input {...props} />;
};

const mapStateToProps = createStructuredSelector({
  formWrapperSelector: formWrapperState,
});

export const mapDispatchToProps = dispatch => ({
  updateFormIdentifierData: data => {
    dispatch(updateFormIdentifierData(data));
  },
  addFormIdentifierData: data => {
    dispatch(addFormIdentifierData(data));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormInput);
