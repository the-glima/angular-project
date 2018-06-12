import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardBrandComponent } from './credit-card-brand.component';
import { NO_ERRORS_SCHEMA, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

fdescribe('CreditCardBrandComponent', () => {
  let component: CreditCardBrandComponent;
  let fixture: ComponentFixture<CreditCardBrandComponent>;
  let deCardName: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditCardBrandComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditCardBrandComponent);
    component = fixture.componentInstance;
    deCardName = fixture.debugElement.query(By.css('.credit-card-name'));
    fixture.detectChanges();
  });

  it('should create', () => {
    console.log(component.cardName);
    expect(component).toBeTruthy();
  });
});
