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
      if (this.userList == null) {
        console.log(data);
      }
      this.sumMember = this.userList.length;
      this.newMember = this.userList[this.userList.length - 1].username;
      if (this.newMember.length > 15) {
        if (this.newMember.includes('@')) {
          this.newMember = this.newMember.slice(0, this.newMember.indexOf('@'));
        }
      }
      console.log(this.newMember);
    });
  }

  openStatisticsDetail() {
    const dialogRef = this.dialog.open(StatisticsDetailDataComponent, {
      panelClass: 'app-full-bleed-dialog',
      width: '1100px',
      height: '490px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.ngOnInit();
    });
  }
}
