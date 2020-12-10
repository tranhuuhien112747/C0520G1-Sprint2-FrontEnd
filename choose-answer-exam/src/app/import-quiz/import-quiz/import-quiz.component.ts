import {Component, OnInit} from '@angular/core';
import {ImportQuizService} from '../service/import-quiz.service';
import {Router} from '@angular/router';
import {QuestionService} from '../../question-manager/services/question.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './import-quiz.component.html',
  styleUrls: ['./import-quiz.component.css']
})
export class ImportQuizComponent implements OnInit {

  public questionList;
  public number = 0;

  selectedFiles: FileList;
  currentFile: File;
  message = '';
  p = 0;

  constructor(
    private importQuizService: ImportQuizService,
    private router: Router,
    private questionService: QuestionService
  ) {
  }

  ngOnInit(): void {
  }

  saveFile() {
    this.currentFile = this.selectedFiles.item(0);
    this.importQuizService.upload(this.currentFile).subscribe(data => {
        console.log(data);
        this.message = data.message;
        this.questionService.messageUpload = this.message;
        this.router.navigate(['question-list']);
      },
      error => {
        this.message = ' Không thể lưu câu hỏi';
        this.currentFile = undefined;
      });

    this.selectedFiles = undefined;
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  viewFile() {
    this.number = 1;
    this.currentFile = this.selectedFiles.item(0);
    this.importQuizService.getAll(this.currentFile).subscribe(data => {
        console.log(data);
        this.questionList = data;
      },
      error => {
        this.message = error.error.message;
        setTimeout(() => {
          this.message = '';
        }, 2000);
      });
  }
}
