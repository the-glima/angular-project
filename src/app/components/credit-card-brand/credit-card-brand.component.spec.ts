import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardBrandComponent } from './credit-card-brand.component';

describe('CreditCardBrandComponent', () => {
  let component: CreditCardBrandComponent;
  let fixture: ComponentFixture<CreditCardBrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditCardBrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditCardBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
