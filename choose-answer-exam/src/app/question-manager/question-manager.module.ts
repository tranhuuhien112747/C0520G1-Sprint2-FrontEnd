import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {questionRoutes} from './question-manager.routers';
import {QuestionListComponent} from './component/question-list/question-list.component';
import {DeleteQuestionComponent} from './component/delete-question/delete-question.component';
import {EditQuestionComponent} from './component/edit-question/edit-question.component';
import {AddNewQuestionComponent} from './component/add-new-question/add-new-question.component';
import {IdConvert} from './common/convert-id';
import {NgxPaginationModule} from 'ngx-pagination';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { DeleteErrorComponent } from './component/delete-error/delete-error.component';



@NgModule({
  declarations: [QuestionListComponent, DeleteQuestionComponent, EditQuestionComponent, AddNewQuestionComponent, IdConvert, DeleteErrorComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(questionRoutes),
    NgxPaginationModule,
    ReactiveFormsModule,
    MatDialogModule,
    FormsModule
  ],
  exports: [
    IdConvert
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class QuestionManagerModule {
}
