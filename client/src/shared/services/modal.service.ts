import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ModalService {
  state = new BehaviorSubject<'open' | 'close'>('close');

  open() {
    this.state.next('open');
  }

  close() {
    this.state.next('close');
  }
}
