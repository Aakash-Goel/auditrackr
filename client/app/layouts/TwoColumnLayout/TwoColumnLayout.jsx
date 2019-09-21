import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { object, node, string } from 'prop-types';
import classnames from 'classnames';

import { withStyles } from '@material-ui/core/styles';

import Head from '../../components/atoms/Head';
import GridContainer from '../../components/atoms/Grid/GridContainer';
import GridItem from '../../components/atoms/Grid/GridItem';

import twoColumnLayoutStyles from './TwoColumnLayout.style';

const propTypes = {
  classes: object.isRequired,
  childrenRightColumn: node.isRequired,
  childrenLeftColumn: node.isRequired,
  pageTitle: string.isRequired,
  pageDesc: string.isRequired,
  pageWrapperClassName: string,
  pageId: string,
};

const defaultProps = {
  pageWrapperClassName: '',
  pageId: '',
};

class TwoColumnLayout extends PureComponent {
  render() {
    const {
      classes,
      childrenRightColumn,
      childrenLeftColumn,
      pageTitle,
      pageDesc,
      pageId,
      pageWrapperClassName,
    } = this.props;

    return (
      <>
        <Head title={`${pageTitle} | AuditTrackR`} description={pageDesc} />
        <div
          id={pageId || pageTitle}
          className={classnames(classes.pageWrapper, pageWrapperClassName)}
        >
          <GridContainer
            direction="row-reverse"
            className={classnames(classes.contentWrapper)}
          >
            <GridItem
              md={5}
              className={classnames(classes.cell, classes.utilityBlock)}
            >
              {childrenRightColumn}
            </GridItem>
            <GridItem
              md={7}
              className={classnames(classes.cell, classes.infoBlock)}
            >
              {childrenLeftColumn}
            </GridItem>
          </GridContainer>
        </div>
      </>
    );
  }
}

TwoColumnLayout.propTypes = propTypes;
TwoColumnLayout.defaultProps = defaultProps;

export default connect()(withStyles(twoColumnLayoutStyles)(TwoColumnLayout));
