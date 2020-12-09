import {Routes} from '@angular/router';
import {ExamListComponent} from './component/exam-list/exam-list.component';
import {ExamTakingComponent} from './component/exam-taking/exam-taking.component';
import {ResultExamCreateComponent} from './component/result-exam-create/result-exam-create.component';

export const resultExamRoutes: Routes = [
  {path: 'exam-list-by-subject/:subject', component: ExamListComponent},
  {path: 'take-exam/:id', component: ExamTakingComponent},
  {path: 'result-exam-create', component: ResultExamCreateComponent}
];
