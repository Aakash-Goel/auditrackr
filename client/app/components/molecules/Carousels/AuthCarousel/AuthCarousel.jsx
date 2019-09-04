import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { object } from 'prop-types';
import classnames from 'classnames';

import { withStyles } from '@material-ui/core/styles';

import GridItem from '../../../atoms/Grid/GridItem';
import Carousel from '../../../atoms/Carousel';
import Title from '../../../atoms/Title';

import authCarouselStyles from './AuthCarousel.style';

/**
 * Type checking - Define prop types
 * @private
 */
const propTypes = {
  classes: object.isRequired,
};

const AuthCarousel = ({ ...props }) => {
  const { classes } = props;

  const settings = {
    dots: true,
    arrows: false,
    autoplay: true,
    dotsClass: classnames(classes.carouselDotsClass),
  };

  return (
    <Fragment>
      <GridItem xs={12} md={5} className={classnames(classes.carouselWrapper)}>
        <Carousel {...settings}>
          <div>
            <Title level={2} className={classnames(classes.carouselHeading)}>
              Don&#39;t let a messy audit be your fate
            </Title>
            <div className={classnames(classes.carouselImgWrapper)}>
              <img alt="a" src="/static/images/audit.png" />
            </div>
          </div>
          <div>
            <Title level={2} className={classnames(classes.carouselHeading)}>
              Don&#39;t let a messy audit be your fate
            </Title>
            <div className={classnames(classes.carouselImgWrapper)}>
              <img alt="b" src="/static/images/audit.png" />
            </div>
          </div>
          <div>
            <Title level={2} className={classnames(classes.carouselHeading)}>
              Don&#39;t let a messy audit be your fate
            </Title>
            <div className={classnames(classes.carouselImgWrapper)}>
              <img alt="c" src="/static/images/audit.png" />
            </div>
          </div>
          <div>
            <Title level={2} className={classnames(classes.carouselHeading)}>
              Don&#39;t let a messy audit be your fate
            </Title>
            <div className={classnames(classes.carouselImgWrapper)}>
              <img alt="d" src="/static/images/audit.png" />
            </div>
          </div>
        </Carousel>
      </GridItem>
    </Fragment>
  );
};

AuthCarousel.propTypes = propTypes;

export default connect()(withStyles(authCarouselStyles)(AuthCarousel));
