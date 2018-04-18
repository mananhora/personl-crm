import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Circle } from './circle';

@Injectable()
export class CirclesService {

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
   * @function getCircles
   * get ALL circles
   */
  getCircles() {
    return this.http.get('/showallcircles/');
  }

  /**
   * @function addCircle
   * @param {string} name - name of circle to add
   * @example
   * {
       circle_name: name,
     }
   */
  addCircle (name: string): Observable<Object> {
    let object = {
      circle_name: name,
    };
    return this.http.post<Object>('/addcircle/', object, this.httpOptions);
  }

  /**
   * @function addFriendToCircle
   * @param {number} friend_id - ID of friend to add
   * @param {number} circle_id - ID of circle to add friend to
   * @example
   * {
       friend_id: friend_id,
       circle_id: circle_id,
     }
   */
  addFriendToCircle (friend_id: number, circle_id: number): Observable<Object> {
    let object = {
      friend_id: friend_id,
      circle_id: circle_id,
    }
    return this.http.post<Object>('/addtocircle/', object, this.httpOptions);
  }

}
