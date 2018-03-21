import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Profile } from './profile';

@Injectable()
export class ProfileService {

  constructor (private http: HttpClient) { }

  getMyProfile() {
    return this.http.get('/userinfo');
  }

}
