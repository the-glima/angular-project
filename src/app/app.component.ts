import { Component, OnInit } from '@angular/core';
import { DataService } from '@app/shared/services';
import { Transaction } from '@app/shared/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  transactions: Transaction;

  constructor(
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.getTransactions();
  }

  private getTransactions() {
    this.dataService.getTranscations()
      .subscribe(
        (transactions: Transaction) => {
          this.transactions = transactions;
        }
      );
  }
}
