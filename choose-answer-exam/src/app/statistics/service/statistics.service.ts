import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {
  public API_STATISTICS = 'http://localhost:8080/statistics';

  constructor(public http: HttpClient) {
  }

  getStatisticsSumPoint(): Observable<any> {
    return this.http.get(this.API_STATISTICS + '/sum-point');
  }

  getStatisticsCountExamSubject(): Observable<any> {
    return this.http.get(this.API_STATISTICS + '/count-subject');
  }

  getStatisticsResultExamUserBySubject(code: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('codeSubject', code);
    return this.http.get(this.API_STATISTICS + '/search-by-subject', {params});
  }

  getSearch(): Observable<any> {
    return this.http.get(this.API_STATISTICS + '/search-container-subject');
  }
}
