import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http'
// import { Observable } from 'rxjs/Rx'

@Injectable()
export class AppService {

  name = 'Tarin';

  getName(): string {
    return this.name;
  }

  // private handleError(error: HttpErrorResponse) {
  //   if (error.error instanceof ErrorEvent) {
  //     // A client-side or network error occurred. Handle it accordingly.
  //     console.error('An error occurred:', error.error.message);
  //   } else {
  //     // The backend returned an unsuccessful response code.
  //     // The response body may contain clues as to what went wrong,
  //     console.error(
  //       `Backend returned code ${error.status}, ` +
  //       `body was: ${error.error}`);
  //   }
  //   // return an ErrorObservable with a user-facing error message
  //   return new ErrorObservable(
  //     'Something bad happened; please try again later.');
  // };

}
