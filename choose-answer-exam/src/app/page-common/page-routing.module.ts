import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule, Routes} from '@angular/router';

export const CommonRoute: Routes = [
  { path: '', component: HomePageComponent}
];

@NgModule({
  declarations: [HeaderComponent, HomePageComponent, FooterComponent],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    RouterModule.forChild(CommonRoute),
    ]
})
export class PageRoutingModule { }
