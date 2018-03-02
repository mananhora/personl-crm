import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class CirclesService {

  constructor (private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  getCircles() {
    return this.http.get('/circles');
      // .pipe(
      //   catchError(alert('Errrrror'));
      // );
  }

}
