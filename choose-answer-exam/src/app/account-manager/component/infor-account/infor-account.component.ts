import { Component, OnInit } from '@angular/core';
import {AccountManagerService} from '../../service/account-manager.service';

@Component({
  selector: 'app-infor-account',
  templateUrl: './infor-account.component.html',
  styleUrls: ['./infor-account.component.css']
})
export class InforAccountComponent implements OnInit {

  public id = 2;
  public accountInfo: any;

  constructor(
    private accountManagerService: AccountManagerService,
  ) { }

  ngOnInit(): void {
    this.accountManagerService.findAccountInfoById(this.id).subscribe( data => {
      this.accountInfo = data;
    }, error => console.log('error'));
  }

}
