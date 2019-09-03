import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { object } from 'prop-types';
import classnames from 'classnames';

import { withStyles } from '@material-ui/core/styles';

import Head from '../../atoms/Head';
import Button from '../../atoms/Button';
import GridContainer from '../../atoms/Grid/GridContainer';
import GridItem from '../../atoms/Grid/GridItem';
import Title from '../../atoms/Title';
import Carousel from '../../atoms/Carousel';
import SignUpForm from '../../organisms/SignUpForm';

import { Link } from '../../../../routes';

import signUpStyles from './SignUp.styles';

/**
 * Type checking - Define prop types
 * @private
 */
const propTypes = {
  classes: object.isRequired,
};

const SignUpContainer = ({ ...props }) => {
  const { classes } = props;
  console.log(props);

  const settings = {
    dots: true,
    arrows: false,
    autoplay: true,
    dotsClass: classnames(classes.carouselDotsClass),
  };

  return (
    <Fragment>
      <Head
        title="Sign up | AuditTrackR"
        description="My website description goes here"
      />
      <div id="signUpPage" className={classnames(classes.pageWrapper)}>
        <GridContainer
          direction="row-reverse"
          className={classnames(classes.contentWrapper)}
        >
          <GridItem
            md={5}
            className={classnames(classes.cell, classes.utilityBlock)}
          >
            <GridContainer direction="column" alignItems="center">
              <GridItem xs={8}>
                <Title level={1} className={classnames(classes.heading)}>
                  Sign up for an account
                </Title>
                <SignUpForm />
              </GridItem>
              <GridItem
                xs={12}
                className={classnames(classes.copyrightWrapper)}
              >
                <p>
                  Copyright &copy; 2019-2020 AuditTrackR. All rights reserved{' '}
                </p>
              </GridItem>
            </GridContainer>
          </GridItem>
          <GridItem
            md={7}
            className={classnames(classes.cell, classes.infoBlock)}
          >
            <GridContainer direction="column" alignItems="center">
              <GridItem
                xs={12}
                md={5}
                className={classnames(classes.carouselWrapper)}
              >
                <Carousel {...settings}>
                  <div>
                    <Title
                      level={2}
                      className={classnames(classes.carouselHeading)}
                    >
                      Don&#39;t let a messy audit be your fate
                    </Title>
                    <div className={classnames(classes.carouselImgWrapper)}>
                      <img alt="a" src="/static/images/audit.png" />
                    </div>
                  </div>
                  <div>
                    <Title
                      level={2}
                      className={classnames(classes.carouselHeading)}
                    >
                      Don&#39;t let a messy audit be your fate
                    </Title>
                    <div className={classnames(classes.carouselImgWrapper)}>
                      <img alt="b" src="/static/images/audit.png" />
                    </div>
                  </div>
                  <div>
                    <Title
                      level={2}
                      className={classnames(classes.carouselHeading)}
                    >
                      Don&#39;t let a messy audit be your fate
                    </Title>
                    <div className={classnames(classes.carouselImgWrapper)}>
                      <img alt="c" src="/static/images/audit.png" />
                    </div>
                  </div>
                  <div>
                    <Title
                      level={2}
                      className={classnames(classes.carouselHeading)}
                    >
                      Don&#39;t let a messy audit be your fate
                    </Title>
                    <div className={classnames(classes.carouselImgWrapper)}>
                      <img alt="d" src="/static/images/audit.png" />
                    </div>
                  </div>
                </Carousel>
              </GridItem>
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
            </GridContainer>
          </GridItem>
        </GridContainer>
      </div>
    </Fragment>
  );
};

SignUpContainer.propTypes = propTypes;

export default connect()(withStyles(signUpStyles)(SignUpContainer));
