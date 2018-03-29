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

}
