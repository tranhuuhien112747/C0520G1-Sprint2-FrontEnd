import {Component, Inject, OnInit} from '@angular/core';
import {ExamService} from '../../services/exam.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {Router} from '@angular/router';

@Component({
  selector: 'app-delete-question-in-exam',
  templateUrl: './delete-question-in-exam.component.html',
  styleUrls: ['./delete-question-in-exam.component.css']
})
export class DeleteQuestionInExamComponent implements OnInit {
  public deleteQuestions = '';
  constructor(private examService: ExamService, private dialog: MatDialog, public router: Router,
              private dialogRef: MatDialogRef<DeleteQuestionInExamComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }
  ngOnInit(): void {
    this.deleteQuestions = this.data.data2 + '-#-';
    console.log(this.data.data1[0].idQuestion);
    console.log('this.data.data1.idExam');
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0 ; i < this.data.data1.length; i++){
      this.deleteQuestions += (this.data.data1[i].idQuestion) + '-#-';
    }
    console.log('this.arrDeleteExam');
    console.log(this.deleteQuestions);
  }

  deleteQuestionInExam() {
    this.examService.deleteQuestionInExam(this.deleteQuestions).subscribe( data => {
      this.examService.messageDeleteQuestionSuccess = 'xóa câu hỏi thành công';
      this.dialogRef.close();
    });
  }
}
