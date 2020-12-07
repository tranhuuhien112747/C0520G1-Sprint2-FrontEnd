import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImportQuizComponent } from './import-quiz/import-quiz.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';



@NgModule({
  declarations: [ImportQuizComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class ImportQuizModule { }
