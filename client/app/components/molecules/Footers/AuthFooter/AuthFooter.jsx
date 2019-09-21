import React from 'react';
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
    <>
      <GridItem xs={12} className={classnames(classes.footerWrapper)}>
        <ul className={classnames(classes.footerList)}>
          <li className={classnames(classes.footerItem)}>
            <Link to="/about">
              <Button
                href="/about"
                link
                size="lg"
                textTransform="nn"
                color="secondary"
              >
                About us
              </Button>
            </Link>
          </li>

          <li className={classnames(classes.footerItem)}>
            <Link to="/help">
              <Button
                href="/help"
                link
                size="lg"
                textTransform="nn"
                color="secondary"
              >
                Help center
              </Button>
            </Link>
          </li>
          <li className={classnames(classes.footerItem)}>
            <Link to="/contact">
              <Button
                href="/contact"
                link
                size="lg"
                textTransform="nn"
                color="secondary"
              >
                Contact us
              </Button>
            </Link>
          </li>
          <li className={classnames(classes.footerItem)}>
            <Link to="/tos">
              <Button
                href="/tos"
                link
                size="lg"
                textTransform="nn"
                color="secondary"
              >
                Terms
              </Button>
            </Link>
          </li>
          <li className={classnames(classes.footerItem)}>
            <Link to="/privacy">
              <Button
                href="/privacy"
                link
                size="lg"
                textTransform="nn"
                color="secondary"
              >
                Privacy policy
              </Button>
            </Link>
          </li>
          <li className={classnames(classes.footerItem)}>
            <Link to="/cookies">
              <Button
                href="/cookies"
                link
                size="lg"
                textTransform="nn"
                color="secondary"
              >
                Cookies
              </Button>
            </Link>
          </li>
        </ul>
      </GridItem>
    </>
  );
};

AuthFooter.propTypes = propTypes;

export default connect()(withStyles(authFooterStyles)(AuthFooter));
