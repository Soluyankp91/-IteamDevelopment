import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { BaseFilmResult, ErrorResponse } from 'src/services/interface';

export const FilmApiActions = createActionGroup({
    source: 'Films Page',
    events: {
        'Films Load': emptyProps(),
        'Films Loaded Success': props<{ films: BaseFilmResult [] }>(),
        'Films Loaded Error': props<{ error: ErrorResponse }>(),
        'NO_OP_CACHE': emptyProps()
    },
});
