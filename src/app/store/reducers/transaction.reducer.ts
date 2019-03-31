import { TransactionActions } from '@store/actions/transaction.actions';
import * as fromTrasactions from '@store/state/transaction.state';

export function reducer(
  state = fromTrasactions.initialState,
  action: TransactionActions.ActionsUnion
): fromTrasactions.TransactionState {
  switch (action.type) {
    case TransactionActions.ActionTypes.LoadAll: {
      return {
        ...state,
        isLoading: true
      };
    }

    case TransactionActions.ActionTypes.LoadAllSuccess: {
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        transactions: action.payload
      };
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
