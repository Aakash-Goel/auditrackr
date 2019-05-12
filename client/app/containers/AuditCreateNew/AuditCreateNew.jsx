import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { object } from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import LayoutMain from 'app-containers/Layouts/LayoutMain';
import { CreateNew as AuditCreateNew } from 'app-components';

import auditCreateNewStyles from './AuditCreateNew.style';

const propTypes = {
  classes: object.isRequired,
};

/* eslint-disable react/prefer-stateless-function */
class AuditCreateNewContainer extends PureComponent {
  render() {
    const { classes } = this.props;

    return (
      <LayoutMain
        pageTitle="Create New Audit"
        pageDesc="This is AuditTrackR new audit create page"
        pageId="audit-create-new"
      >
        <div className={classes.contentWrapperBefore} />
        <div className={classes.contentWrapper}>
          <AuditCreateNew />
        </div>
      </LayoutMain>
    );
  }
}

AuditCreateNewContainer.propTypes = propTypes;

const mapStateToProps = () => ({});
const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(auditCreateNewStyles)(AuditCreateNewContainer));
