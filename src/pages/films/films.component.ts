import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, map, Observable, tap } from 'rxjs';
import { selectError, selectIsLoading, selectResult } from 'src/pages/films/state/films.selector';
import { BaseFilmResult } from 'src/services/interface';
import { FilmApiActions } from './state/films.actions';

@Component({
    selector: 'app-films',
    templateUrl: `./films.component.html`,
    styleUrls: ['./films.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilmsComponent implements OnInit {
    films$ = <Observable<BaseFilmResult[]>>this.store.select(selectResult).pipe(filter((res) => !!res));
    isLoading$: Observable<boolean> = this.store.select(selectIsLoading);
    error$ = this.store.select(selectError);

    dateFormat = 'dd/MM/yyyy';

    constructor(private readonly store: Store) {}

    ngOnInit(): void {
        this.store.dispatch(FilmApiActions.filmsLoad());
    }
}
