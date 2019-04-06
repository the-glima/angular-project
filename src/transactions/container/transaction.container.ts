import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { select, Store } from '@ngrx/store';

import * as fromTransactionsModel from '@common/models';
import { fadeInOutAnimation } from '@common/animations';

import * as fromSelectors from '@transactions/selectors/transaction.selectors';
import * as fromActions from '@transactions/actions';
import * as fromReducers from '@transactions/reducers';

@Component({
  selector: 'app-transactions',
  templateUrl: './transaction.container.html',
  styleUrls: ['./transaction.container.scss'],
  animations: [fadeInOutAnimation]
})
export class TransactionContainerComponent implements OnInit, OnDestroy {
  transactions$: Observable<fromTransactionsModel.Transaction[]>;

  private onDestroy$ = new Subject();

  get transactions(): Observable<fromTransactionsModel.Transaction[]> {
    return this.store.pipe(select(fromSelectors.selectAllTransactions));
  }

  get isLoading(): Observable<boolean> {
    return this.store.pipe(select(fromSelectors.selectTransactionsLoading));
  }

  constructor(private store: Store<fromReducers.TransactionState>) {}

  ngOnInit() {
    this.store.dispatch(new fromActions.TransactionActions.LoadAll());
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.store.dispatch(new fromActions.TransactionActions.Reset());
  }
}
