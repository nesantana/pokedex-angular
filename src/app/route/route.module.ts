import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from '../index/index.component';
import {CardByIdComponent} from '../card-by-id/card-by-id.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'card/:id', component: CardByIdComponent },
  { path: '**', component: IndexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutes {}
