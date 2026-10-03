import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx'
import { Profile } from './profile/profile';

@Injectable()
export class AppService {

  constructor (private http: HttpClient) { }

  /**
   * @ignore
   */
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  /**
   * @function isLoggedIn
   * Gets /isloggedin
   */
  isLoggedIn() {
    return this.http.get('/isloggedin');
  }

  /**
   * @function login
   * @param {string} email - user inputted email
   * @param {string} password - user inputted password
   *
   * @example
   * {
      username: email,
      password: password
    }
   */
  login (email: string, password: string): Observable<Object> {
    let object = {
      username: email,
      password: password,
    }
    return this.http.post<Object>('/login', object, this.httpOptions);
  }

  /**
   * @function register
   * @param {string} name - user inputted (full) name
   * @param {string} email - user inputted email
   * @param {string} password - user inputted password
   * @param {string} confirmPassword - user inputted password confirmation
   *
   * @example
   * {
       name: name,
       email: email,
       password: password,
       confirmPassword: confirmPassword,
     }
   */
  register (name: string, email: string, password: string, confirmPassword: string): Observable<Object> {
    let object = {
      name: name,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    }
    return this.http.post<Object>('/register', object, this.httpOptions);
  }

}
