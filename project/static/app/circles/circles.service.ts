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
   * @function getChildCircles
   * @param {number} id - get children for this circle ID
   * @example
   * {
     id: id
   }
   */
  getChildCircles (id: number): Observable<Object> {
    let object = {
      id: id
    };
    return this.http.post<Object>('/getchildcircles', object, this.httpOptions);
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

  addChildCircle (parent_id: number, child_id: number) {
    let object = {
      parent_id: parent_id,
      circle_name: child_id,
    };
    return this.http.post<Object>('/addchildcircle/', object, this.httpOptions);
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
