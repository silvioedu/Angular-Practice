const apiUrl = "https://jsonplaceholder.typicode.com/photos";

import { Injectable } from '@angular/core';

import { from, Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Photos } from './photos';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }
  
  getPhotos (): Observable<Photos[]> {
    return this.http.get<Photos[]>(apiUrl).pipe(
      tap(todos => console.log('Fetch todos')),
      catchError(this.handleError('getPhotos', []))
    );
  }
}

