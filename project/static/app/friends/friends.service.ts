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
    let object = {
      id: id
    };
    return this.http.post<Object>('/friendsincircle/', object, this.httpOptions);
  }

  addFriend (name: string, email: string, location: string): Observable<Object> {
    let object = {
      name: name,
      email: email,
      location: location,
    };
    return this.http.post<Object>('/addfriend/', object, this.httpOptions);
  }

  addToCircle (circle: string): Observable<Object> {
    let object = {
      circle_name: circle,
    }
    return this.http.post<Object>('/addtocircle/', object, this.httpOptions);
  }

}
