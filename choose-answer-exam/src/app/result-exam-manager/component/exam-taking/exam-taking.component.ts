import {Component, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {Exam} from '../../../exam-manager/model/exam.class';
import {ResultExamService} from '../../service/result-exam.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ResultExam} from '../../model/result-exam.class';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-exam-taking',
  templateUrl: './exam-taking.component.html',
  styleUrls: ['./exam-taking.component.css']
})
export class ExamTakingComponent implements OnInit {
  public resultExam: ResultExam;
  public exam: Exam;
  public questionList = [];
  public answerList = [];
  public idExam = 0;
  public formResultExam: FormGroup;
  public pipe: DatePipe

  constructor(
    private resultExamService: ResultExamService,
    private router: Router,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.formResultExam = this.formBuilder.group({
        answer1: '',
        answer2: '',
        answer3: '',
        answer4: '',
        answer5: '',
        answer6: '',
        answer7: '',
        answer8: '',
        answer9: '',
        answer10: '',
    });
    this.activatedRoute.params.subscribe(data => {
      this.idExam = data.id;
      console.log('id found: ' + this.idExam);
    });

    this.resultExamService.getExamById(this.idExam).subscribe(data => {
      this.exam = data;
    }, error => {
      console.log('error happended...');
    }, () => {
      this.questionList = this.exam.questions;
      this.resultExamService.questionQuantity = this.questionList.length;
      this.resultExamService.questionList = this.questionList;
      this.resultExamService.examId = this.exam.idExam;
    });
    this.resultExamService.mark = 0;
    this.resultExamService.trueQuantity = 0;
  }

  createNewResultExam() {
    this.answerList.push(this.formResultExam.value.answer1);
    this.answerList.push(this.formResultExam.value.answer2);
    this.answerList.push(this.formResultExam.value.answer3);
    this.answerList.push(this.formResultExam.value.answer4);
    this.answerList.push(this.formResultExam.value.answer5);
    this.answerList.push(this.formResultExam.value.answer6);
    this.answerList.push(this.formResultExam.value.answer7);
    this.answerList.push(this.formResultExam.value.answer8);
    this.answerList.push(this.formResultExam.value.answer9);
    this.answerList.push(this.formResultExam.value.answer10);
    console.log('answer-list');
    console.log(this.answerList);
    this.resultExamService.answerList = this.answerList;
    for (let i = 0; i < this.questionList.length; i++) {
      console.log('True-answer: ' + this.questionList[i].trueAnswer);
      console.log('your answer: ' + this.answerList[i]);
      console.log('mark now: ' + this.resultExamService.mark);
      if (this.questionList[i].trueAnswer === this.answerList[i]) {
        console.log('you choose right answer: ' + i);
        this.resultExamService.mark += (10 / this.questionList.length);
        this.resultExamService.trueQuantity += 1;
      }
    }
    console.log('mark: ' + this.resultExamService.mark);
    console.log('true-quantity: ' + this.resultExamService.trueQuantity);
    // .......................
    console.log('call save method()');
    this.pipe = new DatePipe('en-US');
    this.resultExam = new ResultExam();
    this.resultExam.mark = this.resultExamService.mark;
    this.resultExam.examId = this.resultExamService.examId;
    this.resultExam.userId = 1; // - - - > changed by tokenStorageService.
    this.resultExam.takenDate = this.pipe.transform(new Date(), 'dd-MM-yyyy');
    this.resultExam.takenDuration = 75 + ' giây';
    console.log('new-result-exam');
    console.log(this.resultExam);

    this.resultExamService.saveResultExam(this.resultExam).subscribe(data => {
      console.log('save into db successfully');
    });
    this.router.navigate(['/result-exam-create']);
  }
}
