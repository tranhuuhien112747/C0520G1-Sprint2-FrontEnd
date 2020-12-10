import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatisticsModule } from './statistics/statistics.module';
import { AccountManagerModule } from './account-manager/account-manager.module';
import { ExamManagerModule } from './exam-manager/exam-manager.module';
import {UserManagerModule} from './user-manager/user-manager.module';
import { PageCommonModule } from './page-common/page-common.module';
import { ImportQuizModule } from './import-quiz/import-quiz.module';
import {PageRoutingModule} from './page-common/page-routing.module';
import {QuestionManagerModule} from './question-manager/question-manager.module';
import {ResultExamManagerModule} from './result-exam-manager/result-exam-manager.module';
import {HttpClientModule} from '@angular/common/http';
import { ErrorPageComponent } from './error-page/error-page.component';
import {ToastrModule} from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StatisticsModule,
    AccountManagerModule,
    ExamManagerModule,
    ResultExamManagerModule,
    PageCommonModule,
    UserManagerModule,
    ImportQuizModule,
    PageRoutingModule,
    QuestionManagerModule,
    AppRoutingModule,
    ToastrModule.forRoot({timeOut: 2000, positionClass : 'toast-top-center', preventDuplicates: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
