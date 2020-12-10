import {Component, OnInit, ViewChild} from '@angular/core';
import {StatisticsService} from '../../service/statistics.service';
import {CountSubject} from '../../model/count-subject';
import {ChartComponent} from 'ng-apexcharts';
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexAxisChartSeries,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexGrid
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  title: string;
};
type ApexXAxis = {
  type?: 'category' | 'datetime' | 'numeric';
  categories?: any;
  labels?: {
    style?: {
      colors?: string | string[];
      fontSize?: string;
    };
  };
};

export type ChartOptionsColumn = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  grid: ApexGrid;
  colors: string[];
  legend: ApexLegend;
};

@Component({
  selector: 'app-statistics-detail-data',
  templateUrl: './statistics-detail-data.component.html',
  styleUrls: ['./statistics-detail-data.component.css']
})
export class StatisticsDetailDataComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public chartOptionsColumn: Partial<ChartOptionsColumn>;

  public countSubjectList = [];
  public subject = [];
  public nameSubject = [];
  public countSubject = [];
  public flag: number;

  constructor(public statisticsService: StatisticsService) {
  }

  ngOnInit(): void {
    this.statisticsService.getStatisticsCountExamSubject().subscribe(data => {
      this.countSubjectList = data;
      console.log(this.countSubjectList);
      if (this.countSubjectList != null) {
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < this.countSubjectList.length; i++) {
          this.subject.push(new CountSubject(this.countSubjectList[i][0], this.countSubjectList[i][1]));
        }
      }
      for (const s of this.subject) {
        this.nameSubject.push(s.subjectName);
        this.countSubject.push(s.countSubject);
      }
      this.flag = 1;
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
                width: 300
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

  selectChartColumn() {
    this.countSubjectList = [];
    this.subject = [];
    this.nameSubject = [];
    this.countSubject = [];
    this.flag = 0;
    this.statisticsService.getStatisticsCountExamSubject().subscribe(data => {
      this.countSubjectList = data;
      console.log(this.countSubjectList);
      if (this.countSubjectList != null) {
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < this.countSubjectList.length; i++) {
          this.subject.push(new CountSubject(this.countSubjectList[i][0], this.countSubjectList[i][1]));
        }
      }
      for (const s of this.subject) {
        this.nameSubject.push(s.subjectName);
        this.countSubject.push(s.countSubject);
      }
      this.flag = 2;
      this.chartOptionsColumn = {
        series: [
          {
            name: 'Số lượng',
            data: [this.countSubject[0], this.countSubject[1], this.countSubject[2], this.countSubject[3]],
          }
        ],
        chart: {
          height: 310,
          type: 'bar',
        },
        colors: [
          '#008FFB',
          '#00E396',
          '#FEB019',
          '#FF4560',
        ],
        plotOptions: {
          bar: {
            columnWidth: '35%',
            distributed: true
          }
        },
        dataLabels: {
          enabled: false
        },
        legend: {
          show: false
        },
        grid: {
          show: false
        },
        xaxis: {
          categories: [
            [this.nameSubject[0]],
            [this.nameSubject[1]],
            [this.nameSubject[2]],
            [this.nameSubject[3]],
          ],
          labels: {
            style: {
              colors: [
                '#008FFB',
                '#00E396',
                '#FEB019',
                '#FF4560',
              ],
              fontSize: '13px'
            }
          }
        }
      };
    });
  }

  selectChartBar() {
    this.countSubjectList = [];
    this.subject = [];
    this.nameSubject = [];
    this.countSubject = [];
    this.flag = 0;
    this.statisticsService.getStatisticsCountExamSubject().subscribe(data => {
      this.countSubjectList = data;
      console.log(this.countSubjectList);
      if (this.countSubjectList != null) {
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < this.countSubjectList.length; i++) {
          this.subject.push(new CountSubject(this.countSubjectList[i][0], this.countSubjectList[i][1]));
        }
      }
      for (const s of this.subject) {
        this.nameSubject.push(s.subjectName);
        this.countSubject.push(s.countSubject);
      }
      this.flag = 1;
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
                width: 300
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


  selectChartPie() {
  }
}
