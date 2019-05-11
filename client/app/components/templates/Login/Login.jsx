import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { object } from 'prop-types';
import classnames from 'classnames';
import Link from 'next/link';

import { InputAdornment } from '@material-ui/core';
import { EmailOutlined, LockOutlined } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';

import Head from '../../atoms/Head';
import GridContainer from '../../atoms/Grid/GridContainer';
import GridItem from '../../atoms/Grid/GridItem';
import Title from '../../atoms/Title';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import Carousel from '../../atoms/Carousel';

import loginStyles from './Login.style';

/**
 * Type checking - Define prop types
 * @private
 */
const propTypes = {
  classes: object.isRequired,
};

const LoginContainer = ({ ...props }) => {
  const { classes } = props;

  const settings = {
    dots: true,
    arrows: false,
    autoplay: true,
    dotsClass: classnames(classes.carouselDotsClass),
  };

  return (
    <Fragment>
      <Head
        title="Login | AuditTrackR"
        description="My website description goes here"
      />
      <div id="loginPage" className={classnames(classes.pageWrapper)}>
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
                  Login to your account
                </Title>
                <div className={classnames(classes.formWrapper)}>
                  <form noValidate autoComplete="off">
                    <div className={classnames(classes.inputWrapper)}>
                      <Input
                        labelText="Enter your e-mail address"
                        formControlProps={{
                          required: true,
                          fullWidth: true,
                        }}
                        inputProps={{
                          endAdornment: (
                            <InputAdornment position="end" color="primary">
                              <EmailOutlined className={classes.icon} />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </div>
                    <div className={classnames(classes.inputWrapper)}>
                      <Input
                        labelText="Enter your password"
                        formControlProps={{
                          required: true,
                          fullWidth: true,
                        }}
                        inputProps={{
                          type: 'password',
                          endAdornment: (
                            <InputAdornment position="end" color="primary">
                              <LockOutlined className={classes.icon} />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </div>
                    <GridContainer
                      className={classnames(classes.buttonsWrapper)}
                    >
                      <GridItem xs={12} md={6}>
                        <Button
                          type="submit"
                          fullWidth
                          size="lg"
                          className={classnames(classes.btnSubmit)}
                        >
                          Login
                        </Button>
                      </GridItem>
                      <GridItem
                        xs={12}
                        md={6}
                        className={classnames(classes.btnLinkWrapper)}
                      >
                        <Button
                          link
                          textTransform="nn"
                          className={classnames(classes.btnLink)}
                        >
                          Forget password?
                        </Button>
                      </GridItem>
                    </GridContainer>
                  </form>
                </div>
                <div>
                  <p className={classnames(classes.helper)}>
                    Don&#39;t have an account?&nbsp;
                    <Link href="/signup">
                      <Button href="/signup" link size="lg" textTransform="nn">
                        Sign up
                      </Button>
                    </Link>
                  </p>
                </div>
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
                    <Link href="/about">
                      <Button href="/about" link size="lg" textTransform="nn">
                        About us
                      </Button>
                    </Link>
                  </li>

                  <li className={classnames(classes.footerItem)}>
                    <Link href="/help">
                      <Button href="/help" link size="lg" textTransform="nn">
                        Help center
                      </Button>
                    </Link>
                  </li>
                  <li className={classnames(classes.footerItem)}>
                    <Link href="/contact">
                      <Button href="/contact" link size="lg" textTransform="nn">
                        Contact us
                      </Button>
                    </Link>
                  </li>
                  <li className={classnames(classes.footerItem)}>
                    <Link href="/tos">
                      <Button href="/tos" link size="lg" textTransform="nn">
                        Terms
                      </Button>
                    </Link>
                  </li>
                  <li className={classnames(classes.footerItem)}>
                    <Link href="/privacy">
                      <Button href="/privacy" link size="lg" textTransform="nn">
                        Privacy policy
                      </Button>
                    </Link>
                  </li>
                  <li className={classnames(classes.footerItem)}>
                    <Link href="/cookies">
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

LoginContainer.propTypes = propTypes;

export default connect()(withStyles(loginStyles)(LoginContainer));
