import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { BaseFilmResult, ErrorResponse } from '../../../services/interface';

export const FilmDetailsApiActions = createActionGroup({
  source: 'Film Details Page',
  events: {
    'Film Details Load': props<{ id: string }>(),
    'Film Details Loaded Success': props<{ film: BaseFilmResult }>(),
    'Character Loaded Fail': props<{error: ErrorResponse}>(),
    'NO_OP_CACHE': emptyProps()
  },
});