import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ImportQuizComponent} from './import-quiz/import-quiz/import-quiz.component';

const routes: Routes = [
  { path: 'upload' , component: ImportQuizComponent},
  { path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
