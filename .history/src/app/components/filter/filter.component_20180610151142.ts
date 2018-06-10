import { Component, OnInit, HostListener } from '@angular/core';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { apiConfig } from '@app/app.config';
import { DropdownService, TransactionService } from '@app/shared/services';
import { Dropdown, Filter } from '@app/shared/models';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  currencyFilters = apiConfig.transaction_filters.currencyCode;
  paymentFilters = apiConfig.transaction_filters.paymentType;
  filters: Filter[] = [];
  private clicks = new Subject();

  constructor(
    private dropdownService: DropdownService,
    private transactionService: TransactionService
  ) {}

  ngOnInit() {
    this.dropdownService.dropdownOptionSelected.subscribe(
      (dropdown: Dropdown) => {
        const filterItem = {
          filterId: dropdown.dropdownId,
          filterType: dropdown.dropdownFilter,
          filterValue: dropdown.dropdownOptionSelected
        };

        const foundFilter: any = this.findFilter(this.filters, filterItem.filterId);

        if (foundFilter !== -1) {
          this.filters[foundFilter] = filterItem;
        } else {
          this.filters.push(filterItem);
        }
      }
    );
  }

  search($event: Event) {
    debugger

    this.clicks.pipe(
      debounceTime(1),
    ).subscribe((e) => {
      console.log(e);
      const filterParam: string = this.getFilterParams(this.filters);
      this.transactionService.transactionsUpdate.emit(filterParam);
    });
  }

  @HostListener('click', ['$event'])
  clickEvent(event) {
    event.preventDefault();
    event.stopPropagation();

    this.clicks.next(event);
  }

  private findFilter(array: Array<any>, id: number) {
    return array.findIndex(el => el.filterId === id)
  }

  private getFilterParams(array: Array<any>) {
    return array.map((el) => {
      return `${el.filterType}=${el.filterValue}`;
    }).join('&');
  }
}
