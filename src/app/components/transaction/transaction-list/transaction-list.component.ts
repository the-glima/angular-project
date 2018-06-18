import { Component, OnInit, OnDestroy } from '@angular/core';

import { TransactionService } from '@app/shared/services';
import { Transaction, FilterParam } from '@app/shared/models';
import { fadeInOutAnimation } from '@app/shared/animations';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss'],
  animations: [fadeInOutAnimation]
})
export class TransactionListComponent implements OnInit, OnDestroy {
  transactions: Transaction;
  showError: boolean = false;
  errorMessage: string;
  isLoading: boolean = false;
  private fetchSubscritpion: Subscription;
  private updateSubscritpion: Subscription;

  constructor(private transactionService: TransactionService) {}

  ngOnInit() {
    this.getTransactions(null);
    this.watchTransactions();
    this.updateTransactions();
  }

  ngOnDestroy() {
    this.fetchSubscritpion.unsubscribe();
    this.updateSubscritpion.unsubscribe();
  }

  private getTransactions(filterParam: FilterParam) {
    this.transactionService.getTranscations(filterParam)
      .subscribe(
        (transactions: Transaction) => this.transactions = transactions,
        (error) => {
          this.showError = true;
          this.errorMessage = error['error']['message']
        }
      );
  }

  private watchTransactions() {
    this.fetchSubscritpion = this.transactionService.fetchTransactions.subscribe(
      (filterParam: FilterParam) => {
        this.showError = false;
        this.isLoading = true;

        setTimeout (() => {
          this.getTransactions(filterParam);
          this.transactionService.updatedTransactions.next(filterParam);
        }, 800);
      }
    );
  }

  private updateTransactions() {
    this.updateSubscritpion = this.transactionService.updatedTransactions.subscribe(
      () => this.isLoading = false
    );
  }
}
