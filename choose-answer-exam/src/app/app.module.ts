import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatisticsModule } from './statistics/statistics.module';
import { AccountManagerModule } from './account-manager/account-manager.module';
import { ExamManagerModule } from './exam-manager/exam-manager.module';
import { DataManagerModule } from './data-manager/data-manager.module';
import {UserManagerModule} from './user-manager/user-manager.module';
import { PageCommonModule } from './page-common/page-common.module';
import { ImportQuizModule } from './import-quiz/import-quiz.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StatisticsModule,
    AccountManagerModule,
    ExamManagerModule,
    DataManagerModule,
    PageCommonModule,
    UserManagerModule,
    ImportQuizModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
