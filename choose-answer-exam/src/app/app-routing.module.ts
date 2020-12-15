import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ImportQuizComponent} from './import-quiz/import-quiz/import-quiz.component';
import {ErrorPageComponent} from './error-page/error-page.component';
import {AuthGuard} from './page-common/helper/auth.guard';

const routes: Routes = [
  {
    path: 'upload', component: ImportQuizComponent,
    canActivate: [AuthGuard],
    data: {roles: ['ROLE_ADMIN']},
  },
  {path: '**', component: ErrorPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
