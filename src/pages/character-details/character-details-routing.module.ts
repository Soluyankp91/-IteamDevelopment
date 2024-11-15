import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CharacterDetailsComponent } from './character-details.component';

const routes: Route [] = [
    {
        path: ':id',
        component: CharacterDetailsComponent
    }
]
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterDetailsRoutingModule {}
