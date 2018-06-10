import { Component, Input } from '@angular/core';

import { Transaction } from '@app/shared/models';
import { fadeInOutAnimation } from '@app/shared/animations';

@Component({
  selector: 'app-transaction-item',
  templateUrl: './transaction-item.component.html',
  styleUrls: ['./transaction-item.component.scss'],
  animations: [fadeInOutAnimation]
})
export class TransactionItemComponent {
  @Input() transaction: Transaction;
  toggleTransactionCard: boolean = false;

  showTransactionCard(device: string) {
    this.toggleTransactionCard = !this.toggleTransactionCard;
  }
}
