import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  private showDropdown: boolean = false;

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  clickedInside($event: Event){
    $event.preventDefault();
    $event.stopPropagation();

    console.log("CLICKED INSIDE, MENU WON'T HIDE");
  }

  @HostListener('document:click')
  clickedOutside(){
    console.log("CLICKED OUTSIDE");

    if (this.showDropdown){
      this.showDropdown = false;
    }
  }
}
