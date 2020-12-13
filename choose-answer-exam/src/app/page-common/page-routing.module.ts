import {NgModule} from '@angular/core';
import {HomePageComponent} from './component/home-page/home-page.component';
import {HeaderComponent} from './component/header/header.component';
import {FooterComponent} from './component/footer/footer.component';
import {RouterModule, Routes} from '@angular/router';
import {StatisticsModule} from '../statistics/statistics.module';
import {LoginComponent} from './login/login.component';
import {FormsModule} from '@angular/forms';
import {FacebookLoginProvider, GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule} from 'angularx-social-login';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LogoutComponent} from './logout/logout.component';
import { MessageComponent } from './message/message.component';
import { C0520g1Component } from './c0520g1/c0520g1.component';
import {MatDialogModule} from '@angular/material/dialog';

export const CommonRoute: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'C0520G1', component: C0520g1Component}
];

@NgModule({
  declarations: [HeaderComponent, HomePageComponent, FooterComponent, LoginComponent, LogoutComponent, MessageComponent, C0520g1Component],
  exports: [
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    RouterModule.forChild(CommonRoute),
    StatisticsModule,
    FormsModule,
    SocialLoginModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [{
        id: FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider('375466110415778'),
      },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider('103585693874-0bjkl21cmmjf8d9n09io95ciuveiievl.apps.googleusercontent.com'),
        },
      ],
    } as SocialAuthServiceConfig,
  }],
})
export class PageRoutingModule {
}
