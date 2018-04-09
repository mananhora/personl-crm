import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Circle } from './circle';

@Injectable()
export class CirclesService {

  constructor (private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  getCircles() {
    return this.http.get('/showallcircles/');
  }

  addCircle (name: string): Observable<Object> {
    let object = {
      circle_name: name,
    };
    return this.http.post<Object>('/addcircle/', object, this.httpOptions);
  }

  addFriendToCircle (friend_id: number, circle_id: number): Observable<Object> {
    let object = {
      friend_id: friend_id,
      circle_id: circle_id,
    }
    return this.http.post<Object>('/addtocircle/', object, this.httpOptions);
  }

}
