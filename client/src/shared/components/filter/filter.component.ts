import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { debounceTime } from 'rxjs/operators';

import { apiConfig } from '@app/app.config';
import { DropdownService } from '@shared/services/dropdown.service';
import { Dropdown, Filter } from '@shared/models';
import { Subject, Subscription } from 'rxjs';
import { fadeInOutAnimation } from '@shared/animations';
import { TransactionService } from '../../../transactions/services';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  animations: [fadeInOutAnimation],
  encapsulation: ViewEncapsulation.None
})
export class FilterComponent implements OnInit, OnDestroy {
  currencyFilters = apiConfig.transaction_api_filters.currencyCode;
  paymentFilters = apiConfig.transaction_api_filters.paymentType;
  filters: Filter[] = [];
  isLoading: boolean = false;
  private clicks = new Subject();
  private transactionSubscription!: Subscription;
  private dropdownSubscription!: Subscription;
  private searchSubscription!: Subscription;

  constructor(
    private dropdownService: DropdownService,
    private transactionService: TransactionService
  ) {}

  ngOnInit() {
    this.searchTransactions();
    this.watchDropdown();
    this.updateTransactions();
  }

  ngOnDestroy() {
    this.transactionSubscription.unsubscribe();
    this.dropdownSubscription.unsubscribe();
    this.searchSubscription.unsubscribe();
  }

  search(event: Event) {
    event.preventDefault();
    event.stopPropagation();

    this.clicks.next(event);
    this.isLoading = true;
  }

  private watchDropdown() {
    this.dropdownSubscription = this.dropdownService.optionSelected.subscribe(
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

  private updateTransactions() {
    this.transactionSubscription = this.transactionService.updatedTransactions.subscribe(
      () => this.isLoading = false
    );
  }

  private searchTransactions(){
    this.searchSubscription = this.clicks.pipe(debounceTime(300)).subscribe(() => {
      const filterParam: string = this.getFilterParams(this.filters);

      this.transactionService.fetchTransactions.next(filterParam);
    });
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
