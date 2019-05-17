import React, { Fragment } from 'react';
import classnames from 'classnames';
import { object, string } from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';

import { Title } from 'app-components';

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
    <Fragment>
      <div className={classnames(classes.breadcrumbsContainer, containerClass)}>
        <Title
          level={1}
          className={classnames(classes.breadcrumbsHeading, titleClass)}
        >
          {titleBreadcrumb}
        </Title>
      </div>
    </Fragment>
  );
};

Breadcrumbs.propTypes = propTypes;
Breadcrumbs.defaultProps = defaultProps;

export default withStyles(breadcrumbsStyles)(Breadcrumbs);
