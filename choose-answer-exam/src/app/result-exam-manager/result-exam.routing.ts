import {Routes} from '@angular/router';
import {ExamListComponent} from './component/exam-list/exam-list.component';
import {ExamTakingComponent} from './component/exam-taking/exam-taking.component';
import {ResultExamCreateComponent} from './component/result-exam-create/result-exam-create.component';
import {AuthGuard} from '../page-common/helper/auth.guard';

export const resultExamRoutes: Routes = [
  {
    path: 'exam-list-by-subject/:subject', component: ExamListComponent,
    canActivate: [AuthGuard],
    data: {roles: ['ROLE_ADMIN', 'ROLE_USER']}
  },
  {path: 'take-exam/:id', component: ExamTakingComponent},
  {path: 'result-exam-create', component: ResultExamCreateComponent}
];
