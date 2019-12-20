import React, { PureComponent } from 'react';
import { string, object } from 'prop-types';
import { Pie } from 'react-chartjs-2';

const propTypes = {
  wrapperClassName: string,
  chartProps: object.isRequired,
};

const defaultProps = {
  wrapperClassName: null,
};

class PieChart extends PureComponent {
  render() {
    const { wrapperClassName, chartProps } = this.props;

    return (
      <div className={wrapperClassName}>
        <Pie {...chartProps} />
      </div>
    );
  }
}

PieChart.propTypes = propTypes;
PieChart.defaultProps = defaultProps;

export default PieChart;
