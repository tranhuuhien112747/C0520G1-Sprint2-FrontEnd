import {Component, Inject, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {UserService} from '../../service/user.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

function comparePassword(c: AbstractControl) {
  const v = c.value;
  const isNotEmpty = v.confirmPassword !== '';
  if (isNotEmpty) {
    return (v.password === v.confirmPassword) ? null : {
      passwordNotMatch: true
    };
  }
}

export function checkUserName(userName = []) {
  return (c: AbstractControl) => {
    return (userName.includes(c.value) ? {inValidName: true} : null);
  };
}

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  createUserForm: FormGroup;
  public userList;
  public listUsername = [];

  constructor(
    public dialogRef: MatDialogRef<UserCreateComponent>,
    public userService: UserService,
    public router: Router,
    public formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private toastr: ToastrService
  ) {
  }

  ngOnInit(): void {
    this.createUserForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.pattern('^[a-z0-9]{3,30}$'), checkUserName(this.listUsername)]],
      password: ['', [Validators.required, Validators.pattern('^[a-z0-9]{6,30}$')]],
      confirmPassword: ['', [Validators.required]],
      fullName: ['', [Validators.required, Validators.maxLength(30), Validators.pattern(/^[a-zA-Zà-ỹÀ-Ỹ_0-9\s]{1,30}$/)]],
      email: ['', [Validators.required, Validators.pattern(/^[a-z][a-z0-9_\.]{3,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/)]],
      address: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^[0-9\-\+]{10}$/)]],
    }, {validator: comparePassword});
    this.userService.getAllUser().subscribe(data => {
      this.userList = data;
      this.getAllUserName();
    });
  }

  // tslint:disable-next-line:typedef
  getAllUserName() {
    if (!this.userList.isEmpty) {
      for (const element of this.userList) {
        this.listUsername.push(element.username);
      }
    }
  }

  addNewUser() {
    this.createUserForm.markAllAsTouched();
    if (this.createUserForm.valid) {
      this.userService.addNewUser(this.createUserForm.value).subscribe(data => {
        this.dialogRef.close();
        this.toastr.success('Create Successfully!!', 'Congratulations!');
      }, error => console.log(error.message));
    }
  }
}

