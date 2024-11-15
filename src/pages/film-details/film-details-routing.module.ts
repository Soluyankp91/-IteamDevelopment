import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { FilmDetailsComponent } from './film-details.component';

const routes: Route[] = [
  {
    path: '',
    component: FilmDetailsComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilmDetailsRoutingModule {}
