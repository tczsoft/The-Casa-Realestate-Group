import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotableTransactionComponent } from './notable-transaction.component';

describe('NotableTransactionComponent', () => {
  let component: NotableTransactionComponent;
  let fixture: ComponentFixture<NotableTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotableTransactionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotableTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
