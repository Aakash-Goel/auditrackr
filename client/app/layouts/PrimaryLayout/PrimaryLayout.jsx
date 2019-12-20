import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { object, node, string, bool, func } from 'prop-types';
import { createStructuredSelector } from 'reselect';
import classnames from 'classnames';

import { withStyles } from '@material-ui/core/styles';

// components
import Head from '../../components/atoms/Head';
import Header from '../../components/organisms/Header';
import Menu from '../../components/organisms/Menu';
import pages from '../../constants/navBarList';

// actions/selectors
import { toggleDrawerStatus } from './actions';
import { makeSelectDrawer } from './selectors';

import primaryLayoutStyles from './PrimaryLayout.style';

const propTypes = {
  classes: object.isRequired,
  children: node.isRequired,
  pageTitle: string.isRequired,
  pageDesc: string.isRequired,
  pageWrapperClassName: string,
  pageId: string,
  isDrawerOpen: bool,
  toggleDrawer: func,
};

const defaultProps = {
  pageWrapperClassName: '',
  pageId: '',
  isDrawerOpen: true,
  toggleDrawer: () => {},
};

class PrimaryLayout extends PureComponent {
  constructor(props) {
    super(props);

    this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
    this.handleDrawerClose = this.handleDrawerClose.bind(this);
  }

  handleDrawerOpen = () => {
    this.props.toggleDrawer(true);
  };

  handleDrawerClose = () => {
    this.props.toggleDrawer(false);
  };

  render() {
    const {
      classes,
      children,
      pageTitle,
      pageDesc,
      pageId,
      pageWrapperClassName,
      isDrawerOpen,
    } = this.props;

    return (
      <>
        <Head title={`${pageTitle} | AuditTrackR`} description={pageDesc} />
        <div
          id={pageId || pageTitle}
          className={classnames(classes.pageWrapper, pageWrapperClassName)}
        >
          <Header
            isMenuOpen={isDrawerOpen}
            onMenuOpen={this.handleDrawerOpen}
            onMenuClose={this.handleDrawerClose}
          />
          <Menu isMenuOpen={isDrawerOpen} menuItems={pages} />
          <main className={classes.mainWrapper}>
            {/* <div className={classes.appBarSpacer} /> */}
            <div className={classes.sectionWrapper}>{children}</div>
          </main>
        </div>
      </>
    );
  }
}

PrimaryLayout.propTypes = propTypes;
PrimaryLayout.defaultProps = defaultProps;

export const mapStateToProps = createStructuredSelector({
  isDrawerOpen: makeSelectDrawer(),
});

export const mapDispatchToProps = dispatch => ({
  toggleDrawer(openDrawer) {
    dispatch(toggleDrawerStatus(openDrawer));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(primaryLayoutStyles)(PrimaryLayout));
