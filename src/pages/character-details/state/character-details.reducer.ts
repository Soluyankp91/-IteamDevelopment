import { createReducer, on } from '@ngrx/store';
import { CharacterDetailsOperationResult } from 'src/services/interface';
import { CharacterDetailsActions } from './character-details.actions';

export const CharacterDetailsInitialState: CharacterDetailsOperationResult = {
    result: null,
    isLoading: false,
    error: null,
};

export const characterDetailsReducer = createReducer(
    CharacterDetailsInitialState,
    on(CharacterDetailsActions.characterDetailsLoad, (_state) => {
        return { ..._state, isLoading: true };
    }),
    on(CharacterDetailsActions.characterLoadedSuccess, (_state, { character }) => {
        const cache = { ..._state.result};
        cache[character.uid] = character;

        return {
            result: cache,
            isLoading: false,
            error: null
        };
    }),
    on(CharacterDetailsActions.characterLoadedFail, (_state, { error}) => {
        return {
            ..._state,
            isLoading: false,
            error
        }
    }),
    on(CharacterDetailsActions.no_op_cache, (state) => ({ ...state, isLoading: false }))
);
