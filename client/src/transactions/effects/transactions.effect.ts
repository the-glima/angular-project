import { Injectable } from '@angular/core';

import { Action } from '@ngrx/store';
import { createEffect, ofType, Actions } from '@ngrx/effects';

import { switchMap, map, catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

import { TransactionService } from '@transactions/services/transaction.service';
import { Transaction } from '@shared/models';
import { TransactionActions } from '@transactions/actions/transaction.actions';

@Injectable()
export class TransactionsEffect {
  constructor(
    private actions$: Actions,
    private transactionService: TransactionService
  ) {}

  loadAll$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType<TransactionActions.LoadAll>(TransactionActions.ActionTypes.LoadAll),
    switchMap(action =>
      this.transactionService.getTransactions().pipe(
        map((response: any) => response?.data),
        map((data: Transaction[]) => new TransactionActions.LoadAllSuccess({ transactions: data })),
        catchError(error => of(new TransactionActions.LoadAllFail({ error, action })))
      )
    )
  ));
}
