import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {UserService} from '../../service/user.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  public formEdit: FormGroup;
  public dataIdUser;

  constructor(public dialogRef: MatDialogRef<UserEditComponent>,
              public userService: UserService,
              public router: Router,
              public formBuilder: FormBuilder,
              private toastr: ToastrService,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
    this.formEdit = this.formBuilder.group({
        username: ['', [Validators.required]],
        fullName: ['', [Validators.required]],
        email: ['', [Validators.required]],
        address: ['', Validators.required],
        phoneNumber: ['', Validators.required]
      });
    this.dataIdUser = this.data.dataE;
    this.userService.getUserById(this.dataIdUser).subscribe(getData => {
      this.formEdit.patchValue(getData);
    });
  }

  // tslint:disable-next-line:typedef
  editUser() {
    // this.formEdit.markAllAsTouched();
    if (this.formEdit.valid) {
      this.userService.editUser(this.dataIdUser, this.formEdit.value).subscribe(data => {
        if (data == null) {
          this.dialogRef.close();
        }
        this.toastr.success('Edit Successfully!!', 'Congratulations!');
      });
    }
  }
}
