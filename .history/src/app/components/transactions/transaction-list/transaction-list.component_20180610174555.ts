import { Component, OnInit } from '@angular/core';

import { DataService, TransactionService } from '@app/shared/services';
import { Transaction, FilterParam } from '@app/shared/models';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {
  transactions: Transaction;
  transactionsError: boolean = false;

  constructor(
    private dataService: DataService,
    private transactionService: TransactionService
  ) {}

  ngOnInit() {
    this.getTransactions(null);

    this.transactionService.transactionsUpdate.subscribe(
      (filterParam: FilterParam) => {
        this.getTransactions(filterParam);
        console.log(filterParam);
      }
    );
  }

  private getTransactions(filterParam: FilterParam) {
    this.dataService.getTranscations(filterParam)
      .subscribe(
        (transactions: Transaction) => this.transactions = transactions,
        () => this.transactionsError = true
      );
  }
}
