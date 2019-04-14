import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconSpriteModule } from 'ng-svg-icon-sprite';
import * as fromCommonComponents from '@common/components';

@NgModule({
  imports: [
    CommonModule,
    IconSpriteModule,
    IconSpriteModule.forRoot({ path: 'assets/icons/sprite.svg' })
  ],
  declarations: [...Object.values(fromCommonComponents)],
  exports: [...Object.values(fromCommonComponents)]
})
export class ComponentsModule {}
