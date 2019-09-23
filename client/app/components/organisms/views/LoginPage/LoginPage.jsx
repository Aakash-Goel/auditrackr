import React, { PureComponent } from 'react';

import TwoColumnLayout from '../../../../layouts/TwoColumnLayout';
import GridContainer from '../../../atoms/Grid/GridContainer';
import AuthCarousel from '../../../molecules/Carousels/AuthCarousel';
import AuthFooter from '../../../molecules/Footers/AuthFooter';
import AuthRightColumn from '../../AuthRightColumn';
import LoginForm from '../../Forms/LoginForm';

class LoginPage extends PureComponent {
  constructor(props) {
    super(props);

    this.rightColumn = this.rightColumn.bind(this);
    this.leftColumn = this.leftColumn.bind(this);
  }

  rightColumn = () => {
    return (
      <AuthRightColumn title="Login to your account">
        <LoginForm {...this.props} />
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
          pageTitle="Login | AuditTrackR"
          pageDesc="My website description goes here"
          pageId="loginPage"
          childrenRightColumn={this.rightColumn()}
          childrenLeftColumn={this.leftColumn()}
        />
      </>
    );
  }
}

export default LoginPage;
