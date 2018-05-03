import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Profile } from './profile';

@Injectable()
export class ProfileService {

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
   * @function getMyProfile
   * gets profile info for logged in user
   */
  getMyProfile() {
    return this.http.get('/userinfo');
  }

  /**
   * @function getFriendProfile
   * @param {number} id - friend ID
   * @example
   * {
       friend_id: id
     }
   */
  getFriendProfile(id: number): Observable<Object> {
    let id_object = { friend_id: id }; //create JSON object
    return this.http.post<Object>('/friendinfo/', id_object, this.httpOptions);
  }

  /**
   * @function getCirclesForFriend
   * @param {number} id - friend ID
   * @example
   * {
      friend_id: id
    }
   */
  getCirclesForFriend(id: number): Observable<Object> {
    let id_object = { friend_id: id }; //create JSON object
    return this.http.post<Object>('/circlesforfriend/', id_object, this.httpOptions);
  }

  /**
   * @function addNote
   * @param {string} note - new note
   * @example
   * {
       friend_id: id,
       note: note
     }
   */
  addNote(id: number, note: string): Observable<Object> {
    let id_object = { friend_id: id, note: note }; //create JSON object
    return this.http.post<Object>('/addnote', id_object, this.httpOptions);
  }

  /**
   * @function updateProfile
   * @param {number} id - ID of profile being edited
   * @param {string} [location=''] - new location value
   * @param {string} [notes=''] - new notes value
   * @param {string} [phone=''] - new phone value
   * @param {string} [job=''] - new job value
   * @example
   * {
       friend_id: id,
       location: location,
       notes: notes,
       phone_number: phone,
       job: job
     }
   */
  updateProfile(id: number, location: string, notes: string, phone: string, job: string): Observable<Object> {
    let id_object = {
      friend_id: id,
      location: location,
      notes: notes,
      phone_number: phone,
      job: job
    };
    return this.http.post<Object>('/updatefriendinfo', id_object, this.httpOptions);
  }

}
