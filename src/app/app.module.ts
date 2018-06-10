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
  CreditCardService,
  DropdownService
} from '@app/shared/services';

// Component: Header
import { HeaderComponent } from './components/header/header.component';

// Component: Filter
import { FilterComponent } from './components/filter/filter.component';

// Component: Dropdown
import { DropdownComponent } from './components/dropdown/dropdown.component';

// Components: Transaction
import {
  TransactionsComponent,
  TransactionListComponent,
  TransactionItemComponent,
  TransactionCardComponent
} from './components/transactions/index';

@NgModule({
  declarations: [
    AppComponent,
    TransactionsComponent,
    TransactionListComponent,
    TransactionItemComponent,
    TransactionCardComponent,
    DropdownComponent,
    HeaderComponent,
    FilterComponent
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
    DropdownService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
