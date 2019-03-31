import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

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

import { appReducers, appEffects } from '@app/store/';

// Services
import { TransactionService, DropdownService } from '@app/shared/services';
import { environment } from '@env/environment.prod';
import { EffectsModule } from '@ngrx/effects';

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
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot(appEffects)
  ],
  providers: [TransactionService, DropdownService],
  bootstrap: [AppComponent]
})
export class AppModule {}
