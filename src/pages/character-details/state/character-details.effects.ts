import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { CharacterDetailsActions } from './character-details.actions';
import { Store } from '@ngrx/store';
import { selectResult } from './character-details.selector';
import { catchError, map, of, switchMap } from 'rxjs';
import { ApiService } from 'src/services/api.service';
import { ErrorResponse } from 'src/services/interface';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class CharacterDetailsEffect {
    constructor(private actions$: Actions, private store: Store, private apiService: ApiService) {}

    loadCharacterDetails$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CharacterDetailsActions.characterDetailsLoad),
            concatLatestFrom((action) => this.store.select(selectResult)),
            switchMap(([action, cache]) => {
                if (cache?.[action.id]) {
                    return of(CharacterDetailsActions.no_op_cache());
                };
                return this.apiService.getCharacterById$(action.id).pipe(
                    map((res) => CharacterDetailsActions.characterLoadedSuccess({ character: res.result })),
                    catchError((errorResponse: HttpErrorResponse) => {
                        const error = <ErrorResponse>errorResponse.error;
                        return of(CharacterDetailsActions.characterLoadedFail({error}));
                    }),
                );
            })
        )
    );
}
