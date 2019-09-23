import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import SignUpPage from '../../../organisms/views/SignUpPage';
import { submitAccountSignUp } from './actions';
import {
  makeSelectData,
  makeSelectIsLoading,
  makeSelectError,
} from './selectors';
import { formWrapperSelector } from '../../../organisms/Forms/FormWrapper/selectors';

export class AccountSignUp extends PureComponent {
  render() {
    return (
      <>
        <SignUpPage {...this.props} />
      </>
    );
  }
}

export const mapStateToProps = createStructuredSelector({
  data: makeSelectData(),
  isLoading: makeSelectIsLoading(),
  error: makeSelectError(),
  formWrapperData: formWrapperSelector('signUpForm'),
});

export const mapDispatchToProps = dispatch => ({
  onSubmitSignUpForm(args) {
    dispatch(submitAccountSignUp(args));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountSignUp);
