import { AtTypes, ItemTypes, DataTypes } from './formatMatchesAvgByAt.types';

export const byAt = (item: ItemTypes, at: AtTypes) => item.description.includes(at);

export const itemFormatted = (item: ItemTypes, at: AtTypes) => ({
  name: item.description.replace(`,${at}`, ''),
  value: Number(item.value.toFixed(2))
});

export const formatMatchesAvgByAt = (data: ItemTypes[]) => {
  const home: DataTypes = { name: 'Local' };
  data
    .filter((item) => byAt(item, 'Home'))
    .map((item) => itemFormatted(item, 'Home'))
    .map((item) => (home[item.name] = item.value));

  const abroad: DataTypes = { name: 'Visita' };
  data
    .filter((item) => byAt(item, 'Abroad'))
    .map((item) => itemFormatted(item, 'Abroad'))
    .map((item) => (abroad[item.name] = item.value))
    .map((item) => ({ ...(item as any), name: 'Visita' }));

  const neutral: DataTypes = { name: 'Neutral' };
  data
    .filter((item) => byAt(item, 'Neutral'))
    .map((item) => itemFormatted(item, 'Neutral'))
    .map((item) => (neutral[item.name] = item.value));

  return [home, abroad, neutral];
};
