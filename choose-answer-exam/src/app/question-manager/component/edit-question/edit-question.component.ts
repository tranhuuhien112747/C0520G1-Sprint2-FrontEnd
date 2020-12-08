import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {QuestionService} from '../../services/question.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Question} from '../../model/question.class';
import {Observable} from 'rxjs';
import {Subject} from '../../model/subject.class';

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.css']
})
export class EditQuestionComponent implements OnInit {
  public updateQuestion: FormGroup;
  public question: Question;
  public subject: Observable<Subject>;
  public subjects: Subject[] = [];
  public correct = '';

  constructor(private fb: FormBuilder,
              private questionService: QuestionService,
              private router: Router,
              public dialogRef: MatDialogRef<EditQuestionComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
    this.updateQuestion = this.fb.group({
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
    this.updateQuestion.patchValue(this.data.data1);
  }

  onSubmit() {
    if (this.updateQuestion.value.trueAnswer === 'A') {
      this.updateQuestion.value.trueAnswer = this.updateQuestion.value.answerA;
    } else if (this.updateQuestion.value.trueAnswer === 'B') {
      this.updateQuestion.value.trueAnswer = this.updateQuestion.value.answerB;
    } else if (this.updateQuestion.value.trueAnswer === 'C') {
      this.updateQuestion.value.trueAnswer = this.updateQuestion.value.answerC;
    } else if (this.updateQuestion.value.trueAnswer === 'D') {
      this.updateQuestion.value.trueAnswer = this.updateQuestion.value.answerD;
    }
    this.questionService.addNewQuestion(this.updateQuestion.value).subscribe(data => {
        console.log('hello' + this.updateQuestion.value);
        console.log(data);
        this.dialogRef.close();
      }
    );
  }
}
