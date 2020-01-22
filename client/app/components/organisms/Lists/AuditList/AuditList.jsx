/* eslint-disable react/no-array-index-key */
import React from 'react';
import { array } from 'prop-types';
import classnames from 'classnames';

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

import {
  createAuditHeadData,
  createAuditColumnsData,
  createColorPrefix,
} from './utility';
import auditListStyles from './AuditList.style';

const propTypes = {
  auditData: array,
};

const defaultProps = {
  auditData: null,
};

const renderTableHead = () => {
  const data = createAuditHeadData();
  const column = data.map((d, index) => {
    return (
      <Box display="table-cell" color="grey.500" p={1} pl={2} pr={2}>
        <Title
          key={index}
          level={4}
          variant="h6"
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

const renderTableColumn = (classes, data) => {
  const btnViewProject = {
    component: (
      <Box textAlign="right">
        <Button size="sm">View</Button>
      </Box>
    ),
  };
  data.push(btnViewProject);

  const columns = data.map((d, i) => {
    const colorPrefix = createColorPrefix(d.color, d.name);

    const columnClasses = classnames({
      [classes[`${d.color}${colorPrefix}`]]: d.color,
    });

    return (
      <Box
        key={i}
        display="table-cell"
        p={1}
        pl={2}
        pr={2}
        className={columnClasses}
      >
        {d.name && <span>{d.name}</span>}
        {d.component && <>{d.component}</>}
      </Box>
    );
  });

  return columns;
};

const renderTable = (classes, auditData) => {
  return (
    <Box display="table" width="100%">
      {renderTableHead()}
      {auditData.map((data, index) => {
        const columnData = createAuditColumnsData(data);
        return (
          <Box
            key={index}
            display="table-row"
            className={classnames(classes.tableRow)}
          >
            {renderTableColumn(classes, columnData)}
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
  const classes = auditListStyles();
  const { auditData } = props;
  const hasProjects = auditData.length !== 0;

  return (
    <>
      <Paper className={classnames(classes.paperWrapper)}>
        <Box
          display="flex"
          borderBottom={1}
          borderColor="grey.500"
          color="grey.500"
          p={2}
        >
          <Box flexGrow={1} alignItems="baseline" clone>
            <Title
              level={3}
              variant="h5"
              weight="light"
              color="black"
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
        {hasProjects ? renderTable(classes, auditData) : renderInfo()}
      </Paper>
    </>
  );
};

AuditList.propTypes = propTypes;
AuditList.defaultProps = defaultProps;

export default AuditList;
