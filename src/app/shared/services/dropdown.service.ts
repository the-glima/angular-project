import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class DropdownService {
  dropdownOptionSelected = new EventEmitter<any>();

  constructor() { }
}
