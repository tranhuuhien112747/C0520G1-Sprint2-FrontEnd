import {Component, Inject, OnInit} from '@angular/core';
import {UserService} from '../../service/user.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {
  public idUser;
  public userName;

  constructor(public dialogRef: MatDialogRef<UserDeleteComponent>,
              public userService: UserService,
              public router: Router,
              @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  ngOnInit(): void {
    this.idUser = this.data.dataD.idUser;
    this.userName = this.data.dataD.userName;
    console.log(this.userName);
    console.log(this.idUser);
  }

  deleteUser() {
    this.userService.deleteUserByID(this.idUser).subscribe(data => {
      if (data == null) {
        this.dialogRef.close();
      }
    });
  }
}
