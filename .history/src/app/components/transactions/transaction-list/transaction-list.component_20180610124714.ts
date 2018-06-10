import { Component, OnInit } from '@angular/core';
import { Transaction } from '@app/shared/models';
import { DataService, DropdownService, TransactionService } from '@app/shared/services';
import { Filter } from '@app/shared/models/filter.model';
import { Dropdown } from '@app/shared/models/dropdown.model';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {
  transactions: Transaction;

  constructor(
    private dataService: DataService,
    private transactionService: TransactionService
  ) {}

  ngOnInit() {
    this.getTransactions(null);
    // this.updateTransactions();
  }

  private getTransactions(filter: Filter) {
    this.dataService.getTranscations(filter)
      .subscribe(
        (transactions: Transaction) => {
          this.transactions = transactions;
        }
      );
  }

  private updateTransactions(filter: Filter) {
    this.transactionService.transactionsUpdated.subscribe(
      (filter: Filter) => {
        this.getTransactions(filter);
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
