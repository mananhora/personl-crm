import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs/Rx'

@Injectable()
export class AppService {

  name = 'Tarin';

  getName(): string {
    return this.name;
  }

  myUrl: string = '/api/myurl/';
  headers: HttpHeaders = new HttpHeaders().set('Content-Type','application/json');

  constructor(private http: HttpClient) { }

  getData(): Observable<String> {
    return this.http.get(this.myUrl, { headers: this.headers });
  }

}
