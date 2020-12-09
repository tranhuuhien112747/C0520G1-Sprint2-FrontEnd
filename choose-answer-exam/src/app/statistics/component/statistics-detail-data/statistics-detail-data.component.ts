import {Component, OnInit, ViewChild} from '@angular/core';
import {StatisticsService} from '../../service/statistics.service';
import {ChartComponent} from 'ng-apexcharts';
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from 'ng-apexcharts';
import {CountSubject} from '../../model/count-subject';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  title: string;
};

@Component({
  selector: 'app-statistics-detail-data',
  templateUrl: './statistics-detail-data.component.html',
  styleUrls: ['./statistics-detail-data.component.css']
})
export class StatisticsDetailDataComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public countSubjectList = [];
  public subject = [];
  public nameSubject = [];
  public countSubject = [];

  constructor(public statisticsService: StatisticsService) {
  }

  ngOnInit(): void {
    this.statisticsService.getStatisticsCountExamSubject().subscribe(data => {
      this.countSubjectList = data;
      console.log('danh sach subject:---');
      console.log(this.countSubjectList);
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.countSubjectList.length; i++) {
        this.subject.push(new CountSubject(this.countSubjectList[i][0], this.countSubjectList[i][1]));
      }
      for (const s of this.subject) {
        this.nameSubject.push(s.subjectName);
        this.countSubject.push(s.countSubject);
      }
      this.chartOptions = {
        series: [this.countSubject[0], this.countSubject[1], this.countSubject[2], this.countSubject[3]],
        chart: {
          width: 400,
          type: 'pie'
        },
        labels: [this.nameSubject[0], this.nameSubject[1], this.nameSubject[2], this.nameSubject[3]],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }
        ]
      };
    });

  }

}
