import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CharacterDetailsOperationResult } from 'src/services/interface';

export const selectCharactersDetails = createFeatureSelector<CharacterDetailsOperationResult>('charactersDetails');

export const selectResult = createSelector(selectCharactersDetails, (state) => state.result);
export const selectIsLoading = createSelector(selectCharactersDetails, (state) => state.isLoading);
export const selectError= createSelector(selectCharactersDetails, (state) => state.error);
