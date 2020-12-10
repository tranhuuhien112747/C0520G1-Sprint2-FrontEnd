import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Question} from '../model/question.class';
import {Subject} from '../model/subject.class';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  public API = 'http://localhost:8080/question';

  public messageDeleteSuccess = '';
  public messageAddSuccess = '';
  public messageUpload = '';
  constructor(private http: HttpClient) {}
  deleteQuestion(id: number): Observable<Question>{
    return this.http.delete<Question>(`${this.API}/delete/${id}`);
  }
  getAllQuestion(): Observable<Question[]>{
    return this.http.get<Question[]>(this.API);
  }
  addNewQuestion(question: Question): Observable<Question> {
    return this.http.post<Question>(`${this.API}/create-question`, question);
  }
  updateQuestion(question: Question): Observable<Question> {
    return this.http.put<Question>(`${this.API}/update-question`, question);
  }
  getQuestionById(id: number): Observable<Question> {
    return this.http.get<Question>(`${this.API}/find/${id}`);
  }
  getAllSubject(): Observable<Subject[]> {
    return this.http.get<Subject[]>(`${this.API}/findAllSubject`);
  }
}
