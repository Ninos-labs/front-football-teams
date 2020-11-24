import { byAt, itemFormatted, formatMatchesAvgByAt } from './formatMatchesAvgByAt';

describe('Format matches', () => {
  let data;
  beforeEach(() => {
    data = [
      { description: 'Loss,Home', value: 15.136476426799009 },
      { description: 'Loss,Abroad', value: 26.550868486352357 },
      { description: 'Win,Abroad', value: 5.955334987593052 },
      { description: 'Win,Home', value: 14.1439205955335 },
      { description: 'Draw,Abroad', value: 8.6848635235732 },
      { description: 'Loss,Neutral', value: 11.910669975186105 },
      { description: 'Win,Neutral', value: 3.4739454094292808 },
      { description: 'Draw,Neutral', value: 3.225806451612903 },
      { description: 'Draw,Home', value: 10.918114143920596 }
    ];
  });

  describe('Utilities', () => {
    it('should return a new array only with data where description include the Home word', () => {
      data = data.filter((item) => byAt(item, 'Home'));
      expect(data).toEqual([
        { description: 'Loss,Home', value: 15.136476426799009 },
        { description: 'Win,Home', value: 14.1439205955335 },
        { description: 'Draw,Home', value: 10.918114143920596 }
      ]);
    });

    it('should return a new array only with data where description include the Abroad word', () => {
      data = data.filter((item) => byAt(item, 'Abroad'));
      expect(data).toEqual([
        { description: 'Loss,Abroad', value: 26.550868486352357 },
        { description: 'Win,Abroad', value: 5.955334987593052 },
        { description: 'Draw,Abroad', value: 8.6848635235732 }
      ]);
    });

    it('should filter results of Abroad and format his data', () => {
      data = data
        .filter((item) => byAt(item, 'Abroad'))
        .map((item) => itemFormatted(item, 'Abroad'));
      expect(data).toEqual([
        { name: 'Loss', value: 26.55 },
        { name: 'Win', value: 5.96 },
        { name: 'Draw', value: 8.68 }
      ]);
    });
  });

  it('should return an array with divided data in three objects with following sort: home, abroad and neutral', () => {
    const home = { name: 'Local' };
    data
      .filter((item) => byAt(item, 'Home'))
      .map((item) => itemFormatted(item, 'Home'))
      .map((item) => (home[item.name] = item.value));

    const abroad = { name: 'Visita' };
    data
      .filter((item) => byAt(item, 'Abroad'))
      .map((item) => itemFormatted(item, 'Abroad'))
      .map((item) => (abroad[item.name] = item.value));

    const neutral = { name: 'Neutral' };
    data
      .filter((item) => byAt(item, 'Neutral'))
      .map((item) => itemFormatted(item, 'Neutral'))
      .map((item) => (neutral[item.name] = item.value));

    expect(formatMatchesAvgByAt(data)).toEqual([home, abroad, neutral]);
  });
});
