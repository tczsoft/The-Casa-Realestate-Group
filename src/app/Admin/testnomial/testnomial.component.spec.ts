import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestnomialComponent } from './testnomial.component';

describe('TestnomialComponent', () => {
  let component: TestnomialComponent;
  let fixture: ComponentFixture<TestnomialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestnomialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestnomialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
