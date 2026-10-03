import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Profile } from '../profile/profile';

@Injectable()
export class NotificationsService {

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
   * @function getReminders
   */
  getReminders() {
    return this.http.get('/getreminders');
  }

  /**
   * @function setReminder
   * @param {number} frequency - frequency
   * @param {number} id - friend ID
   * @example
   * {
       date: frequency,
       friend_id: id
     }
   */
  setReminder(frequency: number, id: number): Observable<Object> {
    let id_object = {
      frequency: frequency,
      friend_id: id
    }; //create JSON object
    return this.http.post<Object>('/setreminderfrequency', id_object, this.httpOptions);
  }

  /**
   * @function setReminder
   * @param {number} frequency - frequency
   * @param {number} id - friend ID
   * @example
   * {
       date: frequency,
       friend_id: id
     }
   */
  setLastContact(date: Date, id: number): Observable<Object> {
    let id_object = {
      date: date,
      friend_id: id
    }; //create JSON object
    return this.http.post<Object>('/setlastcontacted', id_object, this.httpOptions);
  }

  /**
   * @function getReminderForAFriend
   * @param {number} id - friend ID
   * @example
   * {
       friend_id: id
     }
   */
  getReminderForAFriend(id: number): Observable<Object> {
    let id_object = {
      friend_id: id
    }; //create JSON object
    return this.http.post<Object>('/upcomingreminderforfriend', id_object, this.httpOptions);
  }

}
