import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AppState } from '@store/state/state';
import * as fromTrasactionsSelectors from './transactions.selector';

export const getAppState = createFeatureSelector<AppState>('transactions');

export const selectTransactionState = createSelector(
  getAppState,
  (state: AppState) => state.transactions
);

export const selectAllTransactions = createSelector(
  selectTransactionState,
  fromTrasactionsSelectors.getTransactions
);

export const selectTransactionsLoading = createSelector(
  selectTransactionState,
  fromTrasactionsSelectors.getTransactionsLoading
);

export const selectTransactionsLoaded = createSelector(
  selectTransactionState,
  fromTrasactionsSelectors.getTransactionsLoaded
);
