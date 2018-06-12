import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class DropdownService {
  optionSelected = new EventEmitter<any>();

  constructor() { }
}
