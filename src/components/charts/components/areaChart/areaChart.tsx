import React from 'react';
import PropTypes from 'prop-types';
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip } from 'recharts';

import AreaChartStyled from './areaChart.styled';
import { AreaChartTypes } from './areaChart.types';

const WrapperAreaChart = ({ data, items, datakey }: AreaChartTypes) => (
  <AreaChartStyled>
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
      <XAxis dataKey={datakey} />
      <Tooltip />
      {items.map((item, index) => (
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
  </AreaChartStyled>
);

WrapperAreaChart.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      fill: PropTypes.string.isRequired
    }).isRequired
  ),
  data: PropTypes.array.isRequired,
  datakey: PropTypes.string.isRequired
};

export default WrapperAreaChart;
