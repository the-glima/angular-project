import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { select, Store } from '@ngrx/store';

import * as fromTransactionsModel from '@shared/models';
import { fadeInOutAnimation } from '@shared/animations';

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
  transactions$!: Observable<fromTransactionsModel.Transaction[]>;
  loadError$!: Observable<any>;

  private onDestroy$ = new Subject();

  get transactions(): Observable<fromTransactionsModel.Transaction[]> {
    return this.store.pipe(select(fromSelectors.selectAllTransactions));
  }

  get isLoading(): Observable<any> {
    return this.store.pipe(select(fromSelectors.selectTransactionsLoading));
  }

  get loadError(): Observable<any> {
    return this.store.pipe(select(fromSelectors.selectTransactionsLoadError));
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
