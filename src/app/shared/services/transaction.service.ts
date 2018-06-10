import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class TransactionService {
  transactionSelected = new EventEmitter<any>();
  transactionsUpdated = new EventEmitter<any>();

  constructor() {}
}
