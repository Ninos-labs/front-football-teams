export type ResultsTypes = 'Not played' | 'Loss' | 'Win' | 'Draw';
export type AtTypes = 'Home' | 'Abroad' | 'Neutral';

export type FinalResultsTypes = {
  results: ResultsTypes;
  at: AtTypes;
  gf: string;
  ga: string;
};
