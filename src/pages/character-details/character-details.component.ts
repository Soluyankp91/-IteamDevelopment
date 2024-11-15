import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter, map, Observable } from 'rxjs';
import { BaseCharacterDetailsResult } from 'src/services/interface';
import { selectError, selectIsLoading, selectResult } from './state/character-details.selector';
import { CharacterDetailsActions } from './state/character-details.actions';

@Component({
    selector: 'app-character-details',
    templateUrl: 'character-details.component.html',
    styleUrls: ['./character-details.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterDetailsComponent implements OnInit {
    characterId: string;
    characters$: Observable<BaseCharacterDetailsResult> = this.store.select(selectResult).pipe(
        filter((res) => !!res),
        map((characterDetails) => characterDetails![this.characterId])
    );

    constructor(private route: ActivatedRoute, private store: Store) {
        this.characterId = <string>this.route.snapshot.paramMap.get('id');
    }

    isLoading$ = this.store.select(selectIsLoading);

    error$ = this.store.select(selectError);

    dateFormat = 'dd/MM/yyyy';

    ngOnInit(): void {
        this.store.dispatch(CharacterDetailsActions.characterDetailsLoad({ id: this.characterId }));
    }
}
