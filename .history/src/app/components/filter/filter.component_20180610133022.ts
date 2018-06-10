import { Component, OnInit } from '@angular/core';

import { apiConfig } from '@app/app.config';
import { DropdownService, DataService, TransactionService } from '@app/shared/services';
import { Dropdown } from '@app/shared/models/dropdown.model';
import { Filter } from '@app/shared/models/filter.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  currencyFilters = apiConfig.transaction_filters.currencyCode;
  paymentFilters = apiConfig.transaction_filters.paymentType;
  filters: Filter[] = [];

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

        console.log('FROM FILTER');

        const foundFilter: any = this.findFilter(this.filters, filterItem.filterId);
        console.log(foundFilter);

        debugger

        if (foundFilter !== -1) {
          this.filters[foundFilter.index] = filterItem;
        } else {
          this.filters.push(filterItem);
        }
      }
    );
  }

  search() {
    console.log('SEARCH: ' + this.filters);
    // this.filterTransactions(this.filter);
  }

  findFilter(array: Array<any>, id: number) {
    return array.findIndex(el => el.filterId === id)
  }

  // private filterTransactions(filter: Filter) {
  //   this.transactionService.transactionsUpdated.emit(filter);
  // }
}
