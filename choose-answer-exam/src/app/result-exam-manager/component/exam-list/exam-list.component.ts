import { Component, OnInit } from '@angular/core';
import {ResultExamService} from '../../service/result-exam.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-exam-list',
  templateUrl: './exam-list.component.html',
  styleUrls: ['./exam-list.component.css']
})
export class ExamListComponent implements OnInit {

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
      console.log('subject found: ' + this.subjectName);
    });
    this.resultExamService.getExamListBySubject(this.subjectName).subscribe(data => {
      console.log(data);
      this.examListBySubject = data;
    });
  }

}
