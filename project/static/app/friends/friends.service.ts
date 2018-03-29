import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Circle } from '../circles/circle';

@Injectable()
export class FriendsService {

  constructor (private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  // getAllFriends() {
  //   return this.http.get('/showallfriends/');
  // }

}
