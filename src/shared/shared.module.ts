import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconSpriteModule } from 'ng-svg-icon-sprite';

import { CreditCardBrandComponent } from './components/credit-card-brand/credit-card-brand.component';
import { LoadingComponent } from './components/loading/loading.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { FilterComponent } from './components/filter/filter.component';
import { DropdownService } from './services/dropdown.service';
import { HeaderComponent } from './components/header/header.component';

const COMPONENTS = [
  CreditCardBrandComponent,
  LoadingComponent,
  DropdownComponent,
  FilterComponent,
  HeaderComponent
]

@NgModule({
  imports: [
    CommonModule,
    IconSpriteModule,
    IconSpriteModule.forRoot({ path: 'assets/icons/sprite.svg' })
  ],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  providers: [DropdownService]
})
export class SharedModule {}
