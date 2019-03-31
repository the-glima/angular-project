import { Action } from '@ngrx/store';

export namespace TransactionActions {
  export enum ActionTypes {
    LoadAll = '[Transactions] Load All',
    LoadAllSuccess = '[Transactions] Load All Success',
    LoadAllFaill = '[Transactions] Load All Fail'
  }

  export class LoadAll implements Action {
    readonly type = ActionTypes.LoadAll;
  }

  export class LoadAllSuccess implements Action {
    readonly type = ActionTypes.LoadAllSuccess;

    constructor(public payload: any) {}
  }

  export class LoadAllFaill implements Action {
    readonly type = ActionTypes.LoadAllFaill;

    constructor(public payload: any) {}
  }

  export type ActionsUnion = LoadAll | LoadAllSuccess | LoadAllFaill;
}
