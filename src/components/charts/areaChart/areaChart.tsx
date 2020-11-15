import React, { FC } from 'react';
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip } from 'recharts';

const WrapperAreaChart = ({ data, items }: any) => (
  <div style={{ width: 'calc(100% - 450px)' }}>
    <AreaChart
      width={1200}
      height={300}
      data={data}
      stackOffset="expand"
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0
      }}
    >
      <CartesianGrid strokeDasharray="2 2" />
      <XAxis dataKey="years" />
      <Tooltip />
      {items.map((item: any, index: number) => (
        <Area
          key={index}
          type="monotone"
          dataKey={item.name}
          stackId="1"
          fill={item.fill}
          stroke={item.fill}
        />
      ))}
    </AreaChart>
  </div>
);

export default WrapperAreaChart;
