import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {QuestionService} from '../../services/question.service';
import {Router} from '@angular/router';
import {DeleteErrorComponent} from '../delete-error/delete-error.component';

@Component({
  selector: 'app-delete-question',
  templateUrl: './delete-question.component.html',
  styleUrls: ['./delete-question.component.css']
})
export class DeleteQuestionComponent implements OnInit {
  public questionFullName;
  public questionFullId;

  constructor(private dialog: MatDialog,
              public dialogRef: MatDialogRef<DeleteQuestionComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public questionService: QuestionService,
              public router: Router,
  ) {
  }

  ngOnInit(): void {
    this.questionFullName = this.data.data1.questionContent;
    this.questionFullId = this.data.data1.idQuestion;
    console.log('this.data.data1');
    console.log(this.data.data1.questionContent);
    console.log('this.data.data1');
  }

  deleteQuestion() {
    this.questionService.deleteQuestion(this.questionFullId).subscribe(data => {
      console.log('data');
      console.log(data);
      if (data === false) {
        this.openDialogErr();
      }else {
        this.questionService.messageDeleteSuccess = 'Xóa câu hỏi thành công.';
      }
      this.dialogRef.close();
    });
  }

  openDialogErr() {
    this.questionService.getAllQuestion().subscribe(data => {
      const dialogRef = this.dialog.open(DeleteErrorComponent, {
        width: '500px',
        disableClose: true
      });
      dialogRef.afterClosed().subscribe(result => {
        this.ngOnInit();
      });
    });
  }
}
