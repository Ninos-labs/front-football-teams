export type AreaChartItemsTypes = [
  {
    name: string;
    fill: string;
  }
];

export type AreaChartTypes = {
  data: [];
  items: AreaChartItemsTypes;
  datakey: string;
  customTooltip?: any;
};
