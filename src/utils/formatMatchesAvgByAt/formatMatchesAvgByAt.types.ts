import { AtTypes as At } from 'components/match/components/finalResults/finalResults.types';

export type ItemTypes = {
  description: string;
  value: number;
};

export type DataTypes = {
  name: string;
  [key: string]: string | number;
};

export type AtTypes = At;
