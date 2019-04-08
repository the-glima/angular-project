import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconSpriteModule } from 'ng-svg-icon-sprite';

import * as fromCommonComponents from '@common/components';
import * as fromServices from '@common/services';
import * as fromTransactionsServices from '@transactions/services';

@NgModule({
  imports: [
    CommonModule,
    IconSpriteModule,
    IconSpriteModule.forRoot({ path: 'assets/icons/sprite.svg' })
  ],
  declarations: [...Object.values(fromCommonComponents)],
  exports: [...Object.values(fromCommonComponents)],
  providers: [
    ...Object.values(fromServices),
    ...Object.values(fromTransactionsServices)
  ]
})
export class ComponentsModule {}
