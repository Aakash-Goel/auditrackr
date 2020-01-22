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
import Box from '../../../molecules/Box';

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

const renderTableHead = () => {
  const data = createAuditHeadData();
  const column = data.map((d, index) => {
    return (
      <Box display="table-cell">
        <Title
          key={index}
          level={4}
          variant="h6"
          color="grey"
          weight="light"
          theme="secondary"
        >
          <span>{d.name}</span>
        </Title>
      </Box>
    );
  });

  return <Box display="table-row">{column}</Box>;
};

const renderTableColumn = data => {
  const columns = data.map((d, i) => {
    return (
      <Box key={i} display="table-cell">
        <span>{d.name}</span>
      </Box>
    );
  });
  return columns;
};

const renderTable = auditData => {
  return (
    <Box display="table" width="100%">
      {renderTableHead()}
      {auditData.map((data, index) => {
        const columnData = createAuditColumnsData(data);
        return (
          <Box key={index} display="table-row">
            {renderTableColumn(columnData)}
          </Box>
        );
      })}
    </Box>
  );
};

const renderInfo = () => {
  return (
    <Box textAlign="center" clone>
      <GridContainer>
        <GridItem>
          <Paragraph>
            Ahh! Looks like there is no project created by you or shared with
            you.
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
    </Box>
  );
};

const AuditList = props => {
  const { classes, auditData } = props;
  const hasProjects = auditData.length !== 0;

  return (
    <>
      <Paper className={classnames(classes.paperWrapper)}>
        <Box display="flex">
          <Box flexGrow={1} alignItems="baseline" clone>
            <Title
              level={3}
              variant="h5"
              color="black"
              weight="light"
              textTransform="upc"
            >
              Recent audits
            </Title>
          </Box>

          {hasProjects ? (
            <Link to="/account/audit/dashboard">
              <Button
                link
                href={APP_URLS.auditCreate.url}
                size="md"
                textTransform="nn"
                className={classnames(classes.btnViewAll)}
              >
                View All &gt;
              </Button>
            </Link>
          ) : null}
        </Box>
        {hasProjects ? renderTable(auditData) : renderInfo()}
      </Paper>
    </>
  );
};

AuditList.propTypes = propTypes;
AuditList.defaultProps = defaultProps;

export default withStyles(auditListStyles)(AuditList);
