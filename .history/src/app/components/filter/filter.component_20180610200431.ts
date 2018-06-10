import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { debounceTime } from 'rxjs/operators';

import { apiConfig } from '@app/app.config';
import { DropdownService, TransactionService } from '@app/shared/services';
import { Dropdown, Filter } from '@app/shared/models';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class FilterComponent implements OnInit {
  currencyFilters = apiConfig.transaction_filters.currencyCode;
  paymentFilters = apiConfig.transaction_filters.paymentType;
  filters: Filter[] = [];
  private clicks = new Subject();
  private subscription: Subscription;

  constructor(
    private dropdownService: DropdownService,
    private transactionService: TransactionService
  ) {}

  ngOnInit() {
    this.clicks.pipe(debounceTime(300)).subscribe(() => {
      const filterParam: string = this.getFilterParams(this.filters);

      this.transactionService.transactionsUpdate.emit(filterParam);
    });

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

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  search(event: Event) {
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
