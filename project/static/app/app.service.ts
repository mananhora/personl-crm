import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx'
import { Profile } from './profile/profile';

@Injectable()
export class AppService {

  constructor (private http: HttpClient) { }

  // loggedIn: boolean;
  // currentCircle: Circle;
  currentProfileID: number;

  isLoggedIn() {
    return this.http.get('/isloggedin');
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  login (username: string, password: string): Observable<Object> {
    let object = {
      username: username,
      password: password,
    }
    return this.http.post<Object>('/login', object, this.httpOptions);
      // .pipe(
      //   catchError(alert('Errrrror'));
      // );
  }

  register (object: Object): Observable<Object> {
    return this.http.post<Object>('/register', object, this.httpOptions);
      // .pipe(
      //   catchError(alert('Errrrror'));
      // );
  }

}
