import {Component, OnInit} from '@angular/core';
import {QuestionService} from '../../services/question.service';
import {MatDialog} from '@angular/material/dialog';
import {DeleteQuestionComponent} from '../delete-question/delete-question.component';
import {Question} from '../../model/question.class';
import {AddNewQuestionComponent} from '../add-new-question/add-new-question.component';
import {EditQuestionComponent} from '../edit-question/edit-question.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  public listQuestion: Question[] = [];
  public p: number;
  public index: number;
  public messageDeleteSuccess = '';
  public messageAddSuccess = '';
  public messageUpload = '';
  public valueName = '';
  public selectSubject = '1';

  constructor(private questionService: QuestionService, private dialog: MatDialog, public router: Router) {
  }

  ngOnInit(): void {
    if ( this.index === 0){
      this.p = this.p - 1;
    }
    this.messageUpload = this.questionService.messageUpload;
    setTimeout(() => {
      this.questionService.messageUpload = '';
      this.messageUpload = '';
    }, 2000);
    this.messageDeleteSuccess = this.questionService.messageDeleteSuccess;
    setTimeout(() => {
      this.questionService.messageDeleteSuccess = '';
      this.messageDeleteSuccess = '';
    }, 2000);
    this.messageAddSuccess = this.questionService.messageAddSuccess;
    setTimeout(() => {
      this.questionService.messageAddSuccess = '';
      this.messageAddSuccess = '';
    }, 2000);
    this.questionService.getAllQuestion().subscribe(data => {
      this.listQuestion = data;
    });
  }

  openDialogEdit(id) {
    this.questionService.getQuestionById(id).subscribe(data => {
      const dialogRef = this.dialog.open(EditQuestionComponent, {
        width: '800px',
        data: {data1: data},
        disableClose: true
      });

      dialogRef.afterClosed().subscribe(result => {
        this.ngOnInit();
      });
    });
  }
  openDialogDelete(id, index) {
    this.questionService.getQuestionById(id).subscribe(data => {
      this.index = index;
      const dialogRef = this.dialog.open(DeleteQuestionComponent, {
        width: '500px',
        data: {data1: data},
        disableClose: true
      });
      dialogRef.afterClosed().subscribe(result => {
        this.ngOnInit();
      });
    });
  }

  openDialogAddNew() {
    this.questionService.getAllQuestion().subscribe(data => {
      const dialogRef = this.dialog.open(AddNewQuestionComponent, {
        width: '800px',
        data: {data1: data},
        disableClose: true
      });

      dialogRef.afterClosed().subscribe(result => {
        this.ngOnInit();
      });
    });
  }

  getAllByName() {
    this.questionService.getAllQuestionByNameAndSubject(this.valueName, this.selectSubject).subscribe( data => {
      this.p = 0;
      this.listQuestion = data;
    });
  }
}
