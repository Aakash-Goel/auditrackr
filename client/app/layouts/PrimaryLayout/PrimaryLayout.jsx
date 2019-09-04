import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import { object, node, string } from 'prop-types';
import classnames from 'classnames';

import { withStyles } from '@material-ui/core/styles';

import Head from '../../components/atoms/Head';
import Header from '../../components/organisms/Header';
import Menu from '../../components/organisms/Menu';
import pages from '../../constants/navBarList';

import primaryLayoutStyles from './PrimaryLayout.style';

const propTypes = {
  classes: object.isRequired,
  children: node.isRequired,
  pageTitle: string.isRequired,
  pageDesc: string.isRequired,
  pageWrapperClassName: string,
  pageId: string,
};

const defaultProps = {
  pageWrapperClassName: '',
  pageId: '',
};

class PrimaryLayout extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      openMenu: true,
    };

    this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
    this.handleDrawerClose = this.handleDrawerClose.bind(this);
  }

  handleDrawerOpen = () => {
    this.setState({ openMenu: true });
  };

  handleDrawerClose = () => {
    this.setState({ openMenu: false });
  };

  render() {
    const {
      classes,
      children,
      pageTitle,
      pageDesc,
      pageId,
      pageWrapperClassName,
    } = this.props;

    const { openMenu } = this.state;

    return (
      <Fragment>
        <Head title={`${pageTitle} | AuditTrackR`} description={pageDesc} />
        <div
          id={pageId || pageTitle}
          className={classnames(classes.pageWrapper, pageWrapperClassName)}
        >
          <Header
            isMenuOpen={openMenu}
            onMenuOpen={this.handleDrawerOpen}
            onMenuClose={this.handleDrawerClose}
          />
          <Menu isMenuOpen={openMenu} menuItems={pages} />
          <main className={classes.mainWrapper}>
            <div className={classes.appBarSpacer} />
            <div className={classes.sectionWrapper}>{children}</div>
          </main>
        </div>
      </Fragment>
    );
  }
}

PrimaryLayout.propTypes = propTypes;
PrimaryLayout.defaultProps = defaultProps;

export default connect()(withStyles(primaryLayoutStyles)(PrimaryLayout));
