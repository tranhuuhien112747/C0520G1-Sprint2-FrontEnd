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

  public messageAddSuccess = '';
  public messageDeleteSuccess = '';
  public messageDeleteQuestionSuccess = '';
  public messageAddQuestionSuccess = '';
  constructor(private http: HttpClient) {}
  deleteExam(idExams: string): Observable<Exam>{
    let params = new HttpParams();
    params = params.append('idExams', idExams);
    return this.http.delete<Exam>(`${this.API}/deleteExam`, {params});
  }
  deleteQuestionInExam(idQuestions: string): Observable<Question>{
    let params = new HttpParams();
    params = params.append('idQuestions', idQuestions);
    return this.http.delete<Question>(`${this.API}/deleteQuestionInExam`, {params});
  }
  addQuestionInExam(idQuestions: string): Observable<Question>{
    let params = new HttpParams();
    params = params.append('idQuestions', idQuestions);
    return this.http.get<Question>(`${this.API}/addQuestionInExam`, {params});
  }
  getAllExam(): Observable<Exam[]>{
    return this.http.get<Exam[]>(this.API);
  }
  getAllExamByName(valueName: string): Observable<Exam[]>{
    let params = new HttpParams();
    params = params.append('valueName', valueName);
    return this.http.get<Exam[]>(`${this.API}/allExamByName`, {params});
  }
  getAllQuestion(idExam: string): Observable<Question[]>{
    let params = new HttpParams();
    params = params.append('idExam', idExam);
    return this.http.get<Question[]>(`${this.API}/allQuestion`, {params});
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
