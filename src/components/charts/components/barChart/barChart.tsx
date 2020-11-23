import React from 'react';
import PropTypes from 'prop-types';
import { XAxis, CartesianGrid, Tooltip, BarChart, Bar, ResponsiveContainer } from 'recharts';

import { BarChartTypes } from './barChart.types';

const WrapperBarChart = ({ data, items, xAxis, customTooltip }: BarChartTypes) => (
  <ResponsiveContainer minWidth="600" minHeight="200px">
    <BarChart
      width={600}
      height={200}
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
      <Tooltip content={customTooltip} />
      {items.map((item, index) => (
        <Bar key={index} dataKey={item.name} stackId="a" fill={item.fill} />
      ))}
    </BarChart>
  </ResponsiveContainer>
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
