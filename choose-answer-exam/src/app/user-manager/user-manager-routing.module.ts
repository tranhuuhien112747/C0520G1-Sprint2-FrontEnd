import {Routes} from '@angular/router';
import {UserListComponent} from './component/user-list/user-list.component';
import {UserCreateComponent} from './component/user-create/user-create.component';
import {UserEditComponent} from './component/user-edit/user-edit.component';

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
