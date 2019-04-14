import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';

import { TransactionsModule } from '@transactions/transactions.module';
import { ComponentsModule } from '@common/common.module';

import { environment } from '@env/environment.prod';

@NgModule({
  imports: [
    BrowserModule,
    ComponentsModule,
    TransactionsModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
