import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionContainerComponent } from './transaction.container';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TransactionService } from '@transactions/services';

class MockTransactionService {
  isLoggedIn = true;
  user = { name: 'Test User' };
}

xdescribe('TransactionContainerComponent', () => {
  let component: TransactionContainerComponent;
  let fixture: ComponentFixture<TransactionContainerComponent>;
  let transactionService: TransactionService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TransactionContainerComponent],
      providers: [
        TransactionContainerComponent,
        { provide: TransactionService, useClass: MockTransactionService }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionContainerComponent);
    component = fixture.componentInstance;
    component = TestBed.get(TransactionContainerComponent);
    transactionService = TestBed.get(TransactionService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should show a list of Transactions', () => {
    console.log(component);

    expect(component.transactions).toBeUndefined();
  });
});
