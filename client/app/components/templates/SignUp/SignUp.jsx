import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import Head from '../../atoms/Head';

const SignUp = () => {
  return (
    <Fragment>
      <Head
        title="Sign up | AuditTrackR"
        description="My website description goes here"
      />
      <div>Sign up Page</div>
    </Fragment>
  );
};

export default connect()(SignUp);
