import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ImportQuizComponent} from './import-quiz/import-quiz/import-quiz.component';
import {ErrorPageComponent} from './error-page/error-page.component';

const routes: Routes = [
  { path: 'upload' , component: ImportQuizComponent},
  { path: '**', component: ErrorPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
