import { Component, OnInit } from '@angular/core';

import { DataService, TransactionService } from '@app/shared/services';
import { Transaction, FilterParam } from '@app/shared/models';
import { fadeInOutAnimation } from '@app/shared/animations';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss'],
  animations: [fadeInOutAnimation]
})
export class TransactionListComponent implements OnInit {
  transactions: Transaction;
  transactionsError: boolean = true;

  constructor(
    private dataService: DataService,
    private transactionService: TransactionService
  ) {}

  ngOnInit() {
    this.getTransactions(null);

    // this.transactionService.transactionsUpdate.subscribe(
    //   (filterParam: FilterParam) => {
    //     this.transactionsError = false;
    //     this.getTransactions(filterParam);
    //   }
    );
  }

  private getTransactions(filterParam: FilterParam) {
    this.dataService.getTranscations(filterParam)
      .subscribe(
        (transactions: Transaction) => this.transactions = transactions,
        (error) => {
          debugger
          console.log(error);
          this.transactionsError = true;
        }
      );
  }
}
