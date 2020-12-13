import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from '../../service/token-storage/token-storage.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {MessageComponent} from '../../message/message.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  private role: string;
  showAdminBoard = false;
  showUserBoard = false;
  username: string;
  token: string;
  loginAuth: string;

  constructor(private tokenStorageService: TokenStorageService,
              private router: Router,
              public dialog: MatDialog,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    // this.loginAuth = this.sendMessage();
    // console.log('this.loginAuth');
    // console.log(this.loginAuth);
    // if (this.loginAuth === 'auth') {
    //   this.dialog.open(MessageComponent, {
    //     disableClose: true
    //   });
    // }
    // else {
      if (this.tokenStorageService.getUser() == null) {
        this.token = 'false';
      } else {
        const user = this.tokenStorageService.getUser();
        console.log('data');
        console.log(user);
        this.token = this.tokenStorageService.getToken();
        this.token = 'true';
        console.log('this.token');
        console.log(this.token);
        this.role = user.role;
        this.showAdminBoard = this.role.includes('ROLE_ADMIN');
        console.log('this.showAdminBoard');
        console.log(this.showAdminBoard);
        this.showUserBoard = this.role.includes('ROLE_USER');
        this.username = user.userName;
      }
    }
  // }

  sendMessage() {
    return this.activatedRoute.snapshot.queryParamMap.get('message');
  }
}
