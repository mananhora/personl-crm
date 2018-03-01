import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class LoginService {

  constructor (private http: HttpClient) { }

  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  submitForm (object: Object): Observable<Object> {
    return this.http.post<Object>('/api/login', object, this.httpOptions);
      // .pipe(
      //   catchError(alert('Errrrror'));
      // );
  }

}
