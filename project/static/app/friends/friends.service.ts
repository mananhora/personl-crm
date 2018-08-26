import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Circle } from '../circles/circle';

@Injectable()
export class FriendsService {

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
   * @function getAllFriends
   * get ALL friends
   */
  getAllFriends() {
    return this.http.get('/showallfriends/');
  }

  /**
   * @function getFriends
   * @param {number} id - get friends for this circle ID
   * @example
   * {
     id: id
   }
   */
  getFriends (id: number): Observable<Object> {
    let object = {
      id: id
    };
    return this.http.post<Object>('/friendsincircle/', object, this.httpOptions);
  }

  /**
   * @function addFriend
   * @param {string} name - friend's (full) name
   * @param {string} email - friend's email
   * @param {Circle[]} circles - circles to add friend to
   * @example
   * {
       name: name,
       email: email,
       addToCircle: addToCircle,
       circles: backendCircles,
     }
   */
  addFriend (name: string, email: string, circles: Circle[]): Observable<Object> {
    let addToCircle = 0;
    let backendCircles = [];
    if (circles) {
      addToCircle = 1;
      for (let i = 0; i < circles.length; i++) {
        backendCircles.push(circles[i].id);
      }
    }
    let object = {
      name: name,
      email: email,
      addToCircle: addToCircle,
      circles: backendCircles,
    };
    return this.http.post<Object>('/addfriend/', object, this.httpOptions);
  }

  /**
   * @function addToCircle
   * @param {string} circle
   * @example
   * {
       circle_name: circle,
     }
   */
  addToCircle (circle: string): Observable<Object> {
    let object = {
      circle_name: circle,
    }
    return this.http.post<Object>('/addtocircle/', object, this.httpOptions);
  }

  /**
   * @function searchFriend
   * @param {string} keyword

   */

  searchFriends (keyword: string): Observable<Object>{
  let object = {
    keyword: keyword,
  }
   return this.http.post<Object>('/searchbykeyword', object, this.httpOptions);
  }

}
