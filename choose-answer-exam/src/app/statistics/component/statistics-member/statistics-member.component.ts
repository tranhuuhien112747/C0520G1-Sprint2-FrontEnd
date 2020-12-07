import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../user-manager/service/user.service';
import {StatisticsDetailDataComponent} from '../statistics-detail-data/statistics-detail-data.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-statistics-member',
  templateUrl: './statistics-member.component.html',
  styleUrls: ['./statistics-member.component.css']
})
export class StatisticsMemberComponent implements OnInit {
  public userList = [];
  public sumMember: number;
  public newMember: string;

  constructor(
    public userService: UserService,
    public dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    this.userService.getAllUser().subscribe(data => {
      this.userList = data;
      console.log(this.userList);
      this.sumMember = this.userList.length;
      this.newMember = this.userList[this.userList.length - 1].userName;
      console.log(this.sumMember);
      console.log(this.newMember);
    });
  }

  openStatisticsDetail() {
    const dialogRef = this.dialog.open(StatisticsDetailDataComponent, {
      width: '1000px',
      height: '530px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.ngOnInit();
    });
  }
}
