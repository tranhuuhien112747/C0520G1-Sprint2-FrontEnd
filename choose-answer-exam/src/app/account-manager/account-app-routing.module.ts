import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InforAccountComponent} from './component/infor-account/infor-account.component';
import { Routes, RouterModule} from '@angular/router';
import { UpdateInfoAccountComponent } from './component/update-info-account/update-info-account.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ChangePassComponent } from './component/change-pass/change-pass.component';

export const accountRoute: Routes = [
  { path: 'infor-account',
    component: InforAccountComponent},
  { path: 'update-infor',
    component: UpdateInfoAccountComponent}
  ];
@NgModule({
  declarations: [InforAccountComponent, UpdateInfoAccountComponent, ChangePassComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule
  ]
})
export class AccountAppRoutingModule { }
