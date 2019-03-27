import { Transaction } from '@app/shared/models';
import { TransactionActions } from 'store/app.actions';

export interface AppState {
  transaction: Transaction;
  isLoading: boolean;
  isInitialised: boolean;
}

export const initialState: AppState = {
  transaction: undefined,
  isLoading: false,
  isInitialised: false
};

export function transactionsReducer (
  state = initialState,
  action: TransactionActions.ActionsUnion
): AppState {
  switch (action.type) {
    case TransactionActions.ActionTypes.Get: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case TransactionActions.ActionTypes.GetSuccess: {
      return {
        ...state,
        transaction: action.payload.transaction,
      };
    }
 
    default: {
      return state;
    }
  }
}
