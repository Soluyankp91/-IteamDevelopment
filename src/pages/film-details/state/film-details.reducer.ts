import { createReducer, on } from '@ngrx/store';
import { FilmDetailsApiActions } from './film-details.actions';
import { FilmDetailsOperationResult } from 'src/services/interface';

export const filmsDetailsInitialState: FilmDetailsOperationResult = {
    result: null,
    isLoading: false,
    error: null,
};
export const filmsDetailsReducer = createReducer(
    filmsDetailsInitialState,
    on(FilmDetailsApiActions.filmDetailsLoad, (_state) => {
        return {
            ..._state,
            isLoading: true,
            error: null,
        };
    }),
    on(FilmDetailsApiActions.filmDetailsLoadedSuccess, (_state, { film }) => {
        const cache = { ..._state.result };
        cache[film.uid] = film;

        return {
            result: cache,
            isLoading: false,
            error: null,
        };
    }),
    on(FilmDetailsApiActions.characterLoadedFail, (_state, { error}) => {
      return {
        ..._state,
        isLoading: false,
        error
      }
    }),
    on(FilmDetailsApiActions.no_op_cache, (state) => ({ ...state, isLoading: false }))
);
