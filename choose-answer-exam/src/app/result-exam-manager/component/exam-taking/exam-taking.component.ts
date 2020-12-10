import {Component, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {Exam} from '../../../exam-manager/model/exam.class';
import {ResultExamService} from '../../service/result-exam.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ResultExam} from '../../model/result-exam.class';
import {DatePipe} from '@angular/common';
import {TokenStorageService} from '../../../page-common/service/token-storage/token-storage.service';

@Component({
  selector: 'app-exam-taking',
  templateUrl: './exam-taking.component.html',
  styleUrls: ['./exam-taking.component.css']
})
export class ExamTakingComponent implements OnInit {
  public durationDisplay = '';
  public resultExam: ResultExam;
  public exam: Exam;
  public questionList = [];
  public answerList = [];
  public idExam = 0;
  public formResultExam: FormGroup;
  public pipe: DatePipe;
  public startTime: number;
  public endTime: number;
  public takenDuration = 15;
  constructor(
    private resultExamService: ResultExamService,
    private router: Router,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private tokenStorageService: TokenStorageService
  ) {
  }

  ngOnInit(): void {
    this.startTime = new Date().getTime();
    this.startTimer(15);
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
      this.resultExamService.questionQuantitySV = this.questionList.length;
      this.resultExamService.questionListSV = this.questionList;
      this.resultExamService.examIdSV = this.exam.idExam;
      this.resultExamService.examNameSV = this.exam.examName;
    });
    this.resultExamService.markSV = 0;
    this.resultExamService.trueQuantitySV = 0;
  }

  createNewResultExam(): void {
    // get endTime
    console.log('lan 1');
    this.endTime = new Date().getTime();
    this.takenDuration = Math.round((this.endTime - this.startTime) / 1000) - 1;
    this.resultExamService.takenDurationSV = this.takenDuration;
    console.log('thoi gian lam bai: ' + this.takenDuration);

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
    this.resultExamService.answerListSV = this.answerList;
    for (let i = 0; i < this.questionList.length; i++) {
      console.log('True-answer: ' + this.questionList[i].trueAnswer);
      console.log('your answer: ' + this.answerList[i]);
      console.log('mark now: ' + this.resultExamService.markSV);
      if (this.questionList[i].trueAnswer === this.answerList[i]) {
        console.log('you choose right answer: ' + i);
        this.resultExamService.markSV += (10 / this.questionList.length);
        this.resultExamService.trueQuantitySV += 1;
      }
    }
    this.answerList = [];
    console.log('mark: ' + this.resultExamService.markSV);
    console.log('true-quantity: ' + this.resultExamService.trueQuantitySV);
    // .......................
    console.log('call save method()');
    this.pipe = new DatePipe('en-US');
    this.resultExam = new ResultExam();
    this.resultExam.mark = this.resultExamService.markSV.toFixed(2);
    this.resultExam.examId = this.resultExamService.examIdSV;
    // tslint:disable-next-line:max-line-length
    this.resultExam.userId = (this.tokenStorageService.getUser() != null) ? this.tokenStorageService.getUser().id : 1; // - - - > changed by tokenStorageService.
    this.resultExam.takenDate = this.pipe.transform(new Date(), 'dd-MM-yyyy');
    this.resultExam.takenDuration = this.takenDuration + '';
    console.log('new-result-exam');
    console.log(this.resultExam);

    this.resultExamService.saveResultExam(this.resultExam).subscribe(data => {
      console.log('save into db successfully');
    });
    this.router.navigate(['/result-exam-create']);
  }

  startTimer(duration): void {
    let timer = duration; // --> seconds
    let minutes: any;
    let seconds: any;
    const myVar = setInterval(() => {
      minutes = Math.round(timer / 60);
      seconds = Math.round(timer % 60);

      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;

      this.durationDisplay = minutes + ':' + seconds;
      console.log('lan 1');
      if (--timer < 0) {
        timer = 0;
        clearInterval(myVar);
        this.createNewResultExam();
      }
    }, 1000);

    // if (timer === 0){
    //   this.createNewResultExam();
    // }
  }
}

