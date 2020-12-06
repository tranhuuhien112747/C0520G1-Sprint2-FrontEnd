import { NgModule } from '@angular/core';
import {UserRoutes} from './user-manager-routing.module';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './commpent/user-list/user-list.component';
import { UserCreateComponent } from './commpent/user-create/user-create.component';
import { UserEditComponent } from './commpent/user-edit/user-edit.component';
import { UserDeleteComponent } from './commpent/user-delete/user-delete.component';
import {RouterModule} from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    UserListComponent,
    UserCreateComponent,
    UserEditComponent,
    UserDeleteComponent
  ],
  imports: [
    RouterModule.forChild(UserRoutes),
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    MatDialogModule,
    FormsModule
  ],
})
export class UserManagerModule { }
