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
  public takenDurationDisplaySV = '';
  public subjectNameSV = '';

  public RESULT_EXAM_API = 'http://localhost:8080/resultExam';

  constructor(private http: HttpClient) { }

  // display list of exams (each exam has list of questions)
  getExamListBySubject(subject: string): Observable<Exam[]>{
    return this.http.get<Exam[]>(this.RESULT_EXAM_API + '/list-exam-by-subject/' + subject);
  }

  // get each exam (for taking exam)
  getExamById(id: number): Observable<any> {
    return this.http.get<Exam>(this.RESULT_EXAM_API + '/exam-by-id/' + id);
  }

  // save result of exam after taking an exam
  saveResultExam(result): Observable<any>{
    console.log('result-exam sent to service:');
    console.log(result);
    return this.http.post(this.RESULT_EXAM_API + '/create', result);
  }

  // display result of exam taken before
  getResultExamById(id: number): Observable<any> {
    return this.http.get<Exam>(this.RESULT_EXAM_API + '/' + id);
  }

  // display list of result-exams
  getResultExams(): Observable<any> {
    return this.http.get(this.RESULT_EXAM_API + '/list');
  }
}
