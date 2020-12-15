import {Component, OnInit} from '@angular/core';
import {AccountManagerService} from '../../service/account-manager.service';
import {TokenStorageService} from '../../../page-common/service/token-storage/token-storage.service';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-exam-history',
  templateUrl: './exam-history.component.html',
  styleUrls: ['./exam-history.component.css']
})
export class ExamHistoryComponent implements OnInit {
  public idToFind: number;
  public isLoggedIn = false;
  public num = 0;
  public avg = 0;
  public examHistory: any[];
  p: any;

  constructor(
    private accountManagerService: AccountManagerService,
    private tokenStorage: TokenStorageService,
    private title: Title
  ) {
  }

  ngOnInit(): void {
    this.title.setTitle('Exam History');
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.idToFind = this.tokenStorage.getUser().id;
      console.log(this.idToFind);
    }
    this.accountManagerService.findExamHistoryById(this.idToFind).subscribe(data => {
      this.examHistory = data;
      console.log('data');
      console.log(data);
    }, error => {
      console.log('error');
    }, () => {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.examHistory.length; i++) {
        this.num += Number(this.examHistory[i].mark);
      }
      this.avg = this.num / this.examHistory.length;
    });
  }
}
