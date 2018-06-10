import { Component, OnInit } from '@angular/core';

import { apiConfig } from '@app/app.config';
import { DropdownService, TransactionService } from '@app/shared/services';
import { Dropdown } from '@app/shared/models/dropdown.model';
import { Filter } from '@app/shared/models/filter.model';
import { FilterParam } from '@app/shared/models/filter-param';

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

        const foundFilter: any = this.findFilter(this.filters, filterItem.filterId);

        if (foundFilter !== -1) {
          this.filters[foundFilter] = filterItem;
        } else {
          this.filters.push(filterItem);
        }
      }
    );
  }

  search() {
    const filterParams: FilterParam = this.getFilterParams(this.filters);

    this.transactionService.transactionsUpdated.emit(filterParams);
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
