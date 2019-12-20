import React, { PureComponent } from 'react';
import { object } from 'prop-types';
// import classnames from 'classnames';

import { withStyles } from '@material-ui/core/styles';

import GridContainer from '../../../atoms/Grid/GridContainer';
import GridItem from '../../../atoms/Grid/GridItem';
import Paper from '../../../molecules/Paper';
import DoughnutChart from '../../../molecules/Charts/DoughnutChart';

const propTypes = {
  classes: object.isRequired,
};

const defaultProps = {};

class DashboardAuditPage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        labels: ['Messi', 'Ronaldo', 'Kane', 'Neymar'],
        datasets: [
          {
            label: 'Champions League 2017/2018 Top Scorer',
            data: [45, 40, 35, 30],
            backgroundColor: [
              'rgba(255,105,145,0.6)',
              'rgba(155,100,210,0.6)',
              'rgba(90,178,255,0.6)',
              'rgba(240,134,67,0.6)',
            ],
          },
        ],
      },
    };
  }

  render() {
    // const { classes } = this.props;
    const { data } = this.state;

    return (
      <>
        <GridContainer>
          <GridItem xs={12} md={4}>
            <DoughnutChart
              chartProps={{
                height: 200,
                data,
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
          <GridItem xs={12} md={4}>
            <GridContainer>
              <GridItem xs={6}>
                <Paper borderColor="info">1</Paper>
              </GridItem>
              <GridItem xs={6}>
                <Paper borderColor="error">2</Paper>
              </GridItem>
            </GridContainer>
            <GridContainer>
              <GridItem xs={6}>
                <Paper borderColor="secondary">3</Paper>
              </GridItem>
              <GridItem xs={6}>
                <Paper borderColor="success">4</Paper>
              </GridItem>
            </GridContainer>
          </GridItem>
          <GridItem xs={12} md={4}>
            box 3
          </GridItem>
        </GridContainer>
      </>
    );
  }
}

DashboardAuditPage.propTypes = propTypes;
DashboardAuditPage.defaultProps = defaultProps;

export default withStyles({})(DashboardAuditPage);
