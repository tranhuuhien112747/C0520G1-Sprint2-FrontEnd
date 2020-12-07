import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsPointComponent } from './component/statistics-point/statistics-point.component';
import { StatisticsMemberComponent } from './component/statistics-member/statistics-member.component';
import { StatisticsDetailDataComponent } from './component/statistics-detail-data/statistics-detail-data.component';



@NgModule({
  declarations: [StatisticsPointComponent, StatisticsMemberComponent, StatisticsDetailDataComponent],
    exports: [
        StatisticsPointComponent,
        StatisticsMemberComponent
    ],
  imports: [
    CommonModule
  ]
})
export class StatisticsModule { }
