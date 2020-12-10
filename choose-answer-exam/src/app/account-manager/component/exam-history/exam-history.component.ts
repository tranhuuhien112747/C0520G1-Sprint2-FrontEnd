import {Component, OnInit} from '@angular/core';
import {AccountManagerService} from '../../service/account-manager.service';

@Component({
  selector: 'app-exam-history',
  templateUrl: './exam-history.component.html',
  styleUrls: ['./exam-history.component.css']
})
export class ExamHistoryComponent implements OnInit {
  public id = 1;
  public num = 0;
  public avg = 0;
  public examHistory: any[];
  p: any;

  constructor(
    private accountManagerService: AccountManagerService,
  ) {
  }

  ngOnInit(): void {
    this.accountManagerService.findExamHistoryById(this.id).subscribe(data => {
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
