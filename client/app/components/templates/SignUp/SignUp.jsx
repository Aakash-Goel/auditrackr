import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { object } from 'prop-types';
import classnames from 'classnames';

import { InputAdornment } from '@material-ui/core';
import {
  PersonOutlined,
  EmailOutlined,
  LockOutlined,
} from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';

import { Link } from '../../../../routes';
import Head from '../../atoms/Head';
import GridContainer from '../../atoms/Grid/GridContainer';
import GridItem from '../../atoms/Grid/GridItem';
import Title from '../../atoms/Title';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import Checkbox from '../../atoms/Checkbox';
import Carousel from '../../atoms/Carousel';

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
                <div className={classnames(classes.formWrapper)}>
                  <form noValidate autoComplete="off">
                    <div className={classnames(classes.inputWrapper)}>
                      <Input
                        labelText="Enter your username"
                        formControlProps={{
                          required: true,
                          fullWidth: true,
                        }}
                        inputProps={{
                          endAdornment: (
                            <InputAdornment position="end" color="primary">
                              <PersonOutlined className={classes.icon} />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </div>
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
                    <div className={classnames(classes.inputWrapper)}>
                      <Input
                        labelText="Enter your password again"
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
                    <div className={classnames(classes.consentWrapper)}>
                      <p className={classnames(classes.consentContainer)}>
                        <Checkbox
                          checkboxProps={{
                            checked: true,
                          }}
                        />
                        By signing up you agree&nbsp;
                        <Link to="/tos">
                          <Button href="/tos" link size="lg" textTransform="nn">
                            Terms & Conditions
                          </Button>
                        </Link>
                      </p>
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
                          Sign up
                        </Button>
                      </GridItem>
                      <GridItem
                        xs={12}
                        md={6}
                        className={classnames(classes.btnLinkWrapper)}
                      >
                        <Link to="/login">
                          <Button
                            href="/login"
                            link
                            textTransform="nn"
                            className={classnames(classes.btnLink)}
                          >
                            I already have an account
                          </Button>
                        </Link>
                      </GridItem>
                    </GridContainer>
                  </form>
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
