import React from 'react';
import classnames from 'classnames';
import { object, string } from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';

import Title from '../../atoms/Title';

import breadcrumbsStyles from './Breadcrumbs.style';

const propTypes = {
  classes: object.isRequired,
  containerClass: string,
  titleClass: string,
  titleBreadcrumb: string,
};

const defaultProps = {
  containerClass: '',
  titleClass: '',
  titleBreadcrumb: '',
};

const Breadcrumbs = ({
  classes,
  containerClass,
  titleClass,
  titleBreadcrumb,
}) => {
  return (
    <>
      <div className={classnames(classes.breadcrumbsContainer, containerClass)}>
        <Title
          level={1}
          variant="h2"
          textTransform="upc"
          className={classnames(classes.breadcrumbsHeading, titleClass)}
        >
          {titleBreadcrumb}
        </Title>
      </div>
    </>
  );
};

Breadcrumbs.propTypes = propTypes;
Breadcrumbs.defaultProps = defaultProps;

export default withStyles(breadcrumbsStyles)(Breadcrumbs);
