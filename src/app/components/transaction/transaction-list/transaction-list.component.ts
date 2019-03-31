import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import { AppState } from '@app/store/state/state';

import { Transaction } from '@app/shared/models';
import { fadeInOutAnimation } from '@app/shared/animations';
import * as fromSelectors from '@store/selectors/selectors';
import * as fromActions from '@store/actions';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss'],
  animations: [fadeInOutAnimation]
})
export class TransactionListComponent implements OnInit, OnDestroy {
  transactions$: Observable<any>;
  isLoading$: Observable<any>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.transactions$ = this.store.select(fromSelectors.selectAllTransactions);
    this.isLoading$ = this.store.select(
      fromSelectors.selectTransactionsLoading
    );
    this.store.dispatch(new fromActions.TransactionActions.LoadAll());
  }

  ngOnDestroy() {}
}
