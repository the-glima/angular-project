import { Component, Input } from '@angular/core';

import { Transaction } from '@common/models';

@Component({
  selector: 'app-transaction-card',
  templateUrl: './transaction-card.component.html',
  styleUrls: ['./transaction-card.component.scss']
})
export class TransactionCardComponent {
  @Input() transaction: Transaction;
}
