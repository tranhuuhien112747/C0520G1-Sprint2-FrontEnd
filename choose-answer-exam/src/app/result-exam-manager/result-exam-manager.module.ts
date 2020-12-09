import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamListComponent } from './component/exam-list/exam-list.component';
import { ResultExamCreateComponent } from './component/result-exam-create/result-exam-create.component';
import { ExamTakingComponent } from './component/exam-taking/exam-taking.component';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {resultExamRoutes} from './result-exam.routing';


@NgModule({
  declarations: [
    ExamListComponent,
    ResultExamCreateComponent,
    ExamTakingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(resultExamRoutes),
    ReactiveFormsModule
  ]
})
export class ResultExamManagerModule { }
