import { theme } from 'config/theme';

export const barChartItems = [
  { name: 'Win', fill: theme.colors.pastelGreen },
  { name: 'Draw', fill: theme.colors.blueZodiac },
  { name: 'Loss', fill: theme.colors.japonica }
];

export const areaChartItems = [
  { name: 'wins', fill: theme.colors.pastelGreen },
  { name: 'draws', fill: theme.colors.blueZodiac },
  { name: 'losses', fill: theme.colors.japonica }
];

export const goalsAvgAreaChartItems = [
  { name: 'gf', fill: theme.colors.pastelGreen },
  { name: 'ga', fill: theme.colors.japonica }
];

export const goalsByTeamAreaChartItems = [
  { name: 'gf_sum', fill: theme.colors.pastelGreen },
  { name: 'ga_sum', fill: theme.colors.japonica }
];

export const goalsMaxAndMinAreaChartItems = [
  { name: 'gf_max', fill: theme.colors.pastelGreen },
  { name: 'ga_max', fill: theme.colors.japonica }
];

export const winsByTeamItems = [{ name: 'wins', fill: theme.colors.pastelGreen }];
export const drawsByTeamItems = [{ name: 'draws', fill: theme.colors.blueZodiac }];
export const lossesByTeamItems = [{ name: 'losses', fill: theme.colors.japonica }];
