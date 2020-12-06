import {Routes} from '@angular/router';
import {UserListComponent} from './commpent/user-list/user-list.component';
import {UserCreateComponent} from './commpent/user-create/user-create.component';
import {UserEditComponent} from './commpent/user-edit/user-edit.component';

export const UserRoutes: Routes = [
  {
    path: 'user/list',
    component: UserListComponent,
  },
  {
    path: '',
    component: UserListComponent,
  },
  {
    path: 'user/create',
    component: UserCreateComponent,
  },
  {
    path: 'user/edit',
    component: UserEditComponent,
  }
];
