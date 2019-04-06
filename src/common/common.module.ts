import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as fromCommonComponents from '@common/components';
import * as fromServices from '@common/services';
import * as fromTransactionsServices from '@transactions/services';

@NgModule({
  imports: [CommonModule],
  declarations: [...Object.values(fromCommonComponents)],
  exports: [...Object.values(fromCommonComponents)],
  providers: [
    ...Object.values(fromServices),
    ...Object.values(fromTransactionsServices)
  ]
})
export class ComponentsModule {}
