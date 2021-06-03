import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconSpriteModule } from 'ng-svg-icon-sprite';

import { CreditCardBrandComponent } from './components/credit-card-brand/credit-card-brand.component';
import { LoadingComponent } from './components/loading/loading.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { FilterComponent } from './components/filter/filter.component';
import { DropdownService } from './services/dropdown.service';
import { HeaderComponent } from './components/header/header.component';
import { ModalComponent } from './components/modal/modal.component';
import { ModalService } from './services/modal.service';

const COMPONENTS = [
  CreditCardBrandComponent,
  LoadingComponent,
  DropdownComponent,
  FilterComponent,
  HeaderComponent,
  ModalComponent
]

@NgModule({
  imports: [
    CommonModule,
    IconSpriteModule,
    IconSpriteModule.forRoot({ path: 'assets/sprites/sprite.svg' })
  ],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS, IconSpriteModule],
  providers: [DropdownService, ModalService]
})
export class SharedModule {}
