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
  error: boolean = false;
  isLoading: boolean = false;
  private reloadSubscritpion: Subscription;
  private updateSubscritpion: Subscription;

  constructor(private TransactionService: TransactionService) {}

  ngOnInit() {
    this.getTransactions(null);
    this.watchTransactions();
    this.updateTransactions();
  }

  ngOnDestroy() {
    this.reloadSubscritpion.unsubscribe();
    this.updateSubscritpion.unsubscribe();
  }

  private getTransactions(filterParam: FilterParam) {
    this.TransactionService.getTranscations(filterParam)
      .subscribe(
        (transactions: Transaction) => this.transactions = transactions,
        (error) => this.error = true
      );
  }

  private watchTransactions() {
    this.reloadSubscritpion = this.TransactionService.reloadTransactions.subscribe(
      (filterParam: FilterParam) => {
        this.error = false;
        this.isLoading = true;

        setTimeout (() => {
          this.getTransactions(filterParam);
          this.TransactionService.updatedTransactions.next(filterParam);
        }, 800);
      }
    );
  }

  private updateTransactions() {
    this.updateSubscritpion = this.TransactionService.updatedTransactions.subscribe(
      () => this.isLoading = false
    );
  }
}
