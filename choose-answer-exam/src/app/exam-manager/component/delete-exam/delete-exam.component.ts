import {Component, Inject, OnInit} from '@angular/core';
import {ExamService} from '../../services/exam.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {Router} from '@angular/router';


@Component({
  selector: 'app-delete-exam',
  templateUrl: './delete-exam.component.html',
  styleUrls: ['./delete-exam.component.css']
})
export class DeleteExamComponent implements OnInit {
  public arrDeleteExam = '';
  constructor(private examService: ExamService, private dialog: MatDialog, public router: Router,
              private dialogRef: MatDialogRef<DeleteExamComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
    console.log(this.data.data1[0].idExam);
    console.log('this.data.data1.idExam');
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0 ; i < this.data.data1.length; i++){
      this.arrDeleteExam += (this.data.data1[i].idExam) + '-#-';
    }
    console.log('this.arrDeleteExam');
    console.log(this.arrDeleteExam);
  }

  deleteExam() {
    this.examService.deleteExam(this.arrDeleteExam).subscribe( data => {
      this.examService.messageDeleteSuccess = 'xóa đề thi thành công.';
      this.dialogRef.close();
    });
  }
}
