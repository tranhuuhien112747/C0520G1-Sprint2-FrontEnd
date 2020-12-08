import {Component, OnInit} from '@angular/core';
import {ExamService} from '../../services/exam.service';
import {MatDialog} from '@angular/material/dialog';
import {ActivatedRoute, Router} from '@angular/router';
import {Question} from '../../model/question.class';

@Component({
  selector: 'app-detail-exam',
  templateUrl: './detail-exam.component.html',
  styleUrls: ['./detail-exam.component.css']
})
export class DetailExamComponent implements OnInit {
  public listQuestionInExam: Question[] = [];
  public idExam: number;

  constructor(private examService: ExamService, private dialog: MatDialog, private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.idExam = data.id;
    });
    this.examService.getExamById(this.idExam).subscribe( data => {
      this.listQuestionInExam = data.questions;
      console.log( this.listQuestionInExam);
    });
  }

}
