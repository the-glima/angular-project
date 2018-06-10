import { Component, OnInit } from '@angular/core';

import { DataService, TransactionService } from '@app/shared/services';
import { Transaction } from '@app/shared/models';
import { FilterParam } from '@app/shared/models/filter-param.model';

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

    this.transactionService.transactionsUpdate.subscribe(
      (filterParam: FilterParam) => {
        this.getTransactions(filterParam);
      }
    );
  }

  private getTransactions(filterParam: FilterParam) {
    this.dataService.getTranscations(filterParam)
      .subscribe(
        (transactions: Transaction) => {
          this.transactions = transactions;
        }
      );
  }
}
