import React, { PureComponent } from 'react';
import { string, object } from 'prop-types';
import { Bar } from 'react-chartjs-2';

const propTypes = {
  wrapperClassName: string,
  chartProps: object.isRequired,
};

const defaultProps = {
  wrapperClassName: null,
};

class BarChart extends PureComponent {
  render() {
    const { wrapperClassName, chartProps } = this.props;

    return (
      <div className={wrapperClassName}>
        <Bar {...chartProps} />
      </div>
    );
  }
}

BarChart.propTypes = propTypes;
BarChart.defaultProps = defaultProps;

export default BarChart;
