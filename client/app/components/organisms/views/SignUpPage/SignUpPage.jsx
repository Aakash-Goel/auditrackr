import React, { PureComponent } from 'react';

import TwoColumnLayout from '../../../../layouts/TwoColumnLayout';
import GridContainer from '../../../atoms/Grid/GridContainer';
import AuthCarousel from '../../../molecules/Carousels/AuthCarousel';
import AuthFooter from '../../../molecules/Footers/AuthFooter';
import AuthRightColumn from '../../AuthRightColumn';
import SignUpForm from '../../Forms/SignUpForm';

class SignUpPage extends PureComponent {
  constructor(props) {
    super(props);

    this.rightColumn = this.rightColumn.bind(this);
    this.leftColumn = this.leftColumn.bind(this);
  }

  rightColumn = () => {
    return (
      <AuthRightColumn title="Sign up for an account">
        <SignUpForm {...this.props} />
      </AuthRightColumn>
    );
  };

  leftColumn = () => {
    return (
      <GridContainer direction="column" alignItems="center">
        <AuthCarousel />
        <AuthFooter />
      </GridContainer>
    );
  };

  render() {
    return (
      <>
        <TwoColumnLayout
          pageTitle="Sign up | AuditTrackR"
          pageDesc="My website description goes here"
          pageId="signUpPage"
          childrenRightColumn={this.rightColumn()}
          childrenLeftColumn={this.leftColumn()}
        />
      </>
    );
  }
}

export default SignUpPage;
