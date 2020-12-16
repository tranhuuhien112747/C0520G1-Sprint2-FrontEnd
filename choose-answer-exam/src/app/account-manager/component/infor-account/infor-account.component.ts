import {Component, OnInit} from '@angular/core';
import {AccountManagerService} from '../../service/account-manager.service';
import {TokenStorageService} from '../../../page-common/service/token-storage/token-storage.service';
import {Title} from '@angular/platform-browser';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-infor-account',
  templateUrl: './infor-account.component.html',
  styleUrls: ['./infor-account.component.css']
})
export class InforAccountComponent implements OnInit {

  public id;
  public accountInfo: any;
  private isLoggedIn = false;
  public formEditImage: FormGroup;

  constructor(
    private accountManagerService: AccountManagerService,
    private tokenStorage: TokenStorageService,
    private title: Title,
    private formBuilder: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.title.setTitle('Information Account');
    this.formEditImage = this.formBuilder.group({
      image: ['']
    });
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.id = this.tokenStorage.getUser().id;
    }
    this.accountManagerService.findAccountInfoById(this.id).subscribe(data => {
      this.accountInfo = data;
      this.accountInfo.image = this.accountInfo.image.substring(11);
      console.log(data);
    }, error => console.log('error'));
  }

  updateImage() {
    console.log(this.formEditImage.value);
    this.accountManagerService.updateAccountImage(this.id, this.formEditImage.value).subscribe(data => {
      this.ngOnInit();
    });
  }
}
