import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Campaign } from '../models/campaign';
import { MessageService } from '../../../messages/shared/message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CampaignService {
  private campaignUrl = 'http://localhost:5001/api/campaign'; // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  /** GET campaigns from the server */
  getCampaigns(): Observable<Campaign[]> {
    return this.http
      .get<Campaign[]>(this.campaignUrl)
      .pipe(
        tap(c => this.log('fetched campaigns {' + c.length + '}')),
        catchError(this.handleError('getCampaigns', []))
      );
  }

  /** GET campaign by id. Return 'undefined' when id not found */
  getCampaignNo404(id: number): Observable<Campaign> {
    const url = this.campaignUrl + '/' + id;
    return this.http.get<Campaign[]>(url).pipe(
      map(campaigns => campaigns[0]), // returns a {0|1} element array
      tap(h => {
        const outcome = h ? 'fetched' : 'did not find';
        this.log(outcome + ' campaign id=${id}');
      }),
      catchError(this.handleError<Campaign>('getCampaign id=${id}'))
    );
  }

  /** GET campaign by id. Will 404 if id not found */
  getCampaign(id: number): Observable<Campaign> {
    const url = this.campaignUrl + '/' + id;
    const campaign: Observable<Campaign> = this.http
      .get<Campaign>(url)
      .pipe(
        tap(_ => this.log('fetched campaign id=${id}')),
        catchError(this.handleError<Campaign>('getCampaign id=${id}'))
      );
    return campaign;
  }

  /* GET campaigns whose name contains search term */
  searchCampaignes(term: string): Observable<Campaign[]> {
    if (!term.trim()) {
      // if not search term, return empty campaign array.
      return of([]);
    }
    return this.http
      .get<Campaign[]>('api/campaigns/?name=${term}')
      .pipe(
        tap(_ => this.log('found campaigns matching "${term}"')),
        catchError(this.handleError<Campaign[]>('searchCampaignes', []))
      );
  }

  //////// Save methods //////////

  /** POST: add a new campaign to the server */
  addCampaign(campaign: Campaign): Observable<Campaign> {
    return this.http
      .post<Campaign>(this.campaignUrl, campaign, httpOptions)
      .pipe(
        tap((c: Campaign) => this.log('added campaign w/ id=' + c.id)),
        catchError(this.handleError<Campaign>('addCampaign'))
      );
  }

  /** DELETE: delete the campaign from the server */
  deleteCampaign(campaign: Campaign | number): Observable<Campaign> {
    const id = typeof campaign === 'number' ? campaign : campaign.id;
    const url = this.campaignUrl + '/' + id;

    return this.http
      .delete<Campaign>(url, httpOptions)
      .pipe(
        tap(_ => this.log('deleted campaign id=${id}')),
        catchError(this.handleError<Campaign>('deleteCampaign'))
      );
  }

  /** PUT: update the campaign on the server */
  updateCampaign(campaign: Campaign): Observable<any> {
    return this.http
      .put(this.campaignUrl, campaign, httpOptions)
      .pipe(
        tap(_ => this.log('updated campaign id=${campaign.id}')),
        catchError(this.handleError<any>('updateCampaign'))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: Error): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(operation + ' failed: ' + error.name + ' | ' + error.message);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a CampaignService message with the MessageService */
  private log(message: string) {
    this.messageService.add('CampaignService: ' + message);
  }
}
