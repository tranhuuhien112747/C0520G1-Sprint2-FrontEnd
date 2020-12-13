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
      fullName: ['', [Validators.required, Validators.pattern(/^[a-zA-Zà-ỹÀ-Ỹ_0-9\s]{3,30}$/)]],
      email: ['', [Validators.required, Validators.pattern(/^[a-z][a-z0-9_\.]{3,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/)]],
      address: ['', [Validators.required, Validators.pattern(/^[a-zA-Zà-ỹÀ-Ỹ_0-9-\s]{3,60}$/)]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^[0-9\\-\\+]{10}$/)]]
    });
    this.activatedRoute.params.subscribe( data => {
    this.idToFind = data.id;
    console.log(this.idToFind);
    });
    this.accountManagerService.findAccountInfoById(this.idToFind).subscribe(data => {
      this.formEditAccount.patchValue(data);
      this.userData = data;
      console.log(data);
    });
  }

  update() {
    this.accountManagerService.updateAccountInfo(this.idToFind, this.formEditAccount.value).subscribe(data => {
      this.router.navigateByUrl('/infor-account');
      console.log(this.formEditAccount.value);
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(ChangePassComponent, {
      width: '750px',
      data: this.userData,
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
