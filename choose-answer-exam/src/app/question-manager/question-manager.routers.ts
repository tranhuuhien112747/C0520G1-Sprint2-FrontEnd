import {Routes} from '@angular/router';
import {QuestionListComponent} from './component/question-list/question-list.component';
import {AuthGuard} from '../page-common/helper/auth.guard';

export const questionRoutes: Routes = [
  {
    path: 'question-list', component: QuestionListComponent,
    canActivate: [AuthGuard],
    data: {roles: ['ROLE_ADMIN', 'ROLE_USER']}
  }
];
