import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';

import { TransactionActions } from '@store/actions/transaction.actions';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { TransactionService } from '@app/shared/services';
import { of, Observable } from 'rxjs';

@Injectable()
export class TransactionsEffect {
  constructor(
    private actions$: Actions,
    private transactionService: TransactionService
  ) {}

  @Effect()
  loadAllTransactions$: Observable<any> = this.actions$.pipe(
    ofType(TransactionActions.ActionTypes.LoadAll),
    switchMap(() => {
      return this.transactionService.getTranscations().pipe(
        map(
          transactions => new TransactionActions.LoadAllSuccess(transactions)
        ),
        catchError(error => of(new TransactionActions.LoadAllFaill(error)))
      );
    })
  );
}
