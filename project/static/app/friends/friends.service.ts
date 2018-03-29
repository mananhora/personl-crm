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

  getAllFriends() {
    return this.http.get('/showallfriends/');
  }

  getFriends (id: number): Observable<Object> {
    let id_object = { id: id }; // create JSON object
    return this.http.post<Object>('/friendsincircle/', id_object, this.httpOptions);
  }

  addFriend (object: Object): Observable<Object> {
    return this.http.post<Object>('/addfriend/', object, this.httpOptions);
  }

}
