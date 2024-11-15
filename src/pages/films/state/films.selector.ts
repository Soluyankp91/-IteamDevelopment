import { createFeatureSelector, createSelector } from '@ngrx/store';
import {  FilmsOperationResult } from '../../../services/interface';


export const selectFilms = createFeatureSelector<FilmsOperationResult>('films');

export const selectResult = createSelector(selectFilms, (state) => state.result);
export const selectIsLoading = createSelector(selectFilms, (state) => state.isLoading);
export const selectError = createSelector(selectFilms, (state) => state.error);
