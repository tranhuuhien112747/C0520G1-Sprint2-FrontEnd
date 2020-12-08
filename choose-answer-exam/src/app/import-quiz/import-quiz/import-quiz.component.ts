import {Component, OnInit} from '@angular/core';
import {ImportQuizService} from '../service/import-quiz.service';
import {Observable} from 'rxjs';

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
  fileInfos: Observable<any>;
  message = '';
  p: any;

  constructor(private importQuizService: ImportQuizService) {
  }

  ngOnInit(): void {
  }

  saveFile() {
    this.currentFile = this.selectedFiles.item(0);
    this.importQuizService.upload(this.currentFile).subscribe(
      event => {
        this.message = 'OK';
      },
      err => {
        this.message = 'Could not upload the file!';
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
    });
  }
}
