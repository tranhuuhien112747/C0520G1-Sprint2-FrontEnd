import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Exam} from '../../exam-manager/model/exam.class';

@Injectable({
  providedIn: 'root'
})
export class ResultExamService {
  public answerListSV = [];
  public questionListSV = [];
  public markSV = 0;
  public examIdSV = 0;
  public examNameSV = '';
  public trueQuantitySV = 0;
  public questionQuantitySV = 0;
  public takenDurationSV = 0;
  public subjectNameSV = '';

  public RESULT_EXAM_API = 'http://localhost:8080/resultExam';

  constructor(private http: HttpClient) { }

  getExamListBySubject(subject: string): Observable<Exam[]>{
    return this.http.get<Exam[]>(this.RESULT_EXAM_API + '/list-exam-by-subject/' + subject);
  }

  getExamById(id: number): Observable<any> {
    return this.http.get<Exam>(this.RESULT_EXAM_API + '/exam-by-id/' + id);
  }

  saveResultExam(result): Observable<any>{
    console.log('result-exam sent to service:');
    console.log(result);
    return this.http.post(this.RESULT_EXAM_API + '/create', result);
  }

  getResultExamById(id: number): Observable<any> {
    return this.http.get<Exam>(this.RESULT_EXAM_API + '/' + id);
  }

  getResultExams(): Observable<any> {
    return this.http.get(this.RESULT_EXAM_API + '/list');
  }
}
