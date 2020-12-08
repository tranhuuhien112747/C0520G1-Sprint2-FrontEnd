import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatisticsModule } from './statistics/statistics.module';
import { AccountManagerModule } from './account-manager/account-manager.module';
import { ExamManagerModule } from './exam-manager/exam-manager.module';
import { DataManagerModule } from './data-manager/data-manager.module';
import { PageCommonModule } from './page-common/page-common.module';
import { UserManagerModule } from './user-manager/user-manager.module';
import { ImportQuizModule } from './import-quiz/import-quiz.module';
import {PageRoutingModule} from './page-common/page-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { ErrorPageComponent } from './error-page/error-page.component';


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
    DataManagerModule,
    PageCommonModule,
    UserManagerModule,
    ImportQuizModule,
    PageRoutingModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
