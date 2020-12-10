import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Question} from '../model/model.question';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ImportQuizService {
  private uploadFile = 'http://localhost:8080/upload';
  private saveFile = 'http://localhost:8080/saveFile';

  constructor(
    private httpClient: HttpClient,
    private router: Router,
  ) {
  }

  getAll(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this.httpClient.post<any>(this.uploadFile, formData, {
      reportProgress: true,
      responseType: 'json'
    });
  }

  // upload(file: File): Observable<HttpEvent<any>> {
  //   const formData: FormData = new FormData();
  //   formData.append('file', file);
  //   return this.httpClient.post<HttpEvent<any>>(this.saveFile, formData, {
  //     reportProgress: true,
  //     responseType: 'json'
  //   });
  // }

  upload(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    return this.httpClient.post<any>(this.saveFile, formData, {
      reportProgress: true,
      responseType: 'json'
    });
  }
}
