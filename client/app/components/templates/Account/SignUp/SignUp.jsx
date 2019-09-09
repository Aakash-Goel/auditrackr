import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { object } from 'prop-types';

import TwoColumnLayout from '../../../../layouts/TwoColumnLayout';
import GridContainer from '../../../atoms/Grid/GridContainer';
import AuthCarousel from '../../../molecules/Carousels/AuthCarousel';
import AuthFooter from '../../../molecules/Footers/AuthFooter';
import AuthRightColumn from '../../../organisms/AuthRightColumn';
import SignUpForm from '../../../organisms/SignUpForm';

/**
 * Type checking - Define prop types
 * @private
 */
const propTypes = {
  classes: object.isRequired,
};

const rightColumn = () => {
  return (
    <AuthRightColumn title="Sign up for an account">
      <SignUpForm />
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

const AccountSignUp = () => {
  return (
    <Fragment>
      <TwoColumnLayout
        pageTitle="Sign up | AuditTrackR"
        pageDesc="My website description goes here"
        pageId="signUpPage"
        childrenRightColumn={rightColumn()}
        childrenLeftColumn={leftColumn()}
      />
    </Fragment>
  );
};

AccountSignUp.propTypes = propTypes;

export default connect()(AccountSignUp);
