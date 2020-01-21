/* eslint-disable react/no-array-index-key */
import React from 'react';
import { object, array } from 'prop-types';
import classnames from 'classnames';

import { withStyles } from '@material-ui/core/styles';

import Title from '../../../atoms/Title';
import Paragraph from '../../../atoms/Paragraph';
import Button from '../../../atoms/Button';
import { Link } from '../../../../../routes';
// import Icon from '../../../atoms/Icon';
import GridContainer from '../../../atoms/Grid/GridContainer';
import GridItem from '../../../atoms/Grid/GridItem';
import Paper from '../../../molecules/Paper';

import APP_URLS from '../../../../constants/appUrls';
// import addIcon from '../../../../static/icons/add-plus-button.svg?sprite'; // eslint-disable-line import/no-unresolved

import { createAuditHeadData, createAuditColumnsData } from './utility';
import auditListStyles from './AuditList.style';

const propTypes = {
  classes: object.isRequired,
  auditData: array,
};

const defaultProps = {
  auditData: null,
};

const renderTableHead = classes => {
  const data = createAuditHeadData();
  const column = data.map((d, index) => {
    return (
      <Title
        key={index}
        level={4}
        variant="h6"
        color="grey"
        weight="light"
        theme="secondary"
        className={classnames(classes.tableHead)}
      >
        <span>{d.name}</span>
      </Title>
    );
  });

  return <div className={classnames(classes.tableRow)}>{column}</div>;
};

const renderTableColumn = (classes, data) => {
  const columns = data.map((d, i) => {
    return (
      <div key={i} className={classnames(classes.tableCell)}>
        <span>{d.name}</span>
      </div>
    );
  });
  return columns;
};

const renderTable = (classes, auditData) => {
  return (
    <div className={classnames(classes.table)}>
      {renderTableHead(classes)}
      {auditData.map((data, index) => {
        const columnData = createAuditColumnsData(data);
        return (
          <div key={index} className={classnames(classes.tableRow)}>
            {renderTableColumn(classes, columnData)}
          </div>
        );
      })}
    </div>
  );
};

const renderInfo = classes => {
  return (
    <GridContainer className={classnames(classes.infoWrapper)}>
      <GridItem>
        <Paragraph>
          Ahh! Looks like there is no project created by you or shared with you.
        </Paragraph>
        <Paragraph>
          <Link to={APP_URLS.auditCreate.url}>
            <Button href={APP_URLS.auditCreate.url} size="md">
              Start Audit
            </Button>
          </Link>
        </Paragraph>
      </GridItem>
    </GridContainer>
  );
};

const AuditList = props => {
  const { classes, auditData } = props;
  const hasProjects = auditData.length !== 0;

  return (
    <>
      <Paper className={classnames(classes.paperWrapper)}>
        <div className={classnames(classes.headingWrapper)}>
          <Title
            level={3}
            variant="h5"
            color="black"
            weight="light"
            textTransform="upc"
            className={classnames(classes.heading)}
          >
            Recent audits
          </Title>
          {hasProjects ? (
            <Link to="/account/audit/dashboard">
              <Button
                link
                href={APP_URLS.auditCreate.url}
                size="md"
                textTransform="nn"
              >
                View All &gt;
              </Button>
            </Link>
          ) : null}
        </div>
        {hasProjects ? renderTable(classes, auditData) : renderInfo(classes)}
      </Paper>
    </>
  );
};

AuditList.propTypes = propTypes;
AuditList.defaultProps = defaultProps;

export default withStyles(auditListStyles)(AuditList);
