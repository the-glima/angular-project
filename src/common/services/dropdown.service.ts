import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DropdownService {
  optionSelected = new Subject<any>();
}
