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

        if (foundFilter) {
          this.filters[foundFilter] = filterItem;
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
    return array.map(find(el => el.filterId === id);

    arr1.map(obj => arr2.find(o => o.id === obj.id) || obj);
  }

  // private filterTransactions(filter: Filter) {
  //   this.transactionService.transactionsUpdated.emit(filter);
  // }
}
