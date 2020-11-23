import { FilterMatchesTypes } from './filtersMatches.types';

export const byPlayed = (match: FilterMatchesTypes) => match.results !== 'Not played';
export const byNotPLayed = (match: FilterMatchesTypes) => match.results === 'Not played';
