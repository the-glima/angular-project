import { ActionReducerMap } from '@ngrx/store';
import { EntityState, createEntityAdapter } from '@ngrx/entity';

import { TransactionActions } from '@transactions/actions/transaction.actions';
import * as Models from '@common/models';

export interface TransactionState extends EntityState<Models.Transaction> {
  selectedId: string;
  isLoading: boolean;
  isLoaded: boolean;
}

export interface State {
  transactions: TransactionState;
}

export const adapater = createEntityAdapter<Models.Transaction>({
  selectId: transaction => transaction.id,
  sortComparer: false
});

export const initialState: TransactionState = adapater.getInitialState({
  selectedId: undefined,
  isLoading: undefined,
  isLoaded: undefined
});

export function reducer(
  state: TransactionState = initialState,
  action: TransactionActions.ActionsUnion
): TransactionState {
  switch (action.type) {
    case TransactionActions.ActionTypes.LoadAll: {
      return {
        ...state,
        isLoading: true
      };
    }

    case TransactionActions.ActionTypes.LoadAllSuccess: {
      return adapater.addAll(action.payload.transactions, {
        ...state,
        isLoading: false,
        isLoaded: true
      });
    }

    case TransactionActions.ActionTypes.LoadAllFaill: {
      return {
        ...state,
        isLoading: true,
        isLoaded: false
      };
    }

    default: {
      return state;
    }
  }
}

export const reducers: ActionReducerMap<State> = {
  transactions: reducer
};
