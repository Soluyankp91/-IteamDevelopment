import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'films',
    loadChildren: () =>
      import('../pages/films/films.module').then((m) => m.FilmsModule),
  },
  {
    path: 'characters',
    loadChildren: () =>
      import('../pages/character-details/character-details.module').then(
        (m) => m.CharacterDetailsModule
      ),
  },
  {
    path: '**',
    redirectTo: 'films',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
