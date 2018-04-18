import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx'
import { Profile } from './profile/profile';

@Injectable()
export class AppService {

  constructor (private http: HttpClient) { }

  isLoggedIn() {
    return this.http.get('/isloggedin');
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  login (email: string, password: string): Observable<Object> {
    let object = {
      username: email,
      password: password,
    }
    return this.http.post<Object>('/login', object, this.httpOptions);
      // .pipe(
      //   catchError(alert('Errrrror'));
      // );
  }

  register (name: string, email: string, password: string, confirmPassword: string): Observable<Object> {
    let object = {
      name: name,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    }
    return this.http.post<Object>('/register', object, this.httpOptions);
      // .pipe(
      //   catchError(alert('Errrrror'));
      // );
  }

}
