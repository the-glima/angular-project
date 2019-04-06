import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromTransactions from '@transactions/reducers';

export const selectState = createFeatureSelector<fromTransactions.State>(
  'transactions'
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = fromTransactions.adapater.getSelectors();

export const selectTransactionState = createSelector(
  selectState,
  state => state.transactions
);

export const selectAllTransactions = createSelector(
  selectTransactionState,
  selectAll
);

export const selectTransactionIds = createSelector(
  selectTransactionState,
  selectIds
);

export const selectTransactionTotal = createSelector(
  selectTransactionState,
  selectTotal
);

export const selectTransactionsLoading = createSelector(
  selectTransactionState,
  state => state.isLoading
);

export const selectTransactionsLoaded = createSelector(
  selectTransactionState,
  state => state.isLoaded
);
