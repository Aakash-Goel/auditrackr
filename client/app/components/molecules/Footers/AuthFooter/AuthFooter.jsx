import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { object } from 'prop-types';
import classnames from 'classnames';

import { withStyles } from '@material-ui/core/styles';

import GridItem from '../../../atoms/Grid/GridItem';
import Button from '../../../atoms/Button';
import { Link } from '../../../../../routes';

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
    <Fragment>
      <GridItem xs={12} className={classnames(classes.footerWrapper)}>
        <ul className={classnames(classes.footerList)}>
          <li className={classnames(classes.footerItem)}>
            <Link to="/about">
              <Button href="/about" link size="lg" textTransform="nn">
                About us
              </Button>
            </Link>
          </li>

          <li className={classnames(classes.footerItem)}>
            <Link to="/help">
              <Button href="/help" link size="lg" textTransform="nn">
                Help center
              </Button>
            </Link>
          </li>
          <li className={classnames(classes.footerItem)}>
            <Link to="/contact">
              <Button href="/contact" link size="lg" textTransform="nn">
                Contact us
              </Button>
            </Link>
          </li>
          <li className={classnames(classes.footerItem)}>
            <Link to="/tos">
              <Button href="/tos" link size="lg" textTransform="nn">
                Terms
              </Button>
            </Link>
          </li>
          <li className={classnames(classes.footerItem)}>
            <Link to="/privacy">
              <Button href="/privacy" link size="lg" textTransform="nn">
                Privacy policy
              </Button>
            </Link>
          </li>
          <li className={classnames(classes.footerItem)}>
            <Link to="/cookies">
              <Button href="/cookies" link size="lg" textTransform="nn">
                Cookies
              </Button>
            </Link>
          </li>
        </ul>
      </GridItem>
    </Fragment>
  );
};

AuthFooter.propTypes = propTypes;

export default connect()(withStyles(authFooterStyles)(AuthFooter));
