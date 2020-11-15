import React, { FC } from 'react';
import { XAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar } from 'recharts';

import { BarChartTypes } from './barChart.types';

const WrapperBarChart: FC<BarChartTypes> = ({ data, items, xAxis }) => (
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
      {items.map((item: any, index: number) => (
        <Bar key={index} dataKey={item.name} stackId="a" fill={item.fill} />
      ))}
    </BarChart>
  </div>
);

export default WrapperBarChart;
