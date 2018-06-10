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
  filter: Filter[] = [];

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

        this.filter.push(filterItem);
        console.log('FROM FILTER: ' + this.filter);
      }
    );
  }

  search() {
    console.log('SEARCH: ' + this.filter);
    // this.filterTransactions(this.filter);
  }

  findFilter(array: Array<any>, id: number) {
    array.find(el => el.id === id);
  }

  // private filterTransactions(filter: Filter) {
  //   this.transactionService.transactionsUpdated.emit(filter);
  // }
}
