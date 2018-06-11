import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class TransactionService {
  update = new EventEmitter<any>();
  updated = new EventEmitter<any>();
}
