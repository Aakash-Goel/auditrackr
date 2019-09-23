import React from 'react';
import { connect } from 'react-redux';
import { object } from 'prop-types';
import classnames from 'classnames';

import { withStyles } from '@material-ui/core/styles';

import GridItem from '../../../atoms/Grid/GridItem';
import Link from '../../../atoms/Link';

import authFooterStyles from './AuthFooter.style';

/**
 * Type checking - Define prop types
 * @private
 */
const propTypes = {
  classes: object.isRequired,
};

const AuthFooter = ({ ...props }) => {
  const { classes } = props;

  return (
    <>
      <GridItem xs={12} className={classnames(classes.footerWrapper)}>
        <ul className={classnames(classes.footerList)}>
          <li className={classnames(classes.footerItem)}>
            <Link href="/about" color="secondary">
              About us
            </Link>
          </li>

          <li className={classnames(classes.footerItem)}>
            <Link href="/help" color="secondary">
              Help center
            </Link>
          </li>
          <li className={classnames(classes.footerItem)}>
            <Link href="/contact" color="secondary">
              Contact us
            </Link>
          </li>
          <li className={classnames(classes.footerItem)}>
            <Link href="/tos" color="secondary">
              Terms
            </Link>
          </li>
          <li className={classnames(classes.footerItem)}>
            <Link href="/privacy" color="secondary">
              Privacy policy
            </Link>
          </li>
          <li className={classnames(classes.footerItem)}>
            <Link href="/cookies" color="secondary">
              Cookies
            </Link>
          </li>
        </ul>
      </GridItem>
    </>
  );
};

AuthFooter.propTypes = propTypes;

export default connect()(withStyles(authFooterStyles)(AuthFooter));
