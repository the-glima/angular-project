import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

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
  @Output() clickEvent = new EventEmitter<any>();
  cardInfo = false;

  showCardInfo() {
    this.cardInfo = !this.cardInfo;
  }

  onClick(event: any, transaction: Transaction) {
    event.stopPropagation();

    this.clickEvent.emit(transaction);
  }
}
