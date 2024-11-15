import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FilmDetailsOperationResult, FilmsDetailsObject } from 'src/services/interface';

export const selectFilmsDetails = createFeatureSelector<FilmDetailsOperationResult>('filmsDetails');

export const selectResult = createSelector(selectFilmsDetails, (state) => state.result);
export const selectIsLoading = createSelector(selectFilmsDetails, (state) => state.isLoading);
export const selectError = createSelector(selectFilmsDetails, (state) => state.error);
