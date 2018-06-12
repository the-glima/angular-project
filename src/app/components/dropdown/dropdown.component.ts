import { Component, HostListener, Input, ViewChild, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { DropdownService } from '@app/shared/services';
import { Dropdown } from '@app/shared/models/dropdown.model';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  @Input() dropdowbObject: any;
  @Input() dropdownOptionText: string;
  @ViewChild('title') title: ElementRef;
  @ViewChild('trigger') trigger: ElementRef;
  showDropdown: boolean = false;
  optionSelected: string;

  constructor(
    private dropdownService: DropdownService,
    private renderer: Renderer2
  ) {}

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  clickOption($event: Event, object: any, optionSelected: string) {
    $event.preventDefault();
    $event.stopPropagation();

    this.optionSelected = this.title.nativeElement.innerHTML = optionSelected;
    this.renderer.setStyle(this.trigger.nativeElement, 'text-transform', `${this.dropdownOptionText}`);

    const dropdown: Dropdown = {
      dropdownId: object.id,
      dropdownTitle: object.title,
      dropdownList: object.list,
      dropdownFilter: object.filter,
      dropdownOptionSelected: optionSelected
    };

    this.dropdownService.optionSelected.emit(dropdown);
    this.hideDropdown();
  }

  clickedInside($event: Event){
    $event.preventDefault();
    $event.stopPropagation();
  }

  @HostListener('document:click')
  clickedOutside(){
    this.hideDropdown();
  }

  private hideDropdown() {
    if (this.showDropdown){
      this.showDropdown = false;
    }
  }
}
