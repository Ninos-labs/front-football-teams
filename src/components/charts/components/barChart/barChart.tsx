import React from 'react';
import PropTypes from 'prop-types';
import { XAxis, CartesianGrid, Tooltip, BarChart, Bar, ResponsiveContainer } from 'recharts';

import { BarChartTypes } from './barChart.types';

const WrapperBarChart = ({ data, items, xAxis, customTooltip }: BarChartTypes) => (
  <div>
    <ResponsiveContainer minWidth="600" minHeight="200px">
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="2 2" />
        <XAxis dataKey={xAxis} />
        <Tooltip content={customTooltip} />
        {items.map((item, index) => (
          <Bar key={index} maxBarSize={40} dataKey={item.name} stackId="a" fill={item.fill} />
        ))}
      </BarChart>
    </ResponsiveContainer>
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
