import { ActionReducerMap } from '@ngrx/store';

import * as fromTrasactions from './transaction.reducer';
import { AppState } from '@store/state/state';

export const appReducers: ActionReducerMap<AppState> = {
  transactions: fromTrasactions.reducer
};
