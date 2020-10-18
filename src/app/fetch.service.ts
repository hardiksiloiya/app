import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Details } from './detail'; 
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FetchService {
  private _url: string;
  constructor(private http: HttpClient) { 
    this._url =  'https://cs251-outlab-6.herokuapp.com/initial_values/';
  }
  getdetails(): Observable <Details> {
    
    return this.http.get<Details>(this._url);
  }

  handleError(error: HttpErrorResponse) {
    alert("Unsuccessful. Something went wrong");
    return throwError(
      'Something bad happened; please try again .');
  
  }
 
  postdetails(to_be_posted: Details): Observable <any> {
    const headers = { 'content-type': 'application/json'}
    return this.http.post<Details>(' https://cs251-outlab-6.herokuapp.com/add_new_feedback/',JSON.stringify(to_be_posted),{'headers':headers})
    .pipe(
      
      catchError(this.handleError),

    )
        
  }
}
