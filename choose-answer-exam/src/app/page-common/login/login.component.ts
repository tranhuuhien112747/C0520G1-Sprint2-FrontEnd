import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../service/auth/authentication.service';
import {TokenStorageService} from '../service/token-storage/token-storage.service';
import {Title} from '@angular/platform-browser';
import {FacebookLoginProvider, GoogleLoginProvider, SocialAuthService, SocialUser} from 'angularx-social-login';
import {TokenDTO} from '../model/TokenDTO';
import {MatDialog} from '@angular/material/dialog';
import {UserCreateComponent} from '../../user-manager/component/user-create/user-create.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: SocialUser;
  loggedIn: boolean;
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  role: string;
  showPassword = false;


  constructor(
    private authenticationService: AuthenticationService,
    private tokenStorage: TokenStorageService,
    private router: Router,
    private dialog: MatDialog,
    private title: Title,
    private authService: SocialAuthService) {
  }

  ngOnInit(): void {
    this.title.setTitle('Login');
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.role = this.tokenStorage.getUser().role;
      this.authService.authState.subscribe((user) => {
        this.user = user;
        this.loggedIn = (user != null);
      });
    }
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(
      data => {
        this.user = data;
        const token = new TokenDTO(this.user.authToken);
        console.log(data);
        this.authenticationService.facebook(token).subscribe(next => {
          this.tokenStorage.saveToken(next.accessToken);
          this.tokenStorage.saveUser(next);
        //   console.log(next);
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.reloadPage();
        }, err => {
          console.log('error');
          this.isLoginFailed = true;
        });
      }
    );
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      data => {
        this.user = data;
        console.log('data');
        console.log(data);
        // this.tokenStorage.saveUser(data);
        const token = new TokenDTO(this.user.idToken);
        console.log(token);
        this.authenticationService.google(token).subscribe(next => {
          this.tokenStorage.saveToken(next.accessToken);
          this.tokenStorage.saveUser(next);
          console.log(next);
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.ngOnInit();
        }, err => {
          console.log('error');
          this.isLoginFailed = true;
        });
      }
    );
  }

  onSubmit():
    void {
    console.log('form');
    console.log(this.form.username);
    console.log(this.form.password);
    console.log('form');
    this.authenticationService.login(this.form).subscribe(
      data => {
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.router.navigate(['/']).then(() => this.reloadPage());
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }

  openDialogCreate() {
    const dialog = this.dialog.open(UserCreateComponent, {
      disableClose: true, panelClass: 'app-full-bleed-dialog',
      width: '740px',
      maxHeight: '80vh',
    });
  }
}
