import { Component, Input, OnInit } from '@angular/core';

import { ModalService } from '@shared/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input('modalTitle') title: string = 'Modal Title';
  @Input('modalCloseText') closeText: string = 'Close';
  @Input() model : any;
  
  public state: any;
 
  constructor(
    private modalService: ModalService,
  ) { }

  ngOnInit(): void {
    this.modalService.state.subscribe((data: any) => this.state = data );
  }

  close() {
    this.modalService.close();
  }
}
