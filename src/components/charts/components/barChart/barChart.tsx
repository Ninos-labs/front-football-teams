import React from 'react';
import PropTypes from 'prop-types';
import { XAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar } from 'recharts';

import { BarChartTypes } from './barChart.types';

const WrapperBarChart = ({ data, items, xAxis }: BarChartTypes) => (
  <div>
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey={xAxis} />
      <Tooltip />
      <Legend />
      {items.map((item, index) => (
        <Bar key={index} dataKey={item.name} stackId="a" fill={item.fill} />
      ))}
    </BarChart>
  </div>
);

WrapperBarChart.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      fill: PropTypes.string.isRequired
    }).isRequired
  ),
  data: PropTypes.array.isRequired,
  xAxis: PropTypes.string.isRequired
};

export default WrapperBarChart;
