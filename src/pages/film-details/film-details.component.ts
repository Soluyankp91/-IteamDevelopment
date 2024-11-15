import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter, map, Observable, tap } from 'rxjs';
import { BaseFilmResult } from 'src/services/interface';
import { selectError, selectIsLoading, selectResult } from './state/film-details.selectors';
import { FilmDetailsApiActions } from './state/film-details.actions';

@Component({
    selector: 'app-film-details',
    templateUrl: 'film-details.component.html',
    styleUrls: ['./film-details.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilmDetailsComponent implements OnInit {
    filmId: string;
    film$: Observable<BaseFilmResult> = this.store.select(selectResult).pipe(
        filter((res) => !!res),
        map((filmsDetails) => filmsDetails![this.filmId])
    );

    isLoading$: Observable<boolean> = this.store.select(selectIsLoading);
    error$ = this.store.select(selectError);

    constructor(private route: ActivatedRoute, private store: Store, private readonly router: Router) {
        this.filmId = <string>this.route.snapshot.paramMap.get('id');
    }

    ngOnInit(): void {
        this.store.dispatch(FilmDetailsApiActions.filmDetailsLoad({ id: this.filmId }));
    }

    navigateToCharacter(id: string) {
        this.router.navigate(['../../characters', id], { relativeTo: this.route });
    }
}
