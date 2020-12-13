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
  public code: string;
  public flag: number;

  constructor(public statisticsService: StatisticsService) {
  }

  ngOnInit(): void {
    this.code = 'TOP';
    this.statisticsService.getStatisticsSumPoint().subscribe(data => {
      this.nameTOP = [];
      this.pointTOP = [];
      this.dataPoint = [];
      this.sumPoint = [];
      this.dataPoint = data;
      if (this.dataPoint != null) {
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < this.dataPoint.length; i++) {
          this.sumPoint.push(new SumPoint(this.dataPoint[i][0], this.dataPoint[i][1], this.dataPoint[i][2]));
        }
      }
      for (const e of this.sumPoint) {
        this.nameTOP.push(e.username);
        this.pointTOP.push(e.sumPoint);
      }
      this.getNameUserTop(this.nameTOP);
      console.log(this.sumPoint);
    });
  }

  showTOPAll() {
    this.ngOnInit();
  }

  showTOPSubject(nameSubject) {
    this.code = nameSubject;
    this.statisticsService.getStatisticsResultExamUserBySubject(nameSubject).subscribe(data => {
      this.nameTOP = [];
      this.pointTOP = [];
      this.dataPoint = [];
      this.sumPoint = [];
      this.dataPoint = data;
      if (this.dataPoint != null) {
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < this.dataPoint.length; i++) {
          this.sumPoint.push(new SumPoint(this.dataPoint[i][0], this.dataPoint[i][1], this.dataPoint[i][2]));
        }
      }
      for (const e of this.sumPoint) {
        this.nameTOP.push(e.username);
        this.pointTOP.push(e.sumPoint);
      }
      this.getNameUserTop(this.nameTOP);
      console.log(this.sumPoint);
    });
  }

  getNameUserTop(array: string []) {
    for (let i = 0; i < array.length; i++) {
      if (array[i].length > 15) {
        if (array[i].includes('@')) {
          array[i] = array[i].slice(0, array[i].indexOf('@'));
        }
      }
    }
    return array;
  }


}
