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
  error: boolean = false;
  isLoading: boolean = false;

  constructor(
    private dataService: DataService,
    private transactionService: TransactionService
  ) {}

  ngOnInit() {
    this.getTransactions(null);

    // Updating Transcations
    this.transactionService.update.subscribe(
      (filterParam: FilterParam) => {
        this.error = false;
        this.isLoading = true;

        setTimeout (() => {
          this.getTransactions(filterParam);
          this.transactionService.updated.emit(true);
        }, 800);
      }
    );

    // When transactions are updated
    this.transactionService.updated.subscribe(
      () => {
        this.isLoading = false;
      }
    );
  }

  private getTransactions(filterParam: FilterParam) {
    this.dataService.getTranscations(filterParam)
      .subscribe(
        (transactions: Transaction) => this.transactions = transactions,
        (error) => {
          console.log(error);
          this.error = true;
        }
      );
  }
}
