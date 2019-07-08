import React, { Fragment } from 'react';
import { object, node, string, bool } from 'prop-types';
import classnames from 'classnames';

import { Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import { Breadcrumbs } from 'app-components';

import contentContainerStyles from './ContentContainer.style';

const propTypes = {
  classes: object.isRequired,
  children: node.isRequired,
  breadCrumbTitle: string,
  shouldRenderBreadcrumb: bool,
  shouldRenderBeforeWrapper: bool,
  shouldRenderInsidePaper: bool,
};

const defaultProps = {
  breadCrumbTitle: '',
  shouldRenderBreadcrumb: true,
  shouldRenderBeforeWrapper: true,
  shouldRenderInsidePaper: true,
};

const ContentContainer = props => {
  const {
    classes,
    children,
    breadCrumbTitle,
    shouldRenderBreadcrumb,
    shouldRenderBeforeWrapper,
    shouldRenderInsidePaper,
  } = props;

  return (
    <Fragment>
      {shouldRenderBeforeWrapper && (
        <div className={classes.contentWrapperBefore} />
      )}
      <div className={classes.contentWrapper}>
        {shouldRenderBreadcrumb && (
          <Breadcrumbs titleBreadcrumb={breadCrumbTitle} />
        )}
        <div className={classnames(classes.contentContainer)}>
          {shouldRenderInsidePaper && (
            <Paper className={classes.paperRoot} elevation={1}>
              {children}
            </Paper>
          )}
          {!shouldRenderInsidePaper && <Fragment>{children}</Fragment>}
        </div>
      </div>
    </Fragment>
  );
};

ContentContainer.propTypes = propTypes;
ContentContainer.defaultProps = defaultProps;

export default withStyles(contentContainerStyles)(ContentContainer);