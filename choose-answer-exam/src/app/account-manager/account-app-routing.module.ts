import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InforAccountComponent} from './component/infor-account/infor-account.component';
import { Routes, RouterModule} from '@angular/router';
import { UpdateInfoAccountComponent } from './component/update-info-account/update-info-account.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ChangePassComponent } from './component/change-pass/change-pass.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ExamHistoryComponent } from './component/exam-history/exam-history.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {AuthGuard} from '../page-common/helper/auth.guard';

export const accountRoute: Routes = [
  { path: 'infor-account',
    component: InforAccountComponent,
    canActivate: [AuthGuard],
    data: {roles: ['ROLE_ADMIN', 'ROLE_USER']}
  },
  { path: 'update-infor/:id',
    component: UpdateInfoAccountComponent,
    canActivate: [AuthGuard],
    data: {roles: ['ROLE_ADMIN', 'ROLE_USER']}
    },

  { path: 'exam-history',
    component: ExamHistoryComponent,
    canActivate: [AuthGuard],
    data: {roles: ['ROLE_ADMIN', 'ROLE_USER']}
  }
  ];
@NgModule({
  declarations: [InforAccountComponent, UpdateInfoAccountComponent, ChangePassComponent, ExamHistoryComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    MatDialogModule,
    NgxPaginationModule
  ]
})
export class AccountAppRoutingModule { }
