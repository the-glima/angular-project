import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';

import { TransactionsModule } from '@transactions/transactions.module';
import { SharedModule } from '@shared/shared.module';

import { environment } from '@env/environment.prod';
import { ApiInterceptor } from '../shared/services/api.interceptor';

@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
    TransactionsModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  exports: [SharedModule],
  providers: [
    SharedModule,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true
    }
  ],
})
export class AppModule {}
