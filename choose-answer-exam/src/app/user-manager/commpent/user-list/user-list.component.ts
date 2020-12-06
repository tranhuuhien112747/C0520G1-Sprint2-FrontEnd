import {Component, OnInit} from '@angular/core';
import {User} from '../../model/User.class';
import {UserService} from '../../service/user.service';
import {UserCreateComponent} from '../user-create/user-create.component';
import {MatDialog} from '@angular/material/dialog';
import {UserEditComponent} from '../user-edit/user-edit.component';
import {UserDeleteComponent} from '../user-delete/user-delete.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public users: User[];
  p: any;

  constructor(public userService: UserService,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    // tslint:disable-next-line:no-unused-expression
    this.p = 0;
    this.userService.getAllUser().subscribe(data => {
      console.log(data);
      this.users = data;
    }, error => console.log(error));
  }

  openDialogCreate() {
    const dialogRef = this.dialog.open(UserCreateComponent, {
      panelClass: 'app-full-bleed-dialog',
      width: '740px',
      height: '500px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.ngOnInit();
    });
  }

  openDialogEdit(idUser) {
    this.userService.getUserById(idUser).subscribe(dataEdit => {
    const dialogRef = this.dialog.open(UserEditComponent, {
      panelClass: 'app-full-bleed-dialog',
      width: '600px',
      height: '400px',
      data: {dataE: dataEdit.idUser},
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.ngOnInit();
    });
    });
  };
  openDialogDelete(idUser) {
    this.userService.getUserById(idUser).subscribe(dataEdit => {
    const dialogRef = this.dialog.open(UserDeleteComponent, {
      // panelClass: 'app-full-bleed-dialog',
      width: '570px',
      height: '200px',
      data: {dataE: dataEdit},
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.ngOnInit();
    });
    });
  }
}
