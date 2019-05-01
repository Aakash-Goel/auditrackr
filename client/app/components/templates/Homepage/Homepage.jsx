import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';

import Head from '../../atoms/Head';

import MessageForm from '../../organisms/MessageForm';

// import { selectCount } from './HomepageSelectors';

/* istanbul ignore next */
const propTypes = {
  testData: PropTypes.any,
};

/* istanbul ignore next */
const defaultProps = {
  testData: {},
};

/* istanbul ignore next */
const Homepage = () => {
  return (
    <Fragment>
      <Head title="My website" description="My website description goes here" />

      <MessageForm />
    </Fragment>
  );
};

/* istanbul ignore next */
Homepage.propTypes = propTypes;
/* istanbul ignore next */
Homepage.defaultProps = defaultProps;

// export const mapStateToProps = createStructuredSelector({
//   testData: selectCount(),
// });

export default connect()(Homepage);
