import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Services
import {
  ApiInterceptor,
  DataService,
  TransactionService,
  CreditCardService
 } from '@app/shared/services';

// Components: Transaction
import { TransactionsComponent } from './components/transactions/transactions.component';
import { TransactionListComponent } from './components/transactions/transaction-list/transaction-list.component';
import { TransactionItemComponent } from './components/transactions/transaction-item/transaction-item.component';
import { TransactionCardComponent } from './components/transactions/transaction-item/transaction-card/transaction-card.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    TransactionsComponent,
    TransactionListComponent,
    TransactionItemComponent,
    TransactionCardComponent,
    DropdownComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [
    DataService,
    TransactionService,
    CreditCardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
