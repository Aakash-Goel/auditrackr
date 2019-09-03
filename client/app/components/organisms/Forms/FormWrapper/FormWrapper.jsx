import React from 'react';
import { connect } from 'react-redux';

import Form from '../../../molecules/Form';
import { updateFormIdentifierData, clearFormIdentifierData } from './actions';

export const FormWrapper = props => {
  return <Form {...props} />;
};
// const mapStateToProps = () => ({});

export const mapDispatchToProps = dispatch => ({
  updateFormIdentifierData: data => {
    dispatch(updateFormIdentifierData(data));
  },
  clearFormIdentifierData: data => {
    dispatch(clearFormIdentifierData(data));
  },
});

export default connect(
  null,
  mapDispatchToProps
)(FormWrapper);
