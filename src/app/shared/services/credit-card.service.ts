import { Injectable } from '@angular/core';

@Injectable()
export class CreditCardService {
  visa = /^4[0-9]{3}/;

  constructor() { }

  showBrand(cardNumber: string) {
    this.visa.test(cardNumber);
    console.log('VISA?: ' + this.visa.test(cardNumber));
  }
}
