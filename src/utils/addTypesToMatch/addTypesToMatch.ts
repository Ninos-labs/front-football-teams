import { addTypesToMatchTypes } from './addTypesToMatch.types';

export const addTypesToMatch = (match: addTypesToMatchTypes) => ({
  ...match,
  at: match.at,
  results: match.results
});
