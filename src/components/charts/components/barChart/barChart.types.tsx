export type DataTypes = {
  name: string;
};

export type ItemTypes = {
  name: string;
  fill: string;
};

export type xAxisTypes = string;

export interface BarChartTypes {
  data: DataTypes[];
  items: ItemTypes[];
  xAxis: xAxisTypes;
  customTooltip?: any;
}
