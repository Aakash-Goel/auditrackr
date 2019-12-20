import React, { PureComponent } from 'react';
import { string, object } from 'prop-types';
import { Doughnut } from 'react-chartjs-2';

const propTypes = {
  wrapperClassName: string,
  chartProps: object.isRequired,
};

const defaultProps = {
  wrapperClassName: null,
};

class DoughnutChart extends PureComponent {
  render() {
    const { wrapperClassName, chartProps } = this.props;

    return (
      <div className={wrapperClassName}>
        <Doughnut {...chartProps} />
      </div>
    );
  }
}

DoughnutChart.propTypes = propTypes;
DoughnutChart.defaultProps = defaultProps;

export default DoughnutChart;
