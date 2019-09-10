import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import { object, bool } from 'prop-types';
import { createStructuredSelector } from 'reselect';

import TwoColumnLayout from '../../../../layouts/TwoColumnLayout';
import GridContainer from '../../../atoms/Grid/GridContainer';
import AuthCarousel from '../../../molecules/Carousels/AuthCarousel';
import AuthFooter from '../../../molecules/Footers/AuthFooter';
import AuthRightColumn from '../../../organisms/AuthRightColumn';
import LoginForm from '../../../organisms/LoginForm';

import { submitAccountLogIn } from './actions';
import {
  makeSelectIsAuthenticated,
  makeSelectIsLoading,
  makeSelectError,
} from './selectors';
import { formWrapperSelector } from '../../../organisms/Forms/FormWrapper/selectors';
import { Router } from '../../../../../routes';
import { isBrowser } from '../../../../utils/helpersUtil';

/**
 * Type checking - Define prop types
 * @private
 */
const propTypes = {
  classes: object.isRequired,
  isAuthenticated: bool.isRequired,
};

const rightColumn = props => {
  return (
    <AuthRightColumn title="Login to your account">
      <LoginForm {...props} />
    </AuthRightColumn>
  );
};

const leftColumn = () => {
  return (
    <GridContainer direction="column" alignItems="center">
      <AuthCarousel />
      <AuthFooter />
    </GridContainer>
  );
};

export class AccountLogin extends PureComponent {
  componentWillMount() {
    // @TODO: move below logic to one singleton file
    if (isBrowser() && this.props.isAuthenticated) {
      Router.pushRoute('audit-dashboard');
    }
  }

  componentWillReceiveProps(nextProps) {
    // @TODO: move below logic to one singleton file
    if (this.props.isAuthenticated !== nextProps.isAuthenticated) {
      if (nextProps.isAuthenticated) {
        Router.pushRoute('audit-dashboard');
      }
    }
  }

  render() {
    return (
      <Fragment>
        <TwoColumnLayout
          pageTitle="Login | AuditTrackR"
          pageDesc="My website description goes here"
          pageId="loginPage"
          childrenRightColumn={rightColumn(this.props)}
          childrenLeftColumn={leftColumn()}
        />
      </Fragment>
    );
  }
}

export const mapStateToProps = createStructuredSelector({
  isAuthenticated: makeSelectIsAuthenticated(),
  isLoading: makeSelectIsLoading(),
  error: makeSelectError(),
  formWrapperData: formWrapperSelector('login'),
  // profile: makeSelectProfile(),
});

export const mapDispatchToProps = dispatch => ({
  onSubmitClick(args) {
    dispatch(submitAccountLogIn(args));
  },
  getProfileData: customerId => {
    console.log('1212===customerId=== ', customerId);
    // dispatch(fetchProfileData(customerId));
  },
});

AccountLogin.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountLogin);
