import React, { PureComponent } from 'react';
import { object } from 'prop-types';
import classnames from 'classnames';

import { withStyles } from '@material-ui/core/styles';

import GridContainer from '../../../atoms/Grid/GridContainer';
import GridItem from '../../../atoms/Grid/GridItem';
import Title from '../../../atoms/Title';
import Paragraph from '../../../atoms/Paragraph';
import Paper from '../../../molecules/Paper';
import DoughnutChart from '../../../molecules/Charts/DoughnutChart';
import AuditList from '../../Lists/AuditList';

import dashboardAuditPageStyles from './DashboardAuditPage.style';

const propTypes = {
  classes: object.isRequired,
  data: object,
};

const defaultProps = {
  data: null,
};

class DashboardAuditPage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      chartData: {
        labels: ['Closed', 'InProgress', 'Complete', 'InReview'],
        datasets: [
          {
            data: [45, 40, 35, 3],
            backgroundColor: [
              'rgba(68, 172, 94, 1)',
              'rgba(233, 72, 62, 1)',
              'rgba(70, 136, 241, 1)',
              'rgba(248, 188, 47, 1)',
            ],
          },
        ],
      },
    };
  }

  render() {
    const { classes, data } = this.props;
    const { chartData } = this.state;
    // console.log('1212===data==== ', data);

    return (
      <>
        <GridContainer
          spacing={3}
          className={classnames(classes.statusWrapper)}
        >
          <GridItem xs={12} md={4}>
            <Paragraph color="grey" textTransform="upc" className="m0">
              Status
            </Paragraph>
            <DoughnutChart
              chartProps={{
                height: 260,
                data: chartData,
                options: {
                  legend: {
                    position: 'bottom',
                    labels: {
                      boxWidth: 10,
                      fontColor: '#14171a',
                      padding: 20,
                    },
                  },
                  maintainAspectRatio: false,
                },
              }}
            />
          </GridItem>
          <GridItem xs={12} md={5}>
            <GridContainer alignContent="center" spacing={3}>
              <GridItem xs={6}>
                <Paper
                  borderColor="warning"
                  className={classnames(classes.paperWrapper)}
                >
                  <Title level={4} variant="h1" color="warning">
                    67
                  </Title>
                  <Paragraph color="grey" className="m0">
                    Total Audits
                  </Paragraph>
                </Paper>
              </GridItem>
              <GridItem xs={6}>
                <Paper
                  borderColor="error"
                  className={classnames(classes.paperWrapper)}
                >
                  <Title level={4} variant="h1" color="error">
                    21
                  </Title>
                  <Paragraph color="grey" className="m0">
                    Audits InProgress
                  </Paragraph>
                </Paper>
              </GridItem>
            </GridContainer>
            <GridContainer alignContent="center" spacing={3}>
              <GridItem xs={6}>
                <Paper
                  borderColor="info"
                  className={classnames(classes.paperWrapper)}
                >
                  <Title level={4} variant="h1" color="info">
                    13
                  </Title>
                  <Paragraph color="grey" className="m0">
                    Audits Complete
                  </Paragraph>
                </Paper>
              </GridItem>
              <GridItem xs={6}>
                <Paper
                  borderColor="success"
                  className={classnames(classes.paperWrapper)}
                >
                  <Title level={4} variant="h1" color="success">
                    33
                  </Title>
                  <Paragraph color="grey" className="m0">
                    Audits Closed
                  </Paragraph>
                </Paper>
              </GridItem>
            </GridContainer>
          </GridItem>
          <GridItem xs={12} md={3}>
            {/* 3rd column */}
          </GridItem>
        </GridContainer>
        <GridContainer>
          <AuditList auditData={data.projects} />
        </GridContainer>
      </>
    );
  }
}

DashboardAuditPage.propTypes = propTypes;
DashboardAuditPage.defaultProps = defaultProps;

export default withStyles(dashboardAuditPageStyles)(DashboardAuditPage);
