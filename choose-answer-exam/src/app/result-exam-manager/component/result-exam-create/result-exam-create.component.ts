import { Component, OnInit } from '@angular/core';
import {ResultExamService} from '../../service/result-exam.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {ResultExam} from '../../model/result-exam.class';

@Component({
  selector: 'app-result-exam-create',
  templateUrl: './result-exam-create.component.html',
  styleUrls: ['./result-exam-create.component.css']
})
export class ResultExamCreateComponent implements OnInit {
  public resultMark = 0;
  public trueQty = 0;
  public questionQty = 0;
  public questionList = [];
  public answerList = [];

  constructor(
    private resultExamService: ResultExamService,
    private router: Router,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.resultMark = this.resultExamService.mark;
    this.trueQty = this.resultExamService.trueQuantity;
    this.questionQty = this.resultExamService.questionQuantity;
    this.questionList = this.resultExamService.questionList;
    this.answerList = this.resultExamService.answerList;
    console.log('answer-list -->onInit: ' + this.answerList);
  }
}
