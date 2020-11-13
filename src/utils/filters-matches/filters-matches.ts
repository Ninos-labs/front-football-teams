import { FilterMatchesTypes } from './filters-matches.types';

export const byPlayed = (match: FilterMatchesTypes) =>
  match.results !== 'Not played';
export const byNotPLayed = (match: FilterMatchesTypes) =>
  match.results === 'Not played';
