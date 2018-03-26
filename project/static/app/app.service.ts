import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx'

@Injectable()
export class AppService {

  constructor (private http: HttpClient) { }

  isLoggedIn() {
    return this.http.get('/isloggedin');
  }

}
