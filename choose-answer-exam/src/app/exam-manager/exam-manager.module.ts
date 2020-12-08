import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListExamComponent } from './component/list-exam/list-exam.component';
import {RouterModule} from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {examRoutes} from './exam-manager.routers';
import { AddNewExamComponent } from './component/add-new-exam/add-new-exam.component';
import { DeleteExamComponent } from './component/delete-exam/delete-exam.component';
import {IdConvertExam} from './common/convert-id';
import { DetailExamComponent } from './component/detail-exam/detail-exam.component';
import { AddQuestionInExamComponent } from './component/add-question-in-exam/add-question-in-exam.component';
import { DeleteQuestionInExamComponent } from './component/delete-question-in-exam/delete-question-in-exam.component';



@NgModule({
  declarations: [ListExamComponent, AddNewExamComponent, DeleteExamComponent, IdConvertExam, DetailExamComponent, AddQuestionInExamComponent, DeleteQuestionInExamComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(examRoutes),
    NgxPaginationModule,
    ReactiveFormsModule,
    MatDialogModule,
    FormsModule
  ],
  exports: [
    IdConvertExam
  ],
  schemas: [
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA
]
})
export class ExamManagerModule { }
