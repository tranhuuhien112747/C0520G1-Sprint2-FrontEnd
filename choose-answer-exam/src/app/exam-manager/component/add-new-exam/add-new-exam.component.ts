import {Component, Inject, OnInit} from '@angular/core';
import {ExamService} from '../../services/exam.service';
import {Subject} from '../../../question-manager/model/subject.class';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-add-new-exam',
  templateUrl: './add-new-exam.component.html',
  styleUrls: ['./add-new-exam.component.css']
})
export class AddNewExamComponent implements OnInit {
  public subjects: Subject[] = [];
  public createExam: FormGroup;
  constructor(private examService: ExamService,
              private fb: FormBuilder,
              private router: Router,
              public dialogRef: MatDialogRef<AddNewExamComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.createExam = this.fb.group({
      examName: ['', Validators.required],
      subject: ['', Validators.required]
    });
    this.examService.getAllSubject().subscribe(data => {
      this.subjects = data;
      console.log(data);
    });
  }

  onSubmit() {
    this.examService.addNewExam(this.createExam.value.examName, this.createExam.value.subject).subscribe(data => {
      this.dialogRef.close();
    });
  }
}
