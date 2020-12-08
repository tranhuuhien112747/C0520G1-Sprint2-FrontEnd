import { Component, OnInit } from '@angular/core';
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
  public select = [];
  constructor(private examService: ExamService, private dialog: MatDialog, public router: Router) {
  }

  ngOnInit(): void {
    this.examService.getAllExam().subscribe(data => {
      this.listExam = data;
    });
  }

  openDialogAdd() {
    this.examService.getAllExam().subscribe(data => {
      const dialogRef = this.dialog.open(AddNewExamComponent, {
        width: '500px',
        disableClose: true
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.ngOnInit();
      });
    });
  }

  openDialogDelete() {
    console.log(this.select);
    this.examService.getExamById(1).subscribe(data => {
      const dialogRef = this.dialog.open(DeleteExamComponent, {
        width: '500px',
        data: {data1: data},
        disableClose: true
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.ngOnInit();
      });
    });
  }
}
