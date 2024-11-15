import { createReducer, on } from '@ngrx/store';
import { FilmApiActions } from './films.actions';
import { FilmsOperationResult } from 'src/services/interface';

export const filmsInitialState: FilmsOperationResult = {
    result: null,
    isLoading: false,
    error: null,
};

export const filmsReducer = createReducer(
    filmsInitialState,
    on(FilmApiActions.filmsLoad, (_state, {}) => ({
        ..._state,
        isLoading: true,
        error: null,
    })),
    on(FilmApiActions.filmsLoadedSuccess, (_state, { films }) => ({
        result: films,
        isLoading: false,
        error: null,
    })),
    on(FilmApiActions.filmsLoadedError, (_state, { error }) => ({
        ..._state,
        isLoading: false,
        error,
    })),
    on(FilmApiActions.no_op_cache, (state) => ({ ...state, isLoading: false, error: null}))
);
