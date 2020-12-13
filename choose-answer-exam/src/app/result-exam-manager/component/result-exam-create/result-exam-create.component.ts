import { Component, OnInit } from '@angular/core';
import {ResultExamService} from '../../service/result-exam.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-result-exam-create',
  templateUrl: './result-exam-create.component.html',
  styleUrls: ['./result-exam-create.component.css']
})
export class ResultExamCreateComponent implements OnInit {
  public resultMark = 0;
  public takenDuration = 0;
  public trueQty = 0;
  public questionQty = 0;
  public questionList = [];
  public answerList = [];
  public subjectName = '';
  public examName = '';

  constructor(
    private resultExamService: ResultExamService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.resultMark = this.resultExamService.markSV;
    this.trueQty = this.resultExamService.trueQuantitySV;
    this.questionQty = this.resultExamService.questionQuantitySV;
    this.questionList = this.resultExamService.questionListSV;
    this.answerList = this.resultExamService.answerListSV;
    this.subjectName = this.resultExamService.subjectNameSV;
    this.examName = this.resultExamService.examNameSV;
    this.takenDuration = this.resultExamService.takenDurationSV;
  }
}
