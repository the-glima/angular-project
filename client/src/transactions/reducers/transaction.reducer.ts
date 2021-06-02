import { ActionReducerMap } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { TransactionActions } from '@transactions/actions/transaction.actions';
import * as Models from '@shared/models';

export interface TransactionState extends EntityState<Models.Transaction> {
  selectedId: string | undefined;
  isLoading: boolean | undefined;
  isLoaded: boolean | undefined;
}

export interface State {
  transactions: TransactionState;
}

export const adapter: EntityAdapter<Models.Transaction> = createEntityAdapter<Models.Transaction>({
  selectId: transaction => transaction.id,
  sortComparer: false
});

export const initialState: TransactionState = adapter.getInitialState({
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
      return adapter.addMany(action.payload.transactions, {
        ...state,
        isLoading: false,
        isLoaded: true
      });
    }

    case TransactionActions.ActionTypes.LoadAllFail: {
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

export const reducers: ActionReducerMap<State, any> = {
  transactions: reducer
};
