import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

export const StatisticsRoutes: Routes = [
  // {path: '', component:  ];
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(StatisticsRoutes),
  ]
})
export class StatisticsRoutingModule {
}
