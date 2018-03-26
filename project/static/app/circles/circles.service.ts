import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Circle } from './circle';

@Injectable()
export class CirclesService {

  constructor (private http: HttpClient) { }

  getCircles() {
    return this.http.get('/showallcircles/');
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  getFriends (id: number): Observable<Object> {
    let id_object = { id: id }; // create JSON object
    return this.http.post<Object>('/friendsincircle/', id_object, this.httpOptions);
  }

  addCircle (object: Object): Observable<Object> {
    return this.http.post<Object>('/addcircle/', object, this.httpOptions);
  }

}
