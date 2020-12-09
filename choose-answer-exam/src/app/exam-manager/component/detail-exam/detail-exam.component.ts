import {Component, OnInit} from '@angular/core';
import {ExamService} from '../../services/exam.service';
import {MatDialog} from '@angular/material/dialog';
import {ActivatedRoute, Router} from '@angular/router';
import {Question} from '../../model/question.class';
import {AddQuestionInExamComponent} from '../add-question-in-exam/add-question-in-exam.component';
import {DeleteQuestionInExamComponent} from '../delete-question-in-exam/delete-question-in-exam.component';

@Component({
  selector: 'app-detail-exam',
  templateUrl: './detail-exam.component.html',
  styleUrls: ['./detail-exam.component.css']
})
export class DetailExamComponent implements OnInit {
  public listQuestionInExam: Question[] = [];
  public idExam: number;
  public examName: string;
  public messageDelete = '';
  public messageErrBack = '';
  public messageAddQuestionErr = '';
  public messageDeleteQuestionSuccess = '';
  public messageAddQuestionSuccess = '';
  public select = [];
  selectedItemsList = [];

  constructor(private examService: ExamService, private dialog: MatDialog, private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.selectedItemsList = [];
    this.messageDeleteQuestionSuccess = this.examService.messageDeleteQuestionSuccess;
    setTimeout(() => {
      this.examService.messageDeleteQuestionSuccess = '';
      this.messageDeleteQuestionSuccess = '';
    }, 2000);
    this.messageAddQuestionSuccess = this.examService.messageAddQuestionSuccess;
    setTimeout(() => {
      this.examService.messageAddQuestionSuccess = '';
      this.messageAddQuestionSuccess = '';
    }, 2000);
    this.activatedRoute.params.subscribe(data => {
      this.idExam = data.id;
    });
    this.examService.getExamById(this.idExam).subscribe(data => {
      this.examName = data.examName;
      this.listQuestionInExam = data.questions;
    });
  }

  openDialogAddQuestionInExam() {
    this.examService.getAllExam().subscribe(data => {
      if (this.listQuestionInExam.length === 10) {
        this.messageAddQuestionErr = 'Tối đa là 10 câu hỏi, vui lòng thao tác lại !';
        setTimeout(() => {
          this.messageAddQuestionErr = '';
        }, 2000);
      } else {
        const dialogRef = this.dialog.open(AddQuestionInExamComponent, {
          width: '800px',
          data: {data1: this.idExam, data2: this.listQuestionInExam.length},
          disableClose: true
        });

        dialogRef.afterClosed().subscribe(result => {
          this.ngOnInit();
        });
      }
    });
  }

  openDialogDeleteQuestionInExam() {
    this.examService.getAllExam().subscribe(data => {
      if (this.selectedItemsList.length === 0) {
        this.messageDelete = 'Vui lòng chọn mục cần xóa.';
        setTimeout(() => {
          this.messageDelete = '';
        }, 2000);
      } else {
        const dialogRef = this.dialog.open(DeleteQuestionInExamComponent, {
          width: '500px',
          data: {data1: this.selectedItemsList, data2: this.idExam},
          disableClose: true
        });

        dialogRef.afterClosed().subscribe(result => {
          this.ngOnInit();
        });
      }
    });
  }

  changeSelection() {
    this.fetchSelectedItems();
  }

  fetchSelectedItems() {
    this.selectedItemsList = this.listQuestionInExam.filter((value, index) => {
      return value.isChecked;
    });
  }

  checkBack() {
    if (this.listQuestionInExam.length < 10){
      this.messageErrBack = 'Vui lòng thêm đủ 10 câu hỏi vào đề.';
      setTimeout(() => {
        this.messageErrBack = '';
      }, 2000);
    }else {
      this.router.navigateByUrl('/exam-list');
    }
  }
}
