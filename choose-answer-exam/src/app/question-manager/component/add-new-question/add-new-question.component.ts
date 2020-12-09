import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {QuestionService} from '../../services/question.service';
import {Question} from '../../model/question.class';
import {Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Subject} from '../../model/subject.class';

@Component({
  selector: 'app-add-new-question',
  templateUrl: './add-new-question.component.html',
  styleUrls: ['./add-new-question.component.css']
})
export class AddNewQuestionComponent implements OnInit {
  public createQuestion: FormGroup;
  public question: Question;
  public boolean = false;
  public subjects: Subject[] = [];
  public messageErrSubject = '';
  public messageErrTrueAnswer = '';

  constructor(private fb: FormBuilder,
              private questionService: QuestionService,
              private router: Router,
              public dialogRef: MatDialogRef<AddNewQuestionComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
    this.createQuestion = this.fb.group({
      idQuestion: ['', Validators.required],
      questionContent: ['', Validators.required],
      answerA: ['', Validators.required],
      answerB: ['', Validators.required],
      answerC: ['', Validators.required],
      answerD: ['', Validators.required],
      subject: ['', Validators.required],
      trueAnswer: ['', Validators.required]
    });
    this.questionService.getAllSubject().subscribe(data => {
      this.subjects = data;
      console.log(data);
    });
  }

  onSubmit() {
    if (this.createQuestion.value.trueAnswer === 'A') {
      this.createQuestion.value.trueAnswer = this.createQuestion.value.answerA;
    } else if (this.createQuestion.value.trueAnswer === 'B') {
      this.createQuestion.value.trueAnswer = this.createQuestion.value.answerB;
    } else if (this.createQuestion.value.trueAnswer === 'C') {
      this.createQuestion.value.trueAnswer = this.createQuestion.value.answerC;
    } else if (this.createQuestion.value.trueAnswer === 'D') {
      this.createQuestion.value.trueAnswer = this.createQuestion.value.answerD;
    }
    if (this.createQuestion.value.trueAnswer === '') {
      this.messageErrTrueAnswer = 'Vui lòng chọn đáp án đúng.';
      this.boolean = true;
    }
    if (this.createQuestion.value.subject === '') {
      this.messageErrSubject = 'Vui lòng chọn môn học.';
      this.boolean = true;
    }
    if (this.boolean === false) {
      this.questionService.addNewQuestion(this.createQuestion.value).subscribe(data => {
        this.questionService.messageAddSuccess = 'Thêm mới câu hỏi thành công.',
          this.dialogRef.close();
        }
      );
    }
  }

  chosseSubject() {
    this.messageErrSubject = '';
  }

  chosseTrueAswer() {
    this.messageErrTrueAnswer = '';
  }
}
