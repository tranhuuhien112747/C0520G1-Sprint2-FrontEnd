import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsPointComponent } from './component/statistics-point/statistics-point.component';
import { StatisticsMemberComponent } from './component/statistics-member/statistics-member.component';
import { StatisticsDetailDataComponent } from './component/statistics-detail-data/statistics-detail-data.component';
import {MatDialogModule} from '@angular/material/dialog';



@NgModule({
  declarations: [StatisticsPointComponent, StatisticsMemberComponent, StatisticsDetailDataComponent],
    exports: [
        StatisticsPointComponent,
        StatisticsMemberComponent
    ],
  imports: [
    CommonModule,
    MatDialogModule
  ]
})
export class StatisticsModule { }
