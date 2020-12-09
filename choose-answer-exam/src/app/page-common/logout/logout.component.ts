import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from '../service/token-storage/token-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  private role: string;
  isLoggedIn = false;
  showAdminBoard = false;
  showUserBoard = true;
  username: string;

  constructor(private tokenStorageService: TokenStorageService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.role = user.role;
      console.log('name');
      console.log(user.username);
      // this.showAdminBoard = this.role.includes('ROLE_ADMIN');
      // this.showUserBoard = this.role.includes('ROLE_USER');
      this.username = user.username;
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    this.router.navigate(['/']).then(() => window.location.reload());
  }

}
