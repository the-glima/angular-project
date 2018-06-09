import { Component, OnInit } from '@angular/core';
import { Transaction } from '@app/shared/models';
import { DataService } from '@app/shared/services';
import { TransactionService } from '@app/shared/services/transaction.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {
  transactions: Transaction;
  // transactionSelected: Transaction;
  // transactionToggle: boolean = false;

  constructor(
    private dataService: DataService
    // private transactionService: TransactionService
  ) {}

  ngOnInit() {
    this.getTransactions();
    // this.toggleTransactionCard();
  }

  private getTransactions() {
    this.dataService.getTranscations()
      .subscribe(
        (transactions: Transaction) => {
          this.transactions = transactions;
        }
      );
  }

  // private toggleTransactionCard() {
  //   this.transactionService.transactionSelected.subscribe(
  //     (data) => {
  //       this.transactionToggle = data.show;
  //       this.transactionSelected = data.transaction;

  //       console.log(this.transactionToggle);
  //       console.log(this.transactionSelected);
  //     }
  //   );
  // };
}
