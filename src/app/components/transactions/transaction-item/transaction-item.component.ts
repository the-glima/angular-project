import { Component, Input, Output } from '@angular/core';

import { Transaction } from '@app/shared/models';

@Component({
  selector: 'app-transaction-item',
  templateUrl: './transaction-item.component.html',
  styleUrls: ['./transaction-item.component.scss']
})
export class TransactionItemComponent {
  @Input() transaction: Transaction;
  toggleTransactionCard: boolean = false;

  showTransactionCard() {
    this.toggleTransactionCard = !this.toggleTransactionCard;
  }
}
