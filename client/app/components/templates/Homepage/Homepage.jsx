import React, { PureComponent } from 'react';
import { object } from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Head from '../../atoms/Head';
import Icon from '../../atoms/Icon';
import { formWrapperSelector } from '../../organisms/Forms/FormWrapper/selectors';

import homeIcon from '../../../static/icons/home.svg?sprite'; // eslint-disable-line import/no-unresolved

/**
 * @property propTypes
 */
const propTypes = {
  classes: object.isRequired,
  formWrapperData: object,
};

const defaultProps = {
  formWrapperData: {},
};

/* getInitialProps
 * { req, res, pathname, query, asPath, store, isServer } = ctx
 */
class Homepage extends PureComponent {
  componentWillReceiveProps() {}

  render() {
    // const { classes } = this.props;

    return (
      <>
        <Head
          title="My website"
          description="My website description goes here"
        />
        <Icon type={homeIcon} />
      </>
    );
  }
}

Homepage.propTypes = propTypes;
Homepage.defaultProps = defaultProps;

export const mapStateToProps = createStructuredSelector({
  formWrapperData: formWrapperSelector('testLoginForm'),
});

export default connect(mapStateToProps)(Homepage);
