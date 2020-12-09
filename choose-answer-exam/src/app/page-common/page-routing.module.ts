import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule, Routes} from '@angular/router';
import {StatisticsModule} from '../statistics/statistics.module';
import {LoginComponent} from './login/login.component';
import {FormsModule} from '@angular/forms';
import {FacebookLoginProvider, GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule} from 'angularx-social-login';
import {HttpClient} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LogoutComponent} from './logout/logout.component';

export const CommonRoute: Routes = [
  { path: '', component: HomePageComponent}
];

@NgModule({
  declarations: [HeaderComponent, HomePageComponent, FooterComponent, LoginComponent, LogoutComponent],
  exports: [
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    RouterModule.forChild(CommonRoute),
    StatisticsModule,
    FormsModule,
    SocialLoginModule,
    BrowserAnimationsModule
  ],
  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [{
        id: FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider('1045480999303225'),
      },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider('103585693874-0bjkl21cmmjf8d9n09io95ciuveiievl.apps.googleusercontent.com'),
        },
      ],
    } as SocialAuthServiceConfig,
  }],
})
export class PageRoutingModule { }
