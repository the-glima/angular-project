import { Component, OnInit } from '@angular/core';
import { Transaction } from '@app/shared/models';
import { DataService, DropdownService, TransactionService } from '@app/shared/services';
import { Filter } from '@app/shared/models/filter.model';
import { FilterParam } from '@app/shared/models/filter-param';

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

  private getTransactions(filterParam: FilterParam) {
    this.dataService.getTranscations(filterParam)
      .subscribe(
        (transactions: Transaction) => {
          this.transactions = transactions;
        }
      );
  }

  private updateTransactions(filterParam: FilterParam) {
    this.transactionService.transactionsUpdated.subscribe(
      (filterParam: FilterParam) => {
        this.getTransactions(filterParam);
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
