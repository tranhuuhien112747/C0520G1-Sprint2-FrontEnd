import {Component, Inject, OnInit} from '@angular/core';
import {Question} from '../../model/question.class';
import {ExamService} from '../../services/exam.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-question-in-exam',
  templateUrl: './add-question-in-exam.component.html',
  styleUrls: ['./add-question-in-exam.component.css']
})
export class AddQuestionInExamComponent implements OnInit {
  public listQuestion: Question[] = [];
  public idExam: string;
  public messageAddErr = '';
  public p: number;
  public numQuestion: number;
  public select = [];
  selectedItemsList = [];
  public arrAddIdQuestion = '';

  constructor(private examService: ExamService, private dialog: MatDialog, public router: Router,
              private dialogRef: MatDialogRef<AddQuestionInExamComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
    this.selectedItemsList = [];
    this.idExam = this.data.data1;
    this.numQuestion = this.data.data2;
    this.examService.getAllQuestion(this.idExam).subscribe(data => {
      this.listQuestion = data;
    });
  }

  onSubmit() {
    if ( (this.selectedItemsList.length + this.numQuestion) > 10) {
      this.messageAddErr = 'Quá số lượng, vui lòng chỉ thêm dưới ' + (11 - this.numQuestion) + ' câu hỏi.';
      setTimeout(() => {
        this.messageAddErr = '';
      }, 2000);
    } else {
      this.arrAddIdQuestion = this.idExam + '-#-';
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.selectedItemsList.length; i++) {
        this.arrAddIdQuestion += (this.selectedItemsList[i].idQuestion) + '-#-';
      }
      this.examService.addQuestionInExam(this.arrAddIdQuestion).subscribe(data => {
        this.examService.messageAddQuestionSuccess = 'thêm câu hỏi vào đề thành công';
        this.dialogRef.close();
      });
    }
  }

  changeSelection() {
    this.fetchSelectedItems();
    console.log(this.selectedItemsList);
  }

  fetchSelectedItems() {
    this.selectedItemsList = this.listQuestion.filter((value, index) => {
      return value.isChecked;
    });
  }
}
