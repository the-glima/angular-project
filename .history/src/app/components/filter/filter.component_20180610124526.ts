import { Component, OnInit } from '@angular/core';

import { apiConfig } from '@app/app.config';
import { DropdownService, DataService, TransactionService } from '@app/shared/services';
import { Dropdown } from '@app/shared/models/dropdown.model';
import { Filter } from '@app/shared/models/filter-param.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  currencyFilters = apiConfig.transaction_filters.currencyCode;
  paymentFilters = apiConfig.transaction_filters.paymentType;
  filter: Filter[];

  constructor(
    private dropdownService: DropdownService,
    private transactionService: TransactionService
  ) {}

  ngOnInit() {
    this.dropdownService.dropdownOptionSelected.subscribe(
      (dropdown: Dropdown) => {
        const filterItem = [{
          filter: [{
            filterId: dropdown.dropdownId,
            filterType: dropdown.dropdownFilter,
            filterValue: dropdown.dropdownOptionSelected
          }]
        }];


        console.log(filterItem);

        console.log('FROM FILTER: ' + this.filter);
        // this.filter.push(filterItem);
      }
    );
  }

  search() {
    console.log('SEARCH: ' + this.filter);
    // this.filterTransactions(this.filter);
  }

  // private filterTransactions(filter: Filter) {
  //   this.transactionService.transactionsUpdated.emit(filter);
  // }
}
