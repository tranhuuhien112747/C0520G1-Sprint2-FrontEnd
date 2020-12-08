import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AccountAppRoutingModule, accountRoute} from './account-app-routing.module';
import {RouterModule} from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { MaterialAccountModule } from './material-account.module';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(accountRoute),
    AccountAppRoutingModule,
    HttpClientModule,
    MaterialAccountModule,
  ]
})
export class AccountManagerModule { }
