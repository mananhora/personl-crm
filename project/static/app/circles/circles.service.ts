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
      circle_id: id
     }
   */
  getChildCircles (id: number): Observable<Object> {
    let object = {
      circle_id: id
    };
    return this.http.post<Object>('/getchildcircles', object, this.httpOptions);
  }

  /**
   * @function getCircleInfo
   * @param {number} id - get name for this circle ID
   * @example
   * {
     id: id
   }
   */
  getCircleInfo (id: number): Observable<Object> {
    let object = {
      circle_id: id
    };
    return this.http.post<Object>('/getcircleinfo', object, this.httpOptions);
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
   * @function addChildCircle
   * @param {number} parent_id - parent circle
   * @param {number} child_id - child circle
   * @example
   * {
       parent_id: parent_id,
       child_id: child_id,
     }
   */
  addChildCircle (parent_id: number, child_id: number) {
    let object = {
      parent_id: parent_id,
      circle_name: child_id,
    };
    return this.http.post<Object>('/addchildcircle/', object, this.httpOptions);
  }

  /**
   * @function assignChildCircle
   * @param {number} parent_id - parent circle
   * @param {number} child_id - child circle
   * @example
   * {
       parent_id: parent_id,
       child_id: child_id,
     }
   */
  assignChildCircle (parent_id: number, child_id: number) {
    let object = {
      parent_id: parent_id,
      circle_name: child_id,
    };
    return this.http.post<Object>('/assignchildcircle', object, this.httpOptions);
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

  /**
   * @function removeFriendFromCircle
   * @param {number} friend_id - ID of friend to remove
   * @param {number} circle_id - ID of circle to remove friend from
   * @example
   * {
       friend_id: friend_id,
       circle_id: circle_id,
     }
   */
  removeFriendFromCircle (friend_id: number, circle_id: number): Observable<Object> {
    let object = {
      friend_id: friend_id,
      circle_id: circle_id,
    }
    return this.http.post<Object>('/removefriendfromcircle', object, this.httpOptions);
  }

  /**
   * @function deleteCircle
   * @param {number} id - ID of circle to be deleted
   * @example
   * {
       circle_id: id,
     }
   */
  deleteCircle (id: number): Observable<Object> {
    let object = {
      circle_id: id,
    }
    return this.http.post<Object>('/deletecircle', object, this.httpOptions);
  }

}
