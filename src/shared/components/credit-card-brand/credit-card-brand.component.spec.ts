import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardBrandComponent } from './credit-card-brand.component';

const mockRegex = {
  amex: /^3[47]/,
  dinnersClub: /^3(?:0[0-5]|[68][0-9])[0-9]/,
  discover: /^6(?:011|[45][0-9])/,
  jbc: /^(?:2131|1800|35\d)$/,
  maestro: /^(?:5[0678]\d\d|6304|6390|67\d\d)/,
  master: /^(?:5[1-5][0-9]|222[1-9]|22[3-9][0-9]|2[3-6][0-9]|27[01][0-9]|2720)/,
  visa: /^4[0-9]/
}

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
    spyOn(component, 'ngOnInit');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show "default" as the credit card name', () => {
    const element: HTMLElement = fixture.nativeElement;
    const cardNameElement = element.querySelector('span');

    expect(component.cardName).toBeUndefined();
    expect(cardNameElement.textContent).toEqual('');
  });

  it('should show "visa" as the credit card name', () => {
    const element: HTMLElement = fixture.nativeElement;
    const cardNameElement = element.querySelector('span');

    component.cardName = component.getCardBrand(mockRegex, '4100');
    expect(component.cardName).toEqual('visa');

    fixture.detectChanges();
    expect(cardNameElement.textContent).toEqual('visa');
  });

  it('should check each type of card', () => {
    component.cardName = component.getCardBrand(mockRegex, '4100');
    expect(component.cardName).toEqual('visa');

    component.cardName = component.getCardBrand(mockRegex, '5100');
    expect(component.cardName).toEqual('master');

    component.cardName = component.getCardBrand(mockRegex, '3400');
    expect(component.cardName).toEqual('amex');

    component.cardName = component.getCardBrand(mockRegex, '3000');
    expect(component.cardName).toEqual('dinnersClub');

    component.cardName = component.getCardBrand(mockRegex, '2131');
    expect(component.cardName).toEqual('jbc');

    component.cardName = component.getCardBrand(mockRegex, '56304');
    expect(component.cardName).toEqual('maestro');

    component.cardName = component.getCardBrand(mockRegex, '0000');
    expect(component.cardName).toEqual('default');
  });
});
