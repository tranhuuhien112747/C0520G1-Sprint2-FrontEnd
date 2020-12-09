import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AccountManagerService} from '../../service/account-manager.service';
import {MatDialog} from '@angular/material/dialog';
import {ChangePassComponent} from '../change-pass/change-pass.component';

@Component({
  selector: 'app-update-info-account',
  templateUrl: './update-info-account.component.html',
  styleUrls: ['./update-info-account.component.css']
})
export class UpdateInfoAccountComponent implements OnInit {
  public idToFind;
  public formEditAccount: FormGroup;
  public userData: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private accountManagerService: AccountManagerService,
    public dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    this.formEditAccount = this.formBuilder.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      address: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]]
    });
    // this.activatedRoute.params.subscribe( data => {
    // this.idToFind = data;
    //   console.log(this.idToFind);
    // });
    this.accountManagerService.findAccountInfoById(1).subscribe(data => {
      this.formEditAccount.patchValue(data);
      this.userData = data;
      console.log(data);
    });
  }

  update() {
    this.accountManagerService.updateAccountInfo(1, this.formEditAccount.value).subscribe(data => {
      this.router.navigateByUrl('/infor-account');
      console.log(this.formEditAccount.value);
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(ChangePassComponent, {
      width: '700px',
      data: this.userData,
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
