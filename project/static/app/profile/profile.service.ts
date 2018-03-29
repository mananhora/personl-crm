import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Profile } from './profile';

@Injectable()
export class ProfileService {

  constructor (private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  getMyProfile() {
    return this.http.get('/userinfo');
  }

  getFriendProfile(id: number): Observable<Object> {
    let id_object = { friend_id: id }; //create JSON object
    return this.http.post<Object>('/friendinfo/', id_object, this.httpOptions);
  }

  getCirclesForFriend(id: number): Observable<Object> {
    let id_object = { friend_id: id }; //create JSON object
    return this.http.post<Object>('/circlesforfriend/', id_object, this.httpOptions);
  }

}
