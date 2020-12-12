import { Component, OnInit } from '@angular/core';
import {AccountManagerService} from '../../service/account-manager.service';
import {TokenStorageService} from '../../../page-common/service/token-storage/token-storage.service';

@Component({
  selector: 'app-infor-account',
  templateUrl: './infor-account.component.html',
  styleUrls: ['./infor-account.component.css']
})
export class InforAccountComponent implements OnInit {

  public id;
  public accountInfo: any;
  private isLoggedIn = false;

  constructor(
    private accountManagerService: AccountManagerService,
    private tokenStorage: TokenStorageService,
  ) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.id = this.tokenStorage.getUser().id;
      console.log(this.id);
    }
    this.accountManagerService.findAccountInfoById(this.id).subscribe( data => {
      this.accountInfo = data;
      console.log(data);
    }, error => console.log('error'));
  }

}
