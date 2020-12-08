import {Component, OnInit} from '@angular/core';
import {StatisticsService} from '../../service/statistics.service';
import {SumPoint} from '../../model/sum-point';
import {Router} from '@angular/router';

@Component({
  selector: 'app-statistics-point',
  templateUrl: './statistics-point.component.html',
  styleUrls: ['./statistics-point.component.css']
})
export class StatisticsPointComponent implements OnInit {
  public dataPoint = [];
  public sumPoint = [];
  public nameTOP = [];
  public pointTOP = [];
  public code: string;

  constructor(public statisticsService: StatisticsService,
              public route: Router) {
  }

  ngOnInit(): void {
    this.code = '0';
    this.statisticsService.getStatisticsSumPoint().subscribe(data => {
      this.dataPoint = data;
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.dataPoint.length; i++) {
        this.sumPoint.push(new SumPoint(this.dataPoint[i][0], this.dataPoint[i][1], this.dataPoint[i][2]));
      }
      for (const e of this.sumPoint) {
        this.nameTOP.push(e.username);
        this.pointTOP.push(e.sumPoint);
      }
      console.log('-----------------');
      console.log(this.sumPoint);
      console.log('-----------------');
    });
  }

  showTOP() {
    this.nameTOP = [];
    this.pointTOP = [];
    this.dataPoint = [];
    this.sumPoint = [];
    this.code = '0';
    this.statisticsService.getStatisticsSumPoint().subscribe(data => {
      this.dataPoint = data;
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.dataPoint.length; i++) {
        this.sumPoint.push(new SumPoint(this.dataPoint[i][0], this.dataPoint[i][1], this.dataPoint[i][2]));
      }
      for (const e of this.sumPoint) {
        this.nameTOP.push(e.username);
        this.pointTOP.push(e.sumPoint);
      }
      console.log(this.sumPoint);
    });
  }

  showTOPJs() {
    this.code = '1';
    this.nameTOP = [];
    this.pointTOP = [];
    this.dataPoint = [];
    this.sumPoint = [];
    this.statisticsService.getStatisticsResultExamUserBySubject(this.code).subscribe(data => {
      this.dataPoint = data;
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.dataPoint.length; i++) {
        this.sumPoint.push(new SumPoint(this.dataPoint[i][0], this.dataPoint[i][1], this.dataPoint[i][2]));
      }
      for (const e of this.sumPoint) {
        this.nameTOP.push(e.username);
        this.pointTOP.push(e.sumPoint);
      }
      console.log(this.sumPoint);
    });
  }

  showTOPHTML5() {
    this.code = '2';
    this.nameTOP = [];
    this.pointTOP = [];
    this.dataPoint = [];
    this.sumPoint = [];
    this.statisticsService.getStatisticsResultExamUserBySubject(this.code).subscribe(data => {
      this.dataPoint = data;
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.dataPoint.length; i++) {
        this.sumPoint.push(new SumPoint(this.dataPoint[i][0], this.dataPoint[i][1], this.dataPoint[i][2]));
      }
      for (const e of this.sumPoint) {
        this.nameTOP.push(e.username);
        this.pointTOP.push(e.sumPoint);
      }
      console.log(this.sumPoint);
    });
  }

  showTOPAngular() {
    this.code = '3';
    this.nameTOP = [];
    this.pointTOP = [];
    this.dataPoint = [];
    this.sumPoint = [];
    this.statisticsService.getStatisticsResultExamUserBySubject(this.code).subscribe(data => {
      this.dataPoint = data;
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.dataPoint.length; i++) {
        this.sumPoint.push(new SumPoint(this.dataPoint[i][0], this.dataPoint[i][1], this.dataPoint[i][2]));
      }
      for (const e of this.sumPoint) {
        this.nameTOP.push(e.username);
        this.pointTOP.push(e.sumPoint);
      }
      console.log(this.sumPoint);
    });
  }

  showTOPJava() {
    this.code = '4';
    this.nameTOP = [];
    this.pointTOP = [];
    this.dataPoint = [];
    this.sumPoint = [];
    this.statisticsService.getStatisticsResultExamUserBySubject(this.code).subscribe(data => {
      this.dataPoint = data;
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.dataPoint.length; i++) {
        this.sumPoint.push(new SumPoint(this.dataPoint[i][0], this.dataPoint[i][1], this.dataPoint[i][2]));
      }
      for (const e of this.sumPoint) {
        this.nameTOP.push(e.username);
        this.pointTOP.push(e.sumPoint);
      }
      console.log(this.sumPoint);
    });
  }

}
