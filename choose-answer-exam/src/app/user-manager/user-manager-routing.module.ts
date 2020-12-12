import {Routes} from '@angular/router';
import {UserListComponent} from './component/user-list/user-list.component';
import {UserCreateComponent} from './component/user-create/user-create.component';
import {UserEditComponent} from './component/user-edit/user-edit.component';
import {AuthGuard} from '../page-common/helper/auth.guard';

export const UserRoutes: Routes = [
  {
    path: 'user/list',
    component: UserListComponent,
    canActivate: [AuthGuard],
    data: {roles: ['ROLE_ADMIN', 'ROLE_USER']}
  },
  // {
  //   path: '',
  //   component: UserListComponent,
  //   canActivate: [AuthGuard],
  //   data: {roles: ['ROLE_ADMIN', 'ROLE_USER']}
  // },
  {
    path: 'user/create',
    component: UserCreateComponent,
    canActivate: [AuthGuard],
    data: {roles: ['ROLE_ADMIN', 'ROLE_USER']}
  },
  {
    path: 'user/edit',
    component: UserEditComponent,
    canActivate: [AuthGuard],
    data: {roles: ['ROLE_ADMIN', 'ROLE_USER']}
  }
];
