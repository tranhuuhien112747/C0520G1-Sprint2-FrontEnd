import {Component, Inject, OnInit} from '@angular/core';
import {ExamService} from '../../services/exam.service';
import {Subject} from '../../../question-manager/model/subject.class';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Exam} from '../../model/exam.class';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-add-new-exam',
  templateUrl: './add-new-exam.component.html',
  styleUrls: ['./add-new-exam.component.css']
})
export class AddNewExamComponent implements OnInit {
  public subjects: Subject[] = [];
  public listExam: Exam[] = [];
  public createExam: FormGroup;
  public messageErr: string;
  public messageErrName: string;
  public boolean = false;

  constructor(private examService: ExamService,
              private fb: FormBuilder,
              private router: Router,
              public dialogRef: MatDialogRef<AddNewExamComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private title: Title) {
  }

  ngOnInit(): void {
    this.title.setTitle('Add New Exam');
    this.messageErr = '';
    this.messageErrName = '';
    this.createExam = this.fb.group({
      examName: ['', Validators.required],
      subject: ['', Validators.required]
    });
    this.listExam = this.data.data1;
    this.examService.getAllSubject().subscribe(data => {
      this.subjects = data;
      console.log(data);
    });
  }

  onSubmit() {
    if (this.createExam.value.subject === '') {
      this.messageErr = 'vui lòng chọn môn học';
    } else {
      if (this.checkExamName(this.createExam.value.examName) === false) {
        this.examService.addNewExam(this.createExam.value.examName, this.createExam.value.subject).subscribe(data => {
          this.examService.messageAddSuccess = 'Thêm mới thành công đề thi:  ' + this.createExam.value.examName;
          this.dialogRef.close();
        });
      }
    }
  }

  chosseSubject() {
    this.messageErr = '';
  }

  checkExamName(name: string): boolean {
    this.boolean = false;
    if (this.listExam != null) {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.listExam.length; i++) {
        if (name === this.listExam[i].examName) {
          this.boolean = true;
        }
      }
    }
    return this.boolean;
  }

  duplicateName() {
    this.messageErrName = '';
    if (this.checkExamName(this.createExam.value.examName) === true) {
      this.messageErrName = 'Tên đề thi đã bị trùng, vui lòng đặt tên khác !';
    }
  }
}
