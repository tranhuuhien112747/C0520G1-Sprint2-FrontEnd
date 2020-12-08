import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
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
}
