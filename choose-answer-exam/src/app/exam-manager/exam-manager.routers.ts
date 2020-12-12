import {Routes} from '@angular/router';
import {ListExamComponent} from './component/list-exam/list-exam.component';
import {DetailExamComponent} from './component/detail-exam/detail-exam.component';
import {AuthGuard} from '../page-common/helper/auth.guard';

export const examRoutes: Routes = [
  {path: 'exam-list', component: ListExamComponent,
    canActivate: [AuthGuard],
    data: {roles: ['ROLE_ADMIN', 'ROLE_USER']}
    },
  {path: 'detail/:id', component: DetailExamComponent,
    canActivate: [AuthGuard],
    data: {roles: ['ROLE_ADMIN', 'ROLE_USER']},
  }
];
