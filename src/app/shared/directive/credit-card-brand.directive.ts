import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appCreditCardBrand]'
})
export class CreditCardBrandDirective {
  @Input('creditCardNumber') cardNumber: string;

  cardRegex: any = {
    amex: /^3[47]/,
    dinnersClub: /^3(?:0[0-5]|[68][0-9])[0-9]/,
    discover: /^6(?:011|[45][0-9])/,
    jbc: /^(?:2131|1800|35\d)\d$/,
    maestro: /^(?:5[0678]\d\d|6304|6390|67\d\d)/,
    master: /^(?:5[1-5][0-9]|222[1-9]|22[3-9][0-9]|2[3-6][0-9]|27[01][0-9]|2720)/,
    visa: /^4[0-9]/
  }

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    const wrapperElem = this.renderer.createElement('div');
    const svgElem = this.renderer.createElement('svg');
    const useElem = this.renderer.createElement('use');
    const textElem = this.renderer.createElement('span');

    const cardName = this.getCardBrand(this.cardRegex, this.cardNumber);

    useElem.setAttribute('use', 'xlink:href', `#icon-credit-card-${cardName}`, 'svg');
    textElem.innerText = cardName;

    svgElem.appendChild(useElem);
    wrapperElem.appendChild(svgElem);
    wrapperElem.appendChild(textElem);

    this.renderer.appendChild(this.el.nativeElement, wrapperElem);
  }

  private getCardBrand(regex: any, string: string) {
    return Object.keys(regex).find(el => {
      const result = regex[el].test(string);

      return result;
    });
  }
}
