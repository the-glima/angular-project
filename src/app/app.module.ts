import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Component: Shared
import { CreditCardBrandComponent } from './components/credit-card-brand/credit-card-brand.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { HeaderComponent } from './components/header/header.component';
import { FilterComponent } from './components/filter/filter.component';
import { LoadingComponent } from './components/loading/loading.component';

// Components: Transaction
import {
  TransactionsComponent,
  TransactionListComponent,
  TransactionItemComponent,
  TransactionHeaderComponent,
  TransactionCardComponent
} from './components/transaction/index';

// Services
import {
  TransactionService,
  DropdownService
} from '@app/shared/services';

@NgModule({
  declarations: [
    AppComponent,
    TransactionsComponent,
    TransactionListComponent,
    TransactionItemComponent,
    TransactionCardComponent,
    DropdownComponent,
    HeaderComponent,
    FilterComponent,
    LoadingComponent,
    CreditCardBrandComponent,
    TransactionHeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [
    TransactionService,
    DropdownService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
