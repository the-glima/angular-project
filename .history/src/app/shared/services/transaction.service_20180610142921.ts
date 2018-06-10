import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class TransactionService {
  transactionSelected = new EventEmitter<any>();
  transactionsUpdate = new EventEmitter<any>();

  constructor() {}
}
