import * as fromTrasactions from './transaction.state';

export interface AppState {
  transactions: fromTrasactions.TransactionState;
}
