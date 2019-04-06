import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

import { ComponentsModule } from '@common/common.module';

import { TransactionContainerComponent } from '@transactions/container/transaction.container';
import * as fromComponents from '@transactions/components';
import * as fromReducers from '@transactions/reducers';
import { fromEffects } from '@transactions/effects';
import { environment } from '@env/environment.prod';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    ComponentsModule,
    HttpClientModule,
    StoreModule.forFeature('transactions', fromReducers.reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot(fromEffects)
  ],
  declarations: [
    TransactionContainerComponent,
    ...Object.values(fromComponents)
  ],
  exports: [TransactionContainerComponent]
})
export class TransactionsModule {}
