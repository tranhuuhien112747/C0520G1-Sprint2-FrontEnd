import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Question} from '../model/question.class';
import {Subject} from '../model/subject.class';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Exam} from '../model/exam.class';

@Injectable({
  providedIn: 'root'
})
export class ExamService {
  public API = 'http://localhost:8080/exam';

  public message: string;
  constructor(private http: HttpClient) {}
  deleteExam(id: number): Observable<Exam>{
    return this.http.delete<Exam>(`${this.API}/deleteExam/${id}`);
  }
  getAllExam(): Observable<Exam[]>{
    return this.http.get<Exam[]>(this.API);
  }
  addNewExam(examName: string, subject: string): Observable<Exam> {
    let params = new HttpParams();
    params = params.append('examName', examName);
    params = params.append('subject', subject);
    return this.http.get<Exam>(`${this.API}/create-exam`, {params});
  }
  getExamById(id: number): Observable<Exam> {
    return this.http.get<Exam>(`${this.API}/findExam/${id}`);
  }
  getAllSubject(): Observable<Subject[]> {
    return this.http.get<Subject[]>(`http://localhost:8080/question/findAllSubject`);
  }
}
