import {Component, OnInit} from '@angular/core';
import {StatisticsService} from '../../service/statistics.service';
import {SumPoint} from '../../model/sum-point';

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
  public code: number;

  constructor(public statisticsService: StatisticsService) {
  }

  ngOnInit(): void {
    this.code = 1;
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
      console.log(this.nameTOP);
      console.log(this.pointTOP);
    });
  }

  showTOP() {
    this.ngOnInit();
  }

  showTOPHTML5() {
    this.code = 3;
    this.nameTOP = [];
    this.pointTOP = [];
    this.dataPoint = [];
    this.sumPoint = [];
    console.log(this.nameTOP);
  }

  showTOPAngular() {
    this.code = 4;
    this.nameTOP = [];
    this.pointTOP = [];
    this.dataPoint = [];
    this.sumPoint = [];
  }

  showTOPJava() {
    this.code = 5;
    this.nameTOP = [];
    this.pointTOP = [];
    this.dataPoint = [];
    this.sumPoint = [];
  }

  showTOPJs() {
    this.code = 2;
    this.nameTOP = [];
    this.pointTOP = [];
    this.dataPoint = [];
    this.sumPoint = [];
  }
}
