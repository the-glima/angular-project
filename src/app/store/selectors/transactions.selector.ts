import { TransactionState } from '@store/state/transaction.state';

export const getTransactions = (state: TransactionState) => state;

export const getTransactionsLoading = (state: TransactionState) =>
  state.isLoading;

export const getTransactionsLoaded = (state: TransactionState) =>
  state.isLoaded;
