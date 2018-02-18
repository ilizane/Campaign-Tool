import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, tap } from 'rxjs/operators';
// import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from '../../messages/shared/message.service';

import { Place } from '../shared/place.model';


@Injectable()
export class PlacesService {

  private placesUrl = 'http://localhost:59672/api/values';  // URL to web api


  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

getPlaces(): Observable<Place[]> {
  return this.http.get<Place[]>(this.placesUrl)
  .pipe(
    tap(places => this.log(`fetched ` + places)),
    catchError(this.handleError('getPlaces', [])));

}
private log(message: string) {
  this.messageService.add('PlacesService: ' + message);
}
/** GET place by id. Will 404 if id not found */
getHero(id: number): Observable<Place> {
  const url = `${this.placesUrl}/${id}`;
  return this.http.get<Place>(url).pipe(
    tap(_ => this.log(`fetched place id=${id}`)),
    catchError(this.handleError<Place>(`getPlace id=${id}`))
  );
}
/**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
}
