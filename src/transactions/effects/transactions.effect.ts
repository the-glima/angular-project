import { Injectable } from '@angular/core';

import { Action } from '@ngrx/store';
import { Effect, ofType, Actions } from '@ngrx/effects';

import { switchMap, map, catchError, delay } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

import { TransactionService } from '@transactions/services/transaction.service';
import { TransactionResponse } from '@common/models';
import { TransactionActions } from '@transactions/actions/transaction.actions';

@Injectable()
export class TransactionsEffect {
  constructor(
    private actions$: Actions,
    private transactionService: TransactionService
  ) {}

  @Effect()
  loadAll$: Observable<Action> = this.actions$.pipe(
    ofType<TransactionActions.LoadAll>(TransactionActions.ActionTypes.LoadAll),
    switchMap(action =>
      this.transactionService.getTranscations().pipe(
        map(
          (response: TransactionResponse) =>
            new TransactionActions.LoadAllSuccess({
              transactions: response.data
            })
        ),
        catchError(error =>
          of(new TransactionActions.LoadAllFaill({ error, action }))
        )
      )
    )
  );
}
