import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoadingComponent {
  @Input() load: boolean = false;
  @Input() text: boolean = true;
  @Input() icon: boolean = true;
}
