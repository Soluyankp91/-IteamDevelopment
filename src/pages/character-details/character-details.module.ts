import { NgModule } from '@angular/core';
import { CharacterDetailsComponent } from './character-details.component';
import { CommonModule } from '@angular/common';
import { CharacterDetailsRoutingModule } from './character-details-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { CharacterDetailsEffect } from './state/character-details.effects';
import { StoreModule } from '@ngrx/store';
import { characterDetailsReducer } from './state/character-details.reducer';
import { SharedModule } from 'src/shared/shared.module';

@NgModule({
    declarations: [CharacterDetailsComponent],
    imports: [
        CommonModule,
        CharacterDetailsRoutingModule,
        EffectsModule.forFeature(CharacterDetailsEffect),
        StoreModule.forFeature('charactersDetails', characterDetailsReducer),
        SharedModule
    ],
    providers: [],
})
export class CharacterDetailsModule {}
