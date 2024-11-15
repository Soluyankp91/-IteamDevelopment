import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsComponent } from './films.component';
import { FilmsRoutingModule } from './films-routing.module';
import { StoreModule } from '@ngrx/store';
import { filmsReducer } from 'src/pages/films/state/films.reducer';
import { EffectsModule, provideEffects } from '@ngrx/effects';
import { FilmsEffects } from 'src/pages/films/state/films.effects.service';
import { SharedModule } from 'src/shared/shared.module';

@NgModule({
  declarations: [
    FilmsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FilmsRoutingModule,
    EffectsModule.forFeature(FilmsEffects),
    StoreModule.forFeature('films', filmsReducer)
  ],
  providers: [
    provideEffects(FilmsEffects),
  ]
})
export class FilmsModule { }
