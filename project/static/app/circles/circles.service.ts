import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Circle } from './circle';

@Injectable()
export class CirclesService {

  constructor (private http: HttpClient) { }

  circles = [];

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

  // getCircles() {
  //   objects = this.http.get<Object>('/showallcircles', this.httpOptions);
  //   /*
  //       {
  //         id: '',
  //         parentCircle: '',
  //         contacts: [''],
  //       }
  //   */
  //   for obj in objects {
  //     // id = id, parentCircle = parentCircle, etc.
  //     this.circles.push(obj);
  //   }
  //   return this.circles;
  // }

}
