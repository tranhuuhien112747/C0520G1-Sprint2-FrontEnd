import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public API = 'http://localhost:8080/user';
  constructor(public http: HttpClient) {
  }

  getAllUser(): Observable<any> {
    return this.http.get(this.API + '/list');
  }
  addNewUser(user): Observable<any> {
    return this.http.post(this.API + '/create', user);
  }
  getUserById(idUser): Observable<any> {
    return this.http.get(this.API + '/' + idUser);
  }
  editUser(idUser, user): Observable<any> {
    return this.http.put(this.API + '/edit/' + idUser, user);
  }
  deleteUserByID(idUser): Observable<any> {
    return this.http.delete(this.API + '/delete/' + idUser);
  }
}
