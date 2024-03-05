import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NighborhoodsComponent } from './nighborhoods.component';

describe('NighborhoodsComponent', () => {
  let component: NighborhoodsComponent;
  let fixture: ComponentFixture<NighborhoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NighborhoodsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NighborhoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
