import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { apiConfig } from '@app/app.config';
import { Observable, throwError } from 'rxjs';
import { Transaction } from '../models';

@Injectable()
export class TransactionService {
  getTransactionsURL: string = apiConfig.transaction_api_url;

  constructor(private httpClient: HttpClient) {}

  getTranscations(): Observable<any> {
    return this.httpClient
      .get<Transaction[]>(`${this.getTransactionsURL}`)
      .pipe(catchError((error: any) => throwError(new Error(error))));
  }
}
