import { Action } from '@ngrx/store';
import { Transaction } from '@common/models';

export namespace TransactionActions {
  export enum ActionTypes {
    LoadAll = '[Transactions] Load All',
    LoadAllSuccess = '[Transactions] Load All Success',
    LoadAllFaill = '[Transactions] Load All Fail',
    Reset = '[Transactions] Reset'
  }

  export class LoadAll implements Action {
    readonly type = ActionTypes.LoadAll;
  }

  export class LoadAllSuccess implements Action {
    readonly type = ActionTypes.LoadAllSuccess;

    constructor(public payload: { transactions: Transaction[] }) {}
  }

  export class LoadAllFaill implements Action {
    readonly type = ActionTypes.LoadAllFaill;

    constructor(public payload: { error: any; action: Action }) {}
  }

  export class Reset implements Action {
    readonly type = ActionTypes.Reset;
  }

  export type ActionsUnion = LoadAll | LoadAllSuccess | LoadAllFaill | Reset;
}
