import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { apiConfig } from '@app/app.config';
import { Observable, Subject, throwError } from 'rxjs';
import { Transaction } from '@shared/models';

@Injectable()
export class TransactionService {
  getTransactionsURL: string = apiConfig.transaction_api_url;
  fetchTransactions = new Subject<any>();
  updatedTransactions = new Subject<any>();

  constructor(private httpClient: HttpClient) {}

  getTransactions(): Observable<any> {
    return this.httpClient
      .get<Transaction[]>(`${this.getTransactionsURL}`)
      .pipe(catchError((error: any) => throwError(error)));
  }
}
