import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-credit-card-brand',
  templateUrl: './credit-card-brand.component.html',
  styleUrls: ['./credit-card-brand.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CreditCardBrandComponent implements OnInit {
  @Input('creditCardNumber') number!: string;
  cardName!: string;
  regex: any = {
    amex: /^3[47]/,
    'dinners-club': /^3(?:0[0-5]|[68][0-9])[0-9]/,
    discover: /^6(?:011|[45][0-9])/,
    jbc: /^(?:2131|1800|35\d)$/,
    maestro: /^(?:5[0678]\d\d|6304|6390|67\d\d)/,
    master: /^(?:5[1-5][0-9]|222[1-9]|22[3-9][0-9]|2[3-6][0-9]|27[01][0-9]|2720)/,
    visa: /^4[0-9]/
  };

  ngOnInit() {
    this.cardName = this.getCardBrand(this.regex, this.number);
  }

  getCardBrand(regex: any, string: string) {
    const cardBrand = Object.keys(regex).find(el => {
      const result = regex[el].test(string);

      return result;
    });

    return cardBrand || 'default';
  }
}
