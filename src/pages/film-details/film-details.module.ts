import { NgModule } from '@angular/core';
import { FilmDetailsComponent } from './film-details.component';
import { CommonModule } from '@angular/common';
import { FilmDetailsRoutingModule } from './film-details-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { FilmsDetailsEffect } from './state/film-details.effects';
import { filmsDetailsReducer } from './state/film-details.reducer';
import { SharedModule } from 'src/shared/shared.module';

@NgModule({
  declarations: [FilmDetailsComponent],
  imports: [
    CommonModule,
    FilmDetailsRoutingModule,
    EffectsModule.forFeature(FilmsDetailsEffect),
    StoreModule.forFeature('filmsDetails', filmsDetailsReducer),
    SharedModule
  ],
  providers: [],
})
export class FilmDetailsModule {}
