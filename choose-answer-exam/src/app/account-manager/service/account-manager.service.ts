import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountManagerService {

  public API_GET_INFO_BY_ID = 'http://localhost:8080/user/findById';
  public API_UPDATE_INFO_ACCOUNT = 'http://localhost:8080/user/update';
  public API_USER = 'http://localhost:8080/user';
  public API_USER_EXAM = 'http://localhost:8080/user/findExamHistoryById';

  constructor(
    public http: HttpClient
  ) {
  }

  findAccountInfoById(id): Observable<any> {
    return this.http.get(this.API_GET_INFO_BY_ID + '/' + id);
  }
  updateAccountInfo(id, user): Observable<any> {
    return this.http.put(this.API_UPDATE_INFO_ACCOUNT + '/' + id, user);
  }
  changePassword(idUser, password): Observable<any> {
    return this.http.put(this.API_USER + '/' + idUser + '/change-password', password);
  }
  findExamHistoryById(id): Observable<any> {
    return this.http.get(this.API_USER_EXAM + '/' + id);
  }

}
