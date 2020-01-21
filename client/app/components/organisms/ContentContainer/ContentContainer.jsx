import React from 'react';
import { object, node, string, bool } from 'prop-types';
import classnames from 'classnames';

import { withStyles } from '@material-ui/core/styles';

import Breadcrumbs from '../../molecules/Breadcrumbs';
import Paper from '../../molecules/Paper';

import contentContainerStyles from './ContentContainer.style';

const propTypes = {
  classes: object.isRequired,
  children: node.isRequired,
  breadCrumbTitle: string,
  shouldRenderBreadcrumb: bool,
  shouldRenderBeforeWrapper: bool,
  shouldRenderInsidePaper: bool,
  wrapperClass: string,
  containerClass: string,
};

const defaultProps = {
  breadCrumbTitle: '',
  shouldRenderBreadcrumb: true,
  shouldRenderBeforeWrapper: false,
  shouldRenderInsidePaper: true,
  wrapperClass: '',
  containerClass: '',
};

const ContentContainer = props => {
  const {
    classes,
    children,
    breadCrumbTitle,
    shouldRenderBreadcrumb,
    shouldRenderBeforeWrapper,
    shouldRenderInsidePaper,
    wrapperClass,
    containerClass,
  } = props;

  return (
    <>
      {shouldRenderBeforeWrapper && (
        <div className={classes.contentWrapperBefore} />
      )}
      <div className={classnames(classes.contentWrapper, wrapperClass)}>
        {shouldRenderBreadcrumb && (
          <Breadcrumbs titleBreadcrumb={breadCrumbTitle} />
        )}
        <div className={classnames(classes.contentContainer, containerClass)}>
          {shouldRenderInsidePaper && <Paper>{children}</Paper>}
          {!shouldRenderInsidePaper && <>{children}</>}
        </div>
      </div>
    </>
  );
};

ContentContainer.propTypes = propTypes;
ContentContainer.defaultProps = defaultProps;

export default withStyles(contentContainerStyles)(ContentContainer);
