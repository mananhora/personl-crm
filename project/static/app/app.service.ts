import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx'

@Injectable()
export class AppService {

  constructor (private http: HttpClient) { }

  // loggedIn: boolean;
  // currentCircle: Circle;

  isLoggedIn() {
    return this.http.get('/isloggedin');
  }

}
