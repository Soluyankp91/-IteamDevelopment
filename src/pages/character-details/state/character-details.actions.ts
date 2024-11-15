import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { BaseCharacterDetailsResult, ErrorResponse } from "src/services/interface";

export const CharacterDetailsActions = createActionGroup({
    source: 'Character Details Page',
    events: {
        'Character Loaded Success': props<{ character: BaseCharacterDetailsResult}>(),
        'Character Loaded Fail': props<{error: ErrorResponse}>(),
        'Character Details Load': props<{id: string}>(),
        'NO_OP_CACHE': emptyProps()
    }
})