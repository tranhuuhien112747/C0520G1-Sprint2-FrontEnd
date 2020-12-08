import {Routes} from '@angular/router';
import {ListExamComponent} from './component/list-exam/list-exam.component';
import {DetailExamComponent} from "./component/detail-exam/detail-exam.component";

export const examRoutes: Routes = [
  {path: 'exam-list', component: ListExamComponent},
  {path: 'detail/:id', component: DetailExamComponent}
];
