import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class DropdownService {
  optionSelected = new Subject<any>();
}
