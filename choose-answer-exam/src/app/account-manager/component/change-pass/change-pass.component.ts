import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {AccountManagerService} from '../../service/account-manager.service';
import {Router} from '@angular/router';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.css']
})
export class ChangePassComponent implements OnInit {
  public formChangePass: FormGroup;
  public idToFind: number;
  public errorMessage: string;
  constructor(
    private dialogRef: MatDialogRef<ChangePassComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private accountManagerService: AccountManagerService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.formChangePass = this.formBuilder.group( {
      oldPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required, Validators.pattern('^[a-z0-9]{6,30}$')]],
      confirmPassword: ['', [Validators.required]]
    }, {validator: comparePassword});
    this.idToFind = this.data.idUser;
  }
  changePass() {
    this.formChangePass.markAllAsTouched();
    if (this.formChangePass.valid) {
      this.accountManagerService.changePassword(this.idToFind, this.formChangePass.value).subscribe(data => {
        if (data != null){
          this.errorMessage = data;
          console.log(data);
        } else {
          this.router.navigate(['/infor-account']);
          this.dialogRef.close();
        }
      });
    }
  }

}
function comparePassword(c: AbstractControl) {
  const v = c.value;
  const isNotEmpty = v.confirmPassword !== '';
  if (isNotEmpty) {
    return (v.newPassword === v.confirmPassword) ? null : {
      passwordNotMatch: true
    };
  }
}
