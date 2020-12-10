import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {ExamService} from '../../services/exam.service';
import {DeleteExamComponent} from '../delete-exam/delete-exam.component';
import {AddNewExamComponent} from '../add-new-exam/add-new-exam.component';
import {Exam} from '../../model/exam.class';


@Component({
  selector: 'app-list-exam',
  templateUrl: './list-exam.component.html',
  styleUrls: ['./list-exam.component.css']
})
export class ListExamComponent implements OnInit {
  public listExam: Exam[] = [];
  public p: number;
  public message = '';
  public messageAddSuccess = '';
  public messageDeleteSuccess = '';
  selectedItemsList = [];

  constructor(private examService: ExamService, private dialog: MatDialog, public router: Router) {
  }

  ngOnInit(): void {
    this.p = 0;
    this.messageAddSuccess = this.examService.messageAddSuccess;
    setTimeout (() => {
      this.examService.messageAddSuccess = '';
      this.messageAddSuccess = '';
    }, 2000);
    this.messageDeleteSuccess = this.examService.messageDeleteSuccess;
    setTimeout (() => {
      this.examService.messageDeleteSuccess = '';
      this.messageDeleteSuccess = '';
    }, 2000);
    this.examService.getAllExam().subscribe(data => {
      this.listExam = data;
    });
    this.fetchSelectedItems();
  }

  openDialogAdd() {
    this.examService.getAllExam().subscribe(data => {
      const dialogRef = this.dialog.open(AddNewExamComponent, {
        width: '500px',
        data: {data1: this.listExam},
        disableClose: true
      });

      dialogRef.afterClosed().subscribe(result => {
        this.ngOnInit();
      });
    });
  }

  openDialogDelete() {
    console.log(this.selectedItemsList.length);
    this.examService.getAllExam().subscribe(data => {
      if (this.selectedItemsList.length === 0) {
        this.message = 'Vui lòng chọn mục cần xóa.';
        setTimeout (() => {
          this.message = '';
        }, 2000);
        console.log(this.message);
      } else {
        const dialogRef = this.dialog.open(DeleteExamComponent, {
          width: '500px',
          data: {data1: this.selectedItemsList},
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
    console.log(this.selectedItemsList);
  }
  fetchSelectedItems() {
    this.selectedItemsList = this.listExam.filter((value, index) => {
      return value.isChecked;
    });
  }

}
