import { createFeatureSelector, createSelector } from '@ngrx/store';
import { getSelectors, RouterReducerState } from '@ngrx/router-store';

import * as fromTransactions from '@transactions/reducers';

export const selectState = createFeatureSelector<fromTransactions.State>(
  'transactions'
);

export const selectRouter = createFeatureSelector<RouterReducerState>('router');
 
export const {
  selectCurrentRoute, // select the current route
  selectFragment, // select the current route fragment
  selectQueryParams, // select the current route query params
  selectQueryParam, // factory function to select a query param
  selectRouteParams, // select the current route params
  selectRouteParam, // factory function to select a route param
  selectRouteData, // select the current route data
  selectUrl, // select the current url
} = getSelectors(selectRouter);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = fromTransactions.adapter.getSelectors();

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
