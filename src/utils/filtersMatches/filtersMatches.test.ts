import { byPlayed, byNotPLayed } from './filtersMatches';

describe('Utils | Filters Matches', () => {
  let matches: { results: string; versus: string }[] = [];
  beforeEach(() => {
    matches = [
      {
        results: 'Not played',
        versus: 'Chile'
      },
      {
        results: 'Win',
        versus: 'Brasil'
      },
      {
        results: 'Loss',
        versus: 'Argentina'
      }
    ];
  });

  it('should return an array with matches not played yet', () => {
    matches = matches.filter(byNotPLayed);
    expect(matches.length).toBe(1);
    expect(matches).toEqual([
      {
        results: 'Not played',
        versus: 'Chile'
      }
    ]);
  });

  it('should return an array with matches played', () => {
    matches = matches.filter(byPlayed);
    expect(matches.length).toBe(2);
    expect(matches).toEqual([
      {
        results: 'Win',
        versus: 'Brasil'
      },
      {
        results: 'Loss',
        versus: 'Argentina'
      }
    ]);
  });
});
