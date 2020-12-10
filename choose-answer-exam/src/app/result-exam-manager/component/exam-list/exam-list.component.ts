import {Component, OnChanges, OnInit} from '@angular/core';
import {ResultExamService} from '../../service/result-exam.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-exam-list',
  templateUrl: './exam-list.component.html',
  styleUrls: ['./exam-list.component.css']
})
export class ExamListComponent implements OnInit, OnChanges {

  public examListBySubject = [];
  public subjectName = '';

  constructor(
    private resultExamService: ResultExamService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.subjectName = data.subject;
      console.log('subject is: ' + this.subjectName);
      this.resultExamService.subjectNameSV = this.subjectName;
      this.resultExamService.getExamListBySubject(this.subjectName).subscribe(data2 => {
        console.log('Init-->exam-list is: ');
        console.log(data2);
        this.examListBySubject = data2;
      });
    });
  }

  ngOnChanges(): void {
  //   this.activatedRoute.params.subscribe(data => {
  //     this.subjectName = data.subject;
  //     console.log('subject -changed- is: ' + this.subjectName);
  //   });
  //   this.resultExamService.subjectNameSV = this.subjectName;
  //   this.resultExamService.getExamListBySubject(this.subjectName).subscribe(data => {
  //     console.log('Changes-->exam-list is: ');
  //     console.log(data);
  //     this.examListBySubject = data;
  //   });
  }
}
