import { Action } from '@ngrx/store';
import { Transaction } from '@app/shared/models';

export namespace TransactionActions {

  export enum ActionTypes {
    Create = '[Transactions] Create',
    CreateSuccess = '[Transactions] Create Success',
    CreateFail = '[Transactions] Create Fail',
    Delete = '[Transactions] Delete',
    DeleteSuccess = '[Transactions] Delete Success',
    DeleteFail = '[Transactions] Delete Fail',
    Get = '[Transactions] Get',
    GetFail = '[Transactions] Get Fail',
    GetSuccess = '[Transactions] Get Success'
  }

  export class Create implements Action {
    readonly type = ActionTypes.Create;

    constructor(public payload: { transaction: Transaction }) {}
  }

  export class CreateSuccess implements Action {
    readonly type = ActionTypes.CreateSuccess;

    constructor(public payload: { transaction: Transaction }) {}
  }

  export class CreateFail implements Action {
    readonly type = ActionTypes.CreateFail;

    constructor(public payload: { error: any, action: Action }) {}
  }

  export class Delete implements Action {
    readonly type = ActionTypes.Delete;

    constructor(public payload: { transaction: Transaction }) {}
  }

  export class DeleteSuccess implements Action {
    readonly type = ActionTypes.DeleteSuccess;

    constructor(public payload: { transaction: Transaction }) {}
  }

  export class DeleteFail implements Action {
    readonly type = ActionTypes.DeleteFail;

    constructor(public payload: { error: any, action: Action }) {}
  }

  export class Get implements Action {
    readonly type = ActionTypes.Get;

    constructor(public payload: { transactionID: string }) {}
  }

  export class GetSuccess implements Action {
    readonly type = ActionTypes.GetSuccess;

    constructor(public payload: { transaction: Transaction }) {}
  }

  export class GetFail implements Action {
    readonly type = ActionTypes.GetFail;

    constructor(public payload: { error: any, action: Action }) {}
  }


  export type ActionsUnion = 
    Create |
    CreateSuccess |
    CreateFail |
    Delete |
    DeleteSuccess |
    DeleteFail |
    Get |
    GetSuccess |
    GetFail;
}
