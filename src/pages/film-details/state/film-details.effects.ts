import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { ApiService } from 'src/services/api.service';
import { FilmDetailsApiActions } from './film-details.actions';
import { Store } from '@ngrx/store';
import { selectFilmsDetails, selectResult } from './film-details.selectors';
import { ErrorResponse } from 'src/services/interface';

@Injectable()
export class FilmsDetailsEffect {
    constructor(private actions$: Actions, private readonly apiService: ApiService, private readonly store: Store) {}
    loadFilmDetails$ = createEffect(() =>
        this.actions$.pipe(
            ofType(FilmDetailsApiActions.filmDetailsLoad),
            concatLatestFrom((action) => this.store.select(selectResult)),
            switchMap(([action, cache]) => {
                if (cache?.[action.id]) {
                    return of(FilmDetailsApiActions.no_op_cache());
                }
                return this.apiService.getMovieById$(action.id).pipe(
                    map((res) => {
                        const result = res.result;

                        result.properties.characters = result.properties.characters.map(
                            (char) => <string>char.match(/\d+$/)?.[0]
                        );
                        return FilmDetailsApiActions.filmDetailsLoadedSuccess({ film: result });
                    }),
                    catchError((errorResponse) => {
                        const error = <ErrorResponse>errorResponse.error;
                        return of(FilmDetailsApiActions.characterLoadedFail({ error }));
                    })
                );
            })
        )
    );
}
