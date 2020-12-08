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
  public subjects: Subject[] = [];
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
    this.questionService.addNewQuestion(this.createQuestion.value).subscribe(data => {
      console.log('hello' + this.createQuestion.value);
      console.log(data);
      this.dialogRef.close();
      }
    );
  }
}
