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
  public answerA = '';
  public answerB = '';
  public answerC = '';
  public answerD = '';
  public trueAnswer = '';
  public trueAnswerValue = '';
  public subjectValue: Subject;

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
    });
    this.updateQuestion.patchValue(this.data.data1);
    this.subjectValue = this.data.data1.subject;
    this.answerA = this.data.data1.answerA;
    this.answerB = this.data.data1.answerB;
    this.answerC = this.data.data1.answerC;
    this.answerD = this.data.data1.answerD;
    this.trueAnswer = this.data.data1.trueAnswer;
  }

  onSubmit() {
    if (this.trueAnswerValue === 'A') {
      this.updateQuestion.value.trueAnswer = this.updateQuestion.value.answerA;
    } else if (this.trueAnswerValue === 'B') {
      this.updateQuestion.value.trueAnswer = this.updateQuestion.value.answerB;
    } else if (this.trueAnswerValue === 'C') {
      this.updateQuestion.value.trueAnswer = this.updateQuestion.value.answerC;
    } else if (this.trueAnswerValue === 'D') {
      this.updateQuestion.value.trueAnswer = this.updateQuestion.value.answerD;
    }
    this.updateQuestion.value.subject = this.subjectValue;
    console.log(this.updateQuestion.value);
    this.questionService.updateQuestion(this.updateQuestion.value).subscribe(data => {
        this.dialogRef.close();
      }
    );
  }

  getValueTrue(value: string){
    this.trueAnswerValue = value;
  }

  getValueSubject(element: Subject) {
    this.subjectValue = element;
  }
}
