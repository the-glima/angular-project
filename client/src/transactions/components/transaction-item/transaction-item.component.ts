import { Component, Input, ViewEncapsulation } from '@angular/core';

import { Transaction } from '@shared/models';
import { fadeInOutAnimation } from '@shared/animations';

@Component({
  selector: 'app-transaction-item',
  templateUrl: './transaction-item.component.html',
  styleUrls: ['./transaction-item.component.scss'],
  animations: [fadeInOutAnimation]
})
export class TransactionItemComponent {
  @Input() transaction!: Transaction;
  cardInfo = false;

  showCardInfo() {
    this.cardInfo = !this.cardInfo;
  }
}
