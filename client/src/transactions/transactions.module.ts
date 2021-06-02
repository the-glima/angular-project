import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '@shared/shared.module';

import { TransactionContainerComponent } from '@transactions/container/transaction.container';
import * as fromReducers from '@transactions/reducers';
import * as fromEffects from '@transactions/effects';

import { environment } from '@env/environment.prod';
import { TransactionCardComponent, TransactionHeaderComponent, TransactionItemComponent } from './components';
import { TransactionService } from './services';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    StoreModule.forFeature('transactions', fromReducers.reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot([...Object.values(fromEffects)])
  ],
  declarations: [
    TransactionContainerComponent,
    TransactionItemComponent,
    TransactionHeaderComponent,
    TransactionCardComponent,
  ],
  exports: [TransactionContainerComponent],
  providers: [TransactionService]
})
export class TransactionsModule {}
