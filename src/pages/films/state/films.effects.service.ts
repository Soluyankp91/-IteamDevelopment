import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { ApiService } from '../../../services/api.service';
import { catchError, delay, map, of, switchMap } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectResult } from './films.selector';
import { FilmApiActions } from './films.actions';
import { ErrorResponse } from 'src/services/interface';

@Injectable()
export class FilmsEffects {

  constructor(
    private actions$: Actions,
    private apiService: ApiService,
    private store: Store
  ) {}

  loadFilms$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FilmApiActions.filmsLoad),
      concatLatestFrom((action) => this.store.select(selectResult)),
      switchMap(([action, films]) => {
        if (films?.length) {
          return of(FilmApiActions.no_op_cache());
        }
        return this.apiService.getAllMovies$().pipe(map((res) => FilmApiActions.filmsLoadedSuccess({ films: res.result})));
      }),
      catchError((errorResponse) => {
        const error = <ErrorResponse>errorResponse.error;
        return of(FilmApiActions.filmsLoadedError({ error }));
    })
    )
  );
}
