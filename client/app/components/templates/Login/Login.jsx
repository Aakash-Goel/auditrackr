import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { object } from 'prop-types';

import TwoColumnLayout from '../../../layouts/TwoColumnLayout';
import GridContainer from '../../atoms/Grid/GridContainer';
import AuthCarousel from '../../molecules/Carousels/AuthCarousel';
import AuthFooter from '../../molecules/Footers/AuthFooter';
import AuthRightColumn from '../../organisms/AuthRightColumn';
import LoginForm from '../../organisms/LoginForm';

/**
 * Type checking - Define prop types
 * @private
 */
const propTypes = {
  classes: object.isRequired,
};

const rightColumn = () => {
  return (
    <AuthRightColumn title="Login to your account">
      <LoginForm />
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

const LoginContainer = () => {
  return (
    <Fragment>
      <TwoColumnLayout
        pageTitle="Login | AuditTrackR"
        pageDesc="My website description goes here"
        pageId="loginPage"
        childrenRightColumn={rightColumn()}
        childrenLeftColumn={leftColumn()}
      />
    </Fragment>
  );
};

LoginContainer.propTypes = propTypes;

export default connect()(LoginContainer);
