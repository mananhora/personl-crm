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

  circleA = new Circle('Chuck Overstreet');
  circleB = new Circle('Nobody Anybody', ['Mary', 'Susan']);

  getCircles() {
    return [this.circleA, this.circleB];
  }

}
