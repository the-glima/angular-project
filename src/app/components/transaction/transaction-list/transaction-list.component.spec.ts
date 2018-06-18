import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionListComponent } from './transaction-list.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TransactionService } from '@app/shared/services';

class MockTransactionService {
  isLoggedIn = true;
  user = { name: 'Test User'};
};

xdescribe('TransactionListComponent', () => {
  let component: TransactionListComponent;
  let fixture: ComponentFixture<TransactionListComponent>;
  let transactionService: TransactionService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionListComponent ],
      providers: [
        TransactionListComponent,
        { provide: TransactionService, useClass: MockTransactionService }
      ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionListComponent);
    component = fixture.componentInstance;
    component = TestBed.get(TransactionListComponent);
    transactionService = TestBed.get(TransactionService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should show a list of Transactions', () => {
    console.log(component);

    expect(component.transactions).toBeUndefined()
  });
});
